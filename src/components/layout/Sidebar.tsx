
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Calendar, 
  Map, 
  MessageCircle, 
  Users, 
  Settings, 
  HelpCircle,
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/hooks/use-auth";

interface SidebarProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const { getDashboardPath } = useAuth();
  
  const basePath = getDashboardPath();

  useEffect(() => {
    if (isMobile && open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobile, open]);

  const links = [
    { to: basePath, icon: <Calendar className="h-5 w-5 mr-2" />, label: "Главная" },
    { to: `${basePath}/schedule`, icon: <Calendar className="h-5 w-5 mr-2" />, label: "Расписание" },
    { to: `${basePath}/workshops`, icon: <Users className="h-5 w-5 mr-2" />, label: "Мастер-классы" },
    { to: `${basePath}/map`, icon: <Map className="h-5 w-5 mr-2" />, label: "Карта" },
    { to: `${basePath}/chat`, icon: <MessageCircle className="h-5 w-5 mr-2" />, label: "Чат" },
  ];

  const secondaryLinks = [
    { to: "/faq", icon: <HelpCircle className="h-5 w-5 mr-2" />, label: "FAQ" },
    { to: `${basePath}/settings`, icon: <Settings className="h-5 w-5 mr-2" />, label: "Настройки" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  if (!open && isMobile) {
    return null;
  }

  return (
    <>
      {isMobile && open && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={cn(
          "z-50 flex-col border-r bg-background",
          isMobile
            ? "fixed inset-y-0 left-0 h-full w-[260px] animate-fade-in"
            : "hidden md:flex h-[calc(100vh-4rem)] w-[250px] sticky top-16 overflow-y-auto"
        )}
      >
        {isMobile && (
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-bold">Меню</h3>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        )}
        
        <nav className="flex flex-col gap-1 p-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive(link.to)
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
              onClick={isMobile ? () => setOpen(false) : undefined}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto">
          <div className="px-4 py-2">
            <p className="text-xs uppercase font-medium text-muted-foreground tracking-wider">
              Дополнительно
            </p>
          </div>
          <nav className="flex flex-col gap-1 p-4 pt-0">
            {secondaryLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive(link.to)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
                onClick={isMobile ? () => setOpen(false) : undefined}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
