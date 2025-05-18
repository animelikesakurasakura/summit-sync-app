
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";

const WorkshopsManagement = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Управление мастер-классами</h1>
          <p className="text-muted-foreground">
            Информация о мастер-классах и регистрация участников
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
          <Button>Добавить мастер-класс</Button>
          <Button variant="outline">Экспорт списка</Button>
        </div>
      </div>

      <div className="max-w-md mb-6">
        <Input placeholder="Поиск мастер-классов..." className="w-full" />
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Активные мастер-классы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">AI в практике</h3>
                    <p className="text-sm text-muted-foreground mt-1">День 1, 11:15 - 12:45, Зал А</p>
                    <p className="text-sm mt-2">30 из 30 участников зарегистрированы</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Редактировать</Button>
                    <Button size="sm" variant="ghost">Список участников</Button>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Введение в Blockchain</h3>
                    <p className="text-sm text-muted-foreground mt-1">День 2, 13:30 - 15:00, Зал Б</p>
                    <p className="text-sm mt-2">18 из 25 участников зарегистрированы</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Редактировать</Button>
                    <Button size="sm" variant="ghost">Список участников</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ожидающие подтверждения</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">DevOps для начинающих</h3>
                    <p className="text-sm text-muted-foreground mt-1">Предложенные даты: День 2 или День 3</p>
                    <p className="text-sm mt-2">Предлагаемая длительность: 1,5 часа</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Принять</Button>
                    <Button size="sm" variant="outline">Отклонить</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkshopsManagement;
