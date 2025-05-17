
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ConferenceStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Мастер-классы</CardTitle>
          <Badge variant="outline" className="bg-primary-100 text-primary">Скоро</Badge>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">
            Зарегистрирован на 3 мастер-класса
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Начало конференции</CardTitle>
          <Badge variant="outline" className="bg-secondary-100 text-secondary">Сегодня</Badge>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">10:00</div>
          <p className="text-xs text-muted-foreground">
            Осталось 1 час 30 минут
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Уведомления</CardTitle>
          <Badge className="bg-accent text-white">Новые</Badge>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3</div>
          <p className="text-xs text-muted-foreground">
            Новые уведомления о мероприятии
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Участников</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">250+</div>
          <p className="text-xs text-muted-foreground">
            Активных участников конференции
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConferenceStats;
