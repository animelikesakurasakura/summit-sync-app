
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";

const SpeakersManagement = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Управление спикерами</h1>
          <p className="text-muted-foreground">
            Добавление и редактирование информации о спикерах
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
          <Button>Добавить спикера</Button>
          <Button variant="outline">Экспорт списка</Button>
        </div>
      </div>

      <div className="max-w-md mb-6">
        <Input placeholder="Поиск спикеров..." className="w-full" />
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Подтвержденные спикеры</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Александр Петров</h3>
                    <p className="text-sm text-muted-foreground mt-1">CTO, TechInnovations</p>
                    <p className="text-sm mt-2">Доклад: "Будущее технологий и инноваций"</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Редактировать</Button>
                    <Button size="sm" variant="ghost">Детали</Button>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Мария Иванова</h3>
                    <p className="text-sm text-muted-foreground mt-1">Product Lead, DataSolutions</p>
                    <p className="text-sm mt-2">Доклад: "ML в современном бизнесе"</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Редактировать</Button>
                    <Button size="sm" variant="ghost">Детали</Button>
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
                    <h3 className="font-medium">Игорь Сергеев</h3>
                    <p className="text-sm text-muted-foreground mt-1">Researcher, QuantumLabs</p>
                    <p className="text-sm mt-2">Предложенная тема: "Квантовые компьютеры в бизнесе"</p>
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

export default SpeakersManagement;
