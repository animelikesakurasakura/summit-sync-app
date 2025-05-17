
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScheduleCardProps {
  time: string;
  title: string;
  location: string;
  speaker?: string;
  type: "session" | "workshop" | "break";
  registered?: boolean;
}

const ScheduleCard = ({
  time,
  title,
  location,
  speaker,
  type,
  registered,
}: ScheduleCardProps) => {
  return (
    <div className={cn(
      "flex items-stretch border-l-4 rounded-r-lg shadow-sm hover:shadow transition-shadow px-4 py-3 mb-4",
      type === "session" && "border-primary bg-primary-100/50",
      type === "workshop" && "border-secondary bg-secondary-100/50",
      type === "break" && "border-accent bg-accent-100/50",
    )}>
      <div className="w-24 flex-shrink-0 pr-4 border-r">
        <div className="text-sm font-medium">{time}</div>
      </div>
      
      <div className="flex-grow px-4">
        <h4 className="font-medium">{title}</h4>
        {speaker && <p className="text-sm text-muted-foreground">{speaker}</p>}
        
        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <MapPin className="mr-1 h-3 w-3" />
            <span>{location}</span>
          </div>
          
          {type === "workshop" && (
            <div className="flex items-center text-xs text-muted-foreground">
              <Users className="mr-1 h-3 w-3" />
              <span>Мастер-класс</span>
            </div>
          )}
        </div>
      </div>
      
      {type === "workshop" && (
        <div className="flex items-start">
          <div className={cn(
            "px-2 py-1 text-xs rounded-md",
            registered 
              ? "bg-accent-100 text-accent-800" 
              : "bg-muted text-muted-foreground"
          )}>
            {registered ? "Вы записаны" : "Доступно"}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleCard;
