
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/use-auth";

const ScheduleManagement = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Управление расписанием</h1>
          <p className="text-muted-foreground">
            Создание и редактирование программы конференции
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
          <Button>Добавить событие</Button>
          <Button variant="outline">Экспорт</Button>
        </div>
      </div>

      <Tabs defaultValue="day1">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="day1">День 1</TabsTrigger>
          <TabsTrigger value="day2">День 2</TabsTrigger>
          <TabsTrigger value="day3">День 3</TabsTrigger>
        </TabsList>
        <TabsContent value="day1" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>День 1 - 10 июня 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Вступительная речь</h3>
                      <p className="text-sm text-muted-foreground mt-1">09:00 - 09:30, Главный зал</p>
                      <p className="text-sm mt-2">Приветственное слово организаторов конференции</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Изменить</Button>
                      <Button size="sm" variant="destructive">Удалить</Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Технологии будущего</h3>
                      <p className="text-sm text-muted-foreground mt-1">09:45 - 10:45, Главный зал</p>
                      <p className="text-sm mt-2">Доклад о новых технологиях и их влиянии на бизнес</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Изменить</Button>
                      <Button size="sm" variant="destructive">Удалить</Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Кофе-брейк</h3>
                      <p className="text-sm text-muted-foreground mt-1">10:45 - 11:15, Фойе</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Изменить</Button>
                      <Button size="sm" variant="destructive">Удалить</Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Мастер-класс: AI в практике</h3>
                      <p className="text-sm text-muted-foreground mt-1">11:15 - 12:45, Зал А</p>
                      <p className="text-sm mt-2">Практический мастер-класс по применению ИИ</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Изменить</Button>
                      <Button size="sm" variant="destructive">Удалить</Button>
                    </div>
                  </div>
                </div>

                <Button className="w-full" variant="outline">+ Добавить событие</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="day2" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>День 2 - 11 июня 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Открытие второго дня</h3>
                      <p className="text-sm text-muted-foreground mt-1">09:30 - 10:00, Главный зал</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Изменить</Button>
                      <Button size="sm" variant="destructive">Удалить</Button>
                    </div>
                  </div>
                </div>
                <Button className="w-full" variant="outline">+ Добавить событие</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="day3" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>День 3 - 12 июня 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="py-8 text-center">
                <p className="text-muted-foreground">Расписание на третий день еще не создано</p>
                <Button className="mt-4">Создать расписание</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ScheduleManagement;
