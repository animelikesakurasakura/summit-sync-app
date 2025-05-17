
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Открытие конференции",
      time: "10:00 - 11:00",
      location: "Главный зал",
      type: "event",
      speaker: "Иван Иванов",
    },
    {
      id: 2,
      title: "Мастер-класс: AI в разработке",
      time: "11:30 - 13:00",
      location: "Зал A2",
      type: "workshop",
      speaker: "Мария Петрова",
      seats: 15,
      availableSeats: 5,
      registered: true,
    },
    {
      id: 3,
      title: "Панельная дискуссия: Будущее технологий",
      time: "14:00 - 15:30",
      location: "Зал B1",
      type: "event",
      speaker: "Алексей Смирнов, Елена Кузнецова, Дмитрий Соколов",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Предстоящие события</h3>
        <Button variant="outline" size="sm">Показать все</Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id} className="card-hover">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge
                  className={
                    event.type === "workshop"
                      ? "bg-secondary-100 text-secondary-800"
                      : "bg-primary-100 text-primary-800"
                  }
                >
                  {event.type === "workshop" ? "Мастер-класс" : "Событие"}
                </Badge>
                {event.registered && (
                  <Badge variant="outline" className="bg-accent-100 text-accent-800">
                    Вы записаны
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl mt-2">{event.title}</CardTitle>
              <CardDescription>{event.speaker}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{event.location}</span>
                </div>
                {event.seats && (
                  <div className="flex items-center text-sm">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>
                      Осталось мест: {event.availableSeats} из {event.seats}
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              {event.type === "workshop" ? (
                event.registered ? (
                  <Button variant="outline" className="w-full">Отменить запись</Button>
                ) : (
                  event.availableSeats > 0 ? (
                    <Button className="w-full">Записаться</Button>
                  ) : (
                    <Button variant="outline" className="w-full">В лист ожидания</Button>
                  )
                )
              ) : (
                <Button variant="secondary" className="w-full">Подробнее</Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
