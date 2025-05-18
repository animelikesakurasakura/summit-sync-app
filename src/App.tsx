
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/use-auth";
import { ThemeProvider } from "@/hooks/use-theme";
import MainLayout from "./components/layout/MainLayout";
import OrganizerLayout from "./components/layout/OrganizerLayout";
import SpeakerLayout from "./components/layout/SpeakerLayout";
import HomeLayout from "./components/layout/HomeLayout";
import Dashboard from "./pages/Dashboard";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import SpeakerDashboard from "./pages/SpeakerDashboard";
import Schedule from "./pages/Schedule";
import Workshops from "./pages/Workshops";
import Map from "./pages/Map";
import Chat from "./pages/Chat";
import FAQ from "./pages/FAQ";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Activities from "./pages/Activities";
import Contacts from "./pages/Contacts";

const queryClient = new QueryClient();

// Защищенный роут для участников
const ParticipantRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading, user } = useAuth();
  
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Загрузка...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (user?.role !== "participant") {
    return <Navigate to={user?.role === "organizer" ? "/organizer" : "/speaker"} />;
  }
  
  return <>{children}</>;
};

// Защищенный роут для организаторов
const OrganizerRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading, user } = useAuth();
  
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Загрузка...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (user?.role !== "organizer") {
    return <Navigate to={user?.role === "participant" ? "/dashboard" : "/speaker"} />;
  }
  
  return <>{children}</>;
};

// Защищенный роут для спикеров
const SpeakerRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading, user } = useAuth();
  
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Загрузка...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (user?.role !== "speaker") {
    return <Navigate to={user?.role === "participant" ? "/dashboard" : "/organizer"} />;
  }
  
  return <>{children}</>;
};

// Для маршрутов, доступных только неавторизованным пользователям
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading, getDashboardPath } = useAuth();
  
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Загрузка...</div>;
  }
  
  if (isAuthenticated) {
    return <Navigate to={getDashboardPath()} />;
  }
  
  return <>{children}</>;
};

// Внутреннее приложение с проверкой авторизации
const AuthApp = () => {
  return (
    <Routes>
      {/* Публичные маршруты */}
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="activities" element={<Activities />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="faq" element={<FAQ />} />
      </Route>

      {/* Аутентификация */}
      <Route path="/login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
      <Route path="/register" element={
        <PublicRoute>
          <Register />
        </PublicRoute>
      } />

      {/* Защищенные маршруты для участников */}
      <Route path="/dashboard" element={
        <ParticipantRoute>
          <MainLayout />
        </ParticipantRoute>
      }>
        <Route index element={<Dashboard />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="workshops" element={<Workshops />} />
        <Route path="map" element={<Map />} />
        <Route path="chat" element={<Chat />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      
      {/* Защищенные маршруты для организаторов */}
      <Route path="/organizer" element={
        <OrganizerRoute>
          <OrganizerLayout />
        </OrganizerRoute>
      }>
        <Route index element={<OrganizerDashboard />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="workshops" element={<Workshops />} />
        <Route path="map" element={<Map />} />
        <Route path="chat" element={<Chat />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      
      {/* Защищенные маршруты для спикеров */}
      <Route path="/speaker" element={
        <SpeakerRoute>
          <SpeakerLayout />
        </SpeakerRoute>
      }>
        <Route index element={<SpeakerDashboard />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="workshops" element={<Workshops />} />
        <Route path="map" element={<Map />} />
        <Route path="chat" element={<Chat />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Основное приложение с провайдерами
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <AuthApp />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
