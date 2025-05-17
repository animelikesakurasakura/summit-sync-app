
import { useState } from "react";
import { Bell, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState(3);

  const handleNotificationClick = () => {
    toast({
      title: "Уведомления",
      description: "У вас 3 новых уведомления",
    });
    setNotifications(0);
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
          <h2 className="text-xl font-bold text-primary">Конференция 2025</h2>
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

          <Button variant="ghost" size="icon" className="ml-2">
            <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-medium">
              ИИ
            </span>
            <span className="sr-only">Профиль</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
