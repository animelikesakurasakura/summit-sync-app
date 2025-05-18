
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";

const Reports = () => {
  const { user } = useAuth();
  const [activeReport, setActiveReport] = useState("attendees");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Отчеты</h1>
          <p className="text-muted-foreground">
            Аналитика и статистика конференции
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
          <Button>Экспорт</Button>
          <Button variant="outline">Печать</Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-64">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Типы отчетов</CardTitle>
            </CardHeader>
            <CardContent className="p-2">
              <div className="space-y-1">
                <Button 
                  variant={activeReport === "attendees" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveReport("attendees")}
                >
                  Участники
                </Button>
                <Button 
                  variant={activeReport === "sessions" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveReport("sessions")}
                >
                  Сессии
                </Button>
                <Button 
                  variant={activeReport === "feedback" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveReport("feedback")}
                >
                  Отзывы
                </Button>
                <Button 
                  variant={activeReport === "checkins" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveReport("checkins")}
                >
                  Регистрации
                </Button>
                <Button 
                  variant={activeReport === "finances" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveReport("finances")}
                >
                  Финансы
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle>
                {activeReport === "attendees" && "Отчет по участникам"}
                {activeReport === "sessions" && "Отчет по сессиям"}
                {activeReport === "feedback" && "Отчет по отзывам"}
                {activeReport === "checkins" && "Отчет по регистрациям"}
                {activeReport === "finances" && "Финансовый отчет"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {activeReport === "attendees" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-2xl font-bold">756</div>
                        <p className="text-xs text-muted-foreground">Всего участников</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-2xl font-bold">683</div>
                        <p className="text-xs text-muted-foreground">Подтвердили участие</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-2xl font-bold">542</div>
                        <p className="text-xs text-muted-foreground">Присутствовали</p>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-muted-foreground text-sm">Подробная информация о посещаемости мероприятия</p>
                </div>
              )}

              {activeReport === "sessions" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-2xl font-bold">24</div>
                        <p className="text-xs text-muted-foreground">Всего сессий</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-2xl font-bold">18</div>
                        <p className="text-xs text-muted-foreground">Докладов</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-2xl font-bold">6</div>
                        <p className="text-xs text-muted-foreground">Мастер-классов</p>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-muted-foreground text-sm">Информация о проведенных сессиях и их посещаемости</p>
                </div>
              )}

              {activeReport !== "attendees" && activeReport !== "sessions" && (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">Выберите тип отчета слева для просмотра данных</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;
