
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Users, Map, MessageCircle } from "lucide-react";

const MobileNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const links = [
    { to: "/", icon: <Home className="h-5 w-5" />, label: "Главная" },
    { to: "/schedule", icon: <Calendar className="h-5 w-5" />, label: "Расписание" },
    { to: "/workshops", icon: <Users className="h-5 w-5" />, label: "Мастер-классы" },
    { to: "/map", icon: <Map className="h-5 w-5" />, label: "Карта" },
    { to: "/chat", icon: <MessageCircle className="h-5 w-5" />, label: "Чат" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 w-full border-t bg-background z-40">
      <div className="grid grid-cols-5 h-16">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={cn(
              "flex flex-col items-center justify-center space-y-1 text-xs transition-colors",
              isActive(link.to)
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
