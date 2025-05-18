
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

const HomeLayout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center">
              <h2 className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">Конференция 2025</h2>
            </Link>
            <nav className="hidden md:flex items-center space-x-4">
              <Link to="/news" className="text-foreground hover:text-primary transition-colors">Новости</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">О конференции</Link>
              <Link to="/speakers" className="text-foreground hover:text-primary transition-colors">Спикеры</Link>
              <Link to="/activities" className="text-foreground hover:text-primary transition-colors">Активности</Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <Button asChild>
                <Link to="/dashboard">Личный кабинет</Link>
              </Button>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="outline" asChild>
                  <Link to="/login">Войти</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Регистрация</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      <footer className="border-t py-6 md:py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 Конференция. Все права защищены.
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/contacts" className="text-sm text-muted-foreground hover:text-foreground">
              Контакты
            </Link>
            <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeLayout;
