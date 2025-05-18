
import { useState } from "react";
import { Bell, Menu, Search, LogOut, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  const { toast } = useToast();
  const { user, logout, isAuthenticated } = useAuth();
  const [notifications, setNotifications] = useState(3);

  const handleNotificationClick = () => {
    toast({
      title: "Уведомления",
      description: "У вас 3 новых уведомления",
    });
    setNotifications(0);
  };

  // Получаем инициалы пользователя
  const getUserInitials = () => {
    if (!user) return "?";
    return user.name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mr-2"
          onClick={onMenuToggle}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
            Конференция 2025
          </Link>
        </div>
        
        <div className="hidden md:flex items-center ml-8 space-x-1">
          <div className="relative max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Поиск..." 
              className="pl-8 w-[200px] md:w-[300px] rounded-full bg-muted" 
            />
          </div>
        </div>
        
        <div className="flex items-center ml-auto">
          {isAuthenticated ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {notifications > 0 && (
                      <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-white">
                        {notifications}
                      </span>
                    )}
                    <span className="sr-only">Уведомления</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[300px]">
                  <div className="flex items-center justify-between p-2 border-b">
                    <p className="font-medium">Уведомления</p>
                  </div>
                  <div className="p-2">
                    <p className="text-sm text-muted-foreground mb-2">Новые</p>
                    <DropdownMenuItem className="p-3 cursor-pointer" onClick={handleNotificationClick}>
                      <div>
                        <div className="font-medium">Открыта запись на новый мастер-класс</div>
                        <div className="text-sm text-muted-foreground">1 час назад</div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-3 cursor-pointer">
                      <div>
                        <div className="font-medium">Освободилось место на мастер-классе</div>
                        <div className="text-sm text-muted-foreground">2 часа назад</div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-3 cursor-pointer">
                      <div>
                        <div className="font-medium">Изменилось время выступления</div>
                        <div className="text-sm text-muted-foreground">3 часа назад</div>
                      </div>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                      {getUserInitials()}
                    </span>
                    <span className="sr-only">Профиль</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center justify-start p-2 border-b">
                    <div className="flex flex-col space-y-1">
                      <p className="font-medium">{user?.name}</p>
                      <p className="text-xs text-muted-foreground">{user?.email}</p>
                    </div>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Настройки</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout} className="cursor-pointer text-destructive focus:text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Выйти</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
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
  );
};

export default Header;
