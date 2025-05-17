
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Определение типа активности
interface Activity {
  id: number;
  title: string;
  type: string;
  description: string;
  speaker?: string;
  speakers?: string[];
  date: string;
  time: string;
  capacity?: number;
  remaining?: number;
  registered?: boolean;
}

const activitiesList = [
  {
    id: 1,
    title: "Введение в машинное обучение",
    type: "workshop",
    description: "Практический мастер-класс по основам машинного обучения с использованием Python и библиотеки scikit-learn.",
    speaker: "Анна Петрова",
    date: "15 мая",
    time: "11:00 - 13:00",
    capacity: 30,
    remaining: 12
  },
  {
    id: 2,
    title: "Микросервисная архитектура на практике",
    type: "workshop",
    description: "Разработка, развертывание и поддержка микросервисных приложений. Практические примеры и лучшие практики.",
    speaker: "Иван Смирнов",
    date: "15 мая",
    time: "14:00 - 16:00",
    capacity: 25,
    remaining: 0
  },
  {
    id: 3,
    title: "Панельная дискуссия: Будущее финтеха",
    type: "panel",
    description: "Эксперты обсудят тренды и прогнозы развития финансовых технологий в ближайшие 5 лет.",
    speakers: ["Алексей Иванов", "Елена Николаева", "Сергей Васильев"],
    date: "16 мая",
    time: "10:00 - 11:30"
  },
  {
    id: 4,
    title: "Мастер-класс по UX-дизайну",
    type: "workshop",
    description: "Как создавать интуитивные и доступные интерфейсы. Практические упражнения и разбор кейсов.",
    speaker: "Мария Козлова",
    date: "16 мая",
    time: "14:00 - 16:00",
    capacity: 20,
    remaining: 5
  },
  {
    id: 5,
    title: "Хакатон: Создание AI-ассистента",
    type: "hackathon",
    description: "Командное соревнование по разработке чат-бота с использованием современных технологий искусственного интеллекта.",
    date: "17 мая",
    time: "09:00 - 16:00",
    capacity: 50,
    remaining: 23
  },
  {
    id: 6,
    title: "Нетворкинг-сессия",
    type: "networking",
    description: "Возможность неформально пообщаться с участниками конференции, спикерами и экспертами индустрии.",
    date: "16 мая",
    time: "18:00 - 20:00"
  }
];

const Activities = () => {
  // Состояние для хранения записей пользователей
  const [userRegistrations, setUserRegistrations] = useState<Record<number, boolean>>({});
  
  // Состояние для хранения обновленных доступных мест
  const [updatedRemaining, setUpdatedRemaining] = useState<Record<number, number>>({});

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Активности конференции</h1>
          <p className="text-xl max-w-3xl">
            Изучите программу и выберите интересующие вас мастер-классы, панельные
            дискуссии и другие мероприятия Конференции 2025.
          </p>
        </div>
      </section>

      {/* Activities List */}
      <section className="py-12 md:py-16">
        <div className="container">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="all">Все активности</TabsTrigger>
              <TabsTrigger value="workshops">Мастер-классы</TabsTrigger>
              <TabsTrigger value="panels">Панельные дискуссии</TabsTrigger>
              <TabsTrigger value="other">Другое</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activitiesList.map((activity) => (
                  <ActivityCard 
                    key={activity.id} 
                    activity={{
                      ...activity,
                      registered: userRegistrations[activity.id] || false,
                      remaining: updatedRemaining[activity.id] !== undefined 
                        ? updatedRemaining[activity.id] 
                        : activity.remaining
                    }}
                    onRegister={(activityId) => {
                      setUserRegistrations(prev => ({
                        ...prev,
                        [activityId]: true
                      }));
                      
                      if (activity.remaining !== undefined) {
                        setUpdatedRemaining(prev => ({
                          ...prev,
                          [activityId]: (prev[activityId] !== undefined ? prev[activityId] : activity.remaining!) - 1
                        }));
                      }
                    }}
                    onCancel={(activityId) => {
                      setUserRegistrations(prev => ({
                        ...prev,
                        [activityId]: false
                      }));
                      
                      if (activity.remaining !== undefined) {
                        setUpdatedRemaining(prev => ({
                          ...prev,
                          [activityId]: (prev[activityId] !== undefined ? prev[activityId] : activity.remaining!) + 1
                        }));
                      }
                    }}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="workshops" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activitiesList
                  .filter(a => a.type === "workshop")
                  .map((activity) => (
                    <ActivityCard 
                      key={activity.id} 
                      activity={{
                        ...activity,
                        registered: userRegistrations[activity.id] || false,
                        remaining: updatedRemaining[activity.id] !== undefined 
                          ? updatedRemaining[activity.id] 
                          : activity.remaining
                      }}
                      onRegister={(activityId) => {
                        setUserRegistrations(prev => ({
                          ...prev,
                          [activityId]: true
                        }));
                        
                        if (activity.remaining !== undefined) {
                          setUpdatedRemaining(prev => ({
                            ...prev,
                            [activityId]: (prev[activityId] !== undefined ? prev[activityId] : activity.remaining!) - 1
                          }));
                        }
                      }}
                      onCancel={(activityId) => {
                        setUserRegistrations(prev => ({
                          ...prev,
                          [activityId]: false
                        }));
                        
                        if (activity.remaining !== undefined) {
                          setUpdatedRemaining(prev => ({
                            ...prev,
                            [activityId]: (prev[activityId] !== undefined ? prev[activityId] : activity.remaining!) + 1
                          }));
                        }
                      }}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="panels" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activitiesList
                  .filter(a => a.type === "panel")
                  .map((activity) => (
                    <ActivityCard 
                      key={activity.id} 
                      activity={{
                        ...activity,
                        registered: userRegistrations[activity.id] || false,
                        remaining: updatedRemaining[activity.id] !== undefined 
                          ? updatedRemaining[activity.id] 
                          : activity.remaining
                      }}
                      onRegister={(activityId) => {
                        setUserRegistrations(prev => ({
                          ...prev,
                          [activityId]: true
                        }));
                      }}
                      onCancel={(activityId) => {
                        setUserRegistrations(prev => ({
                          ...prev,
                          [activityId]: false
                        }));
                      }}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="other" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activitiesList
                  .filter(a => !["workshop", "panel"].includes(a.type))
                  .map((activity) => (
                    <ActivityCard 
                      key={activity.id} 
                      activity={{
                        ...activity,
                        registered: userRegistrations[activity.id] || false,
                        remaining: updatedRemaining[activity.id] !== undefined 
                          ? updatedRemaining[activity.id] 
                          : activity.remaining
                      }}
                      onRegister={(activityId) => {
                        setUserRegistrations(prev => ({
                          ...prev,
                          [activityId]: true
                        }));
                        
                        if (activity.remaining !== undefined) {
                          setUpdatedRemaining(prev => ({
                            ...prev,
                            [activityId]: (prev[activityId] !== undefined ? prev[activityId] : activity.remaining!) - 1
                          }));
                        }
                      }}
                      onCancel={(activityId) => {
                        setUserRegistrations(prev => ({
                          ...prev,
                          [activityId]: false
                        }));
                        
                        if (activity.remaining !== undefined) {
                          setUpdatedRemaining(prev => ({
                            ...prev,
                            [activityId]: (prev[activityId] !== undefined ? prev[activityId] : activity.remaining!) + 1
                          }));
                        }
                      }}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Готовы принять участие?</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Зарегистрируйтесь сейчас, чтобы получить доступ к полному расписанию и возможность записи на мастер-классы
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/register">Зарегистрироваться</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

interface ActivityCardProps {
  activity: Activity;
  onRegister: (id: number) => void;
  onCancel: (id: number) => void;
}

const ActivityCard = ({ activity, onRegister, onCancel }: ActivityCardProps) => {
  const { toast } = useToast();
  
  const getActivityTypeBadge = (type: string) => {
    switch (type) {
      case "workshop":
        return <Badge className="bg-blue-500">Мастер-класс</Badge>;
      case "panel":
        return <Badge className="bg-green-500">Панельная дискуссия</Badge>;
      case "hackathon":
        return <Badge className="bg-purple-500">Хакатон</Badge>;
      case "networking":
        return <Badge className="bg-amber-500">Нетворкинг</Badge>;
      default:
        return <Badge>Мероприятие</Badge>;
    }
  };

  const handleRegistration = () => {
    onRegister(activity.id);
    toast({
      title: "Успешно",
      description: `Вы записаны на мероприятие "${activity.title}"`,
    });
  };

  const handleCancel = () => {
    onCancel(activity.id);
    toast({
      title: "Запись отменена",
      description: `Вы отменили запись на мероприятие "${activity.title}"`,
    });
  };

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            {getActivityTypeBadge(activity.type)}
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-muted-foreground">
              {activity.date}, {activity.time}
            </div>
            {activity.registered && (
              <Badge variant="outline" className="bg-accent-100 text-accent-800">
                Вы записаны
              </Badge>
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
        {activity.speaker && (
          <p className="text-sm text-primary mb-2">Ведущий: {activity.speaker}</p>
        )}
        {activity.speakers && (
          <p className="text-sm text-primary mb-2">Спикеры: {activity.speakers.join(", ")}</p>
        )}
        <p className="text-sm mb-4">{activity.description}</p>
        {activity.capacity && (
          <div className="text-sm text-muted-foreground">
            Мест: {activity.remaining}/{activity.capacity}
          </div>
        )}
      </CardContent>
      <CardFooter>
        {activity.registered ? (
          <Button
            variant="outline"
            className="w-full"
            onClick={handleCancel}
          >
            Отменить запись
          </Button>
        ) : (
          activity.remaining === 0 ? (
            <Button
              variant="outline"
              className="w-full"
              disabled
            >
              Нет свободных мест
            </Button>
          ) : (
            <Button
              className="w-full"
              variant={activity.type === "panel" || !activity.capacity ? "secondary" : "default"}
              onClick={handleRegistration}
            >
              {activity.type === "panel" || !activity.capacity ? "Записаться на уведомления" : "Записаться"}
            </Button>
          )
        )}
      </CardFooter>
    </Card>
  );
};

export default Activities;
