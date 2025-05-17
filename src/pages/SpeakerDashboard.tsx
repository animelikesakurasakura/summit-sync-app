
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MessageCircle } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

const SpeakerDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Добро пожаловать, {user?.name}
          </h1>
          <p className="text-muted-foreground">
            Личный кабинет спикера конференции
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
          <Button>Мои презентации</Button>
          <Button variant="outline">Настройки профиля</Button>
        </div>
      </div>

      {/* Статистика выступлений */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Выступлений</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Назначено на конференцию</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Посещаемость</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">Зарегистрировано на ваши выступления</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Вопросов</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Ожидают вашего ответа</p>
          </CardContent>
        </Card>
      </div>

      {/* Предстоящие выступления */}
      <Card>
        <CardHeader>
          <CardTitle>Мои выступления</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center p-4 border rounded-md">
              <div className="flex-1">
                <h3 className="font-medium">Искусственный интеллект в бизнес-процессах</h3>
                <div className="text-sm text-muted-foreground mt-1">15 июня • 10:00-11:30 • Зал A</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600">
                    84 регистрации
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-50 text-blue-600">
                    Основная сцена
                  </span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Подробнее
              </Button>
            </div>
            
            <div className="flex items-center p-4 border rounded-md">
              <div className="flex-1">
                <h3 className="font-medium">Мастер-класс: Практическое применение ИИ</h3>
                <div className="text-sm text-muted-foreground mt-1">16 июня • 13:00-15:00 • Зал C</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600">
                    44 регистрации
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-50 text-purple-600">
                    Мастер-класс
                  </span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Подробнее
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Вопросы от участников */}
      <Card>
        <CardHeader>
          <CardTitle>Вопросы от участников</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 border rounded-md">
                <div className="flex justify-between">
                  <p className="font-medium">Анонимный участник</p>
                  <span className="text-xs text-muted-foreground">2 часа назад</span>
                </div>
                <p className="text-sm mt-2">Как вы считаете, какие навыки будут наиболее востребованы в области ИИ в ближайшие 5 лет?</p>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">Ответить</Button>
                  <Button variant="ghost" size="sm">Отложить</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeakerDashboard;
