
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MessageCircle } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Link } from "react-router-dom";

const OrganizerDashboard = () => {
  const { user, getDashboardPath } = useAuth();
  const basePath = getDashboardPath();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Добро пожаловать, {user?.name}
          </h1>
          <p className="text-muted-foreground">
            Панель управления организатора конференции
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
          <Button asChild>
            <Link to={`${basePath}/schedule-management`}>Управление расписанием</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to={`${basePath}/reports`}>Отчеты</Link>
          </Button>
        </div>
      </div>

      {/* Статистика конференции */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Участников</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">756</div>
            <p className="text-xs text-muted-foreground">+128 за последние 7 дней</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Мероприятий</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Запланировано на конференцию</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Сообщений</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38</div>
            <p className="text-xs text-muted-foreground">Требуют вашего внимания</p>
          </CardContent>
        </Card>
      </div>

      {/* Управление мероприятиями */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Управление расписанием</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Основная программа</h3>
                <p className="text-sm text-muted-foreground mt-1">18 докладов, 4 мастер-класса</p>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" asChild>
                    <Link to={`${basePath}/schedule-management`}>Редактировать</Link>
                  </Button>
                  <Button variant="outline" size="sm">Экспорт</Button>
                </div>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Дополнительная программа</h3>
                <p className="text-sm text-muted-foreground mt-1">6 круглых столов, 2 панельные дискуссии</p>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" asChild>
                    <Link to={`${basePath}/schedule-management`}>Редактировать</Link>
                  </Button>
                  <Button variant="outline" size="sm">Экспорт</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Управление спикерами</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Спикеры</h3>
                <p className="text-sm text-muted-foreground mt-1">12 подтвержденных, 3 ожидают</p>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" asChild>
                    <Link to={`${basePath}/speakers-management`}>Управление</Link>
                  </Button>
                  <Button variant="outline" size="sm">Добавить</Button>
                </div>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Мастер-классы</h3>
                <p className="text-sm text-muted-foreground mt-1">6 подтвержденных, 2 ожидают</p>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" asChild>
                    <Link to={`${basePath}/workshops-management`}>Управление</Link>
                  </Button>
                  <Button variant="outline" size="sm">Добавить</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Недавние уведомления */}
      <Card>
        <CardHeader>
          <CardTitle>Недавние уведомления</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border rounded-md">
              <div className="flex justify-between">
                <p className="font-medium">Заявка на выступление</p>
                <span className="text-xs text-muted-foreground">1 час назад</span>
              </div>
              <p className="text-sm mt-2">Игорь Сергеев хочет выступить с докладом "Квантовые компьютеры в бизнесе"</p>
              <div className="flex gap-2 mt-4">
                <Button size="sm">Принять</Button>
                <Button variant="outline" size="sm">Отклонить</Button>
                <Button variant="ghost" size="sm">Подробнее</Button>
              </div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="flex justify-between">
                <p className="font-medium">Изменение в расписании</p>
                <span className="text-xs text-muted-foreground">3 часа назад</span>
              </div>
              <p className="text-sm mt-2">Мария Козлова просит перенести выступление с 14:00 на 16:00</p>
              <div className="flex gap-2 mt-4">
                <Button size="sm">Принять</Button>
                <Button variant="outline" size="sm">Отклонить</Button>
                <Button variant="ghost" size="sm">Подробнее</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrganizerDashboard;
