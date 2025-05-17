import { useState } from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog,
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface WorkshopProps {
  id: number;
  title: string;
  description: string;
  speaker: string;
  date: string;
  time: string;
  location: string;
  totalSeats: number;
  availableSeats: number;
  registered?: boolean;
  waitlist?: boolean;
  waitlistPosition?: number;
}

const WorkshopCard = ({
  id,
  title,
  description,
  speaker,
  date,
  time,
  location,
  totalSeats,
  availableSeats,
  registered = false,
  waitlist = false,
  waitlistPosition
}: WorkshopProps) => {
  const { toast } = useToast();
  const [isRegistered, setIsRegistered] = useState(registered);
  const [isWaitlisted, setIsWaitlisted] = useState(waitlist);
  const [availableSeatsCount, setAvailableSeatsCount] = useState(availableSeats);
  const [showDetails, setShowDetails] = useState(false);

  const handleRegister = () => {
    if (availableSeatsCount > 0) {
      setIsRegistered(true);
      setAvailableSeatsCount(prev => prev - 1);
      toast({
        title: "Успешно",
        description: `Вы записаны на мастер-класс "${title}"`,
        variant: "default",
      });
    }
    setShowDetails(false);
  };

  const handleWaitlist = () => {
    setIsWaitlisted(true);
    toast({
      title: "Добавлено в лист ожидания",
      description: `Вы добавлены в лист ожидания на мастер-класс "${title}". Ваша позиция: 3`,
      variant: "default",
    });
    setShowDetails(false);
  };

  const handleCancel = () => {
    if (isRegistered) {
      setIsRegistered(false);
      setAvailableSeatsCount(prev => prev + 1);
      toast({
        title: "Запись отменена",
        description: `Вы отменили запись на мастер-класс "${title}"`,
        variant: "default",
      });
    } else if (isWaitlisted) {
      setIsWaitlisted(false);
      toast({
        title: "Удалено из листа ожидания",
        description: `Вы удалены из листа ожидания мастер-класса "${title}"`,
        variant: "default",
      });
    }
    setShowDetails(false);
  };

  return (
    <>
      <Card className="card-hover">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{date}</span>
            </div>
            <div className="flex space-x-2">
              {isRegistered && (
                <Badge className="bg-accent text-white">Вы записаны</Badge>
              )}
              {isWaitlisted && (
                <Badge variant="outline" className="border-secondary text-secondary">
                  Лист ожидания #{waitlistPosition || 3}
                </Badge>
              )}
              {availableSeatsCount === 0 && !isRegistered && !isWaitlisted && (
                <Badge variant="outline" className="border-destructive text-destructive">
                  Нет мест
                </Badge>
              )}
            </div>
          </div>
          <CardTitle className="text-xl mt-2">{title}</CardTitle>
          <div className="text-sm text-muted-foreground">{speaker}</div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{time}</span>
            </div>
            <div className="flex items-center text-sm">
              <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{location}</span>
            </div>
            <div className="flex items-center text-sm">
              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>
                {availableSeatsCount} из {totalSeats} мест доступно
              </span>
            </div>
            <div className="mt-2">
              <p className="text-sm line-clamp-2">{description}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="w-full mr-2" onClick={() => setShowDetails(true)}>
            Подробнее
          </Button>
          {isRegistered ? (
            <Button variant="destructive" className="w-full" onClick={handleCancel}>
              Отменить
            </Button>
          ) : isWaitlisted ? (
            <Button variant="destructive" className="w-full" onClick={handleCancel}>
              Покинуть очередь
            </Button>
          ) : availableSeatsCount > 0 ? (
            <Button className="w-full" onClick={handleRegister}>
              Записаться
            </Button>
          ) : (
            <Button variant="secondary" className="w-full" onClick={handleWaitlist}>
              В лист ожидания
            </Button>
          )}
        </CardFooter>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              <span className="font-medium">{speaker}</span>
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>{availableSeatsCount} из {totalSeats} мест доступно</span>
            </div>
            
            <div className="mt-2">
              <h4 className="font-medium mb-2">Описание</h4>
              <p className="text-sm">{description}</p>
            </div>
          </div>
          
          <DialogFooter>
            {isRegistered ? (
              <Button variant="destructive" onClick={handleCancel}>Отменить запись</Button>
            ) : isWaitlisted ? (
              <Button variant="destructive" onClick={handleCancel}>Покинуть очередь</Button>
            ) : availableSeatsCount > 0 ? (
              <Button onClick={handleRegister}>Записаться</Button>
            ) : (
              <Button variant="secondary" onClick={handleWaitlist}>Добавить в лист ожидания</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WorkshopCard;
