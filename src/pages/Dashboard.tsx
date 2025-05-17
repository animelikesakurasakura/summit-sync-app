
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ConferenceStats from "@/components/dashboard/ConferenceStats";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import ConferenceMap from "@/components/dashboard/ConferenceMap";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Добро пожаловать, Иван</h1>
          <p className="text-muted-foreground">
            Конференция начнется через: 1 час 30 минут
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
          <Button>Сканировать QR-код</Button>
          <Button variant="outline">Мой билет</Button>
        </div>
      </div>
      
      <ConferenceStats />
      
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <UpcomingEvents />
        </div>
        <div>
          <ConferenceMap />
        </div>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="p-4">
            <h3 className="text-lg font-medium mb-4">Новости конференции</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Добавлен новый мастер-класс</p>
                <p className="text-sm text-muted-foreground">Приглашаем на мастер-класс по машинному обучению в 15:00.</p>
                <p className="text-xs text-muted-foreground mt-1">2 часа назад</p>
              </div>
              <div>
                <p className="font-medium">Изменение в расписании</p>
                <p className="text-sm text-muted-foreground">Выступление спикера Александра Петрова перенесено с 14:00 на 16:00.</p>
                <p className="text-xs text-muted-foreground mt-1">3 часа назад</p>
              </div>
              <div>
                <p className="font-medium">Открыта регистрация на выступление</p>
                <p className="text-sm text-muted-foreground">Доступна запись на выступление "Будущее технологий" в 12:00.</p>
                <p className="text-xs text-muted-foreground mt-1">5 часов назад</p>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm">Показать все новости</Button>
            </div>
          </Card>
        </div>
        <div>
          <Card className="p-4">
            <h3 className="text-lg font-medium mb-4">Помощник</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Задайте вопрос о конференции или получите помощь
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                Где находится зал A?
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Как записаться на мастер-класс?
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Время обеда?
              </Button>
              <Button variant="secondary" className="w-full mt-2">
                Открыть чат-бота
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
