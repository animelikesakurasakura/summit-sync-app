
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/use-auth";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import Workshops from "./pages/Workshops";
import Map from "./pages/Map";
import Chat from "./pages/Chat";
import FAQ from "./pages/FAQ";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Защищенный роут
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  // Пока проверяем авторизацию, ничего не показываем
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Загрузка...</div>;
  }
  
  // Если не авторизован, перенаправляем на страницу входа
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  // Если авторизован, показываем содержимое
  return <>{children}</>;
};

// Для маршрутов, доступных только неавторизованным пользователям
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  // Пока проверяем авторизацию, ничего не показываем
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Загрузка...</div>;
  }
  
  // Если авторизован, перенаправляем на главную
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  // Если не авторизован, показываем содержимое
  return <>{children}</>;
};

// Внутреннее приложение с проверкой авторизации
const AuthApp = () => {
  return (
    <Routes>
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
      <Route path="/" element={
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="workshops" element={<Workshops />} />
        <Route path="map" element={<Map />} />
        <Route path="chat" element={<Chat />} />
        <Route path="faq" element={<FAQ />} />
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
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AuthApp />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
