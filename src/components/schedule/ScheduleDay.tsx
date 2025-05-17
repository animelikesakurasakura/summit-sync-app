
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScheduleCard from "./ScheduleCard";

interface ScheduleDayProps {
  day: string;
  date: string;
}

const ScheduleDay = ({ day, date }: ScheduleDayProps) => {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-xl font-bold">{day}</h3>
        <p className="text-muted-foreground">{date}</p>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4 w-full max-w-md">
          <TabsTrigger value="all" className="flex-1">Все события</TabsTrigger>
          <TabsTrigger value="sessions" className="flex-1">Доклады</TabsTrigger>
          <TabsTrigger value="workshops" className="flex-1">Мастер-классы</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-2">
          <ScheduleCard
            time="09:00 - 10:00"
            title="Регистрация участников"
            location="Главный холл"
            type="break"
          />
          <ScheduleCard
            time="10:00 - 10:30"
            title="Открытие конференции"
            location="Главный зал"
            speaker="Иван Иванов, директор конференции"
            type="session"
          />
          <ScheduleCard
            time="10:45 - 12:15"
            title="Интеграция искусственного интеллекта в современные приложения"
            location="Зал A"
            speaker="Мария Петрова, AI-разработчик"
            type="session"
          />
          <ScheduleCard
            time="12:30 - 14:00"
            title="Мастер-класс: Разработка чат-ботов для бизнеса"
            location="Зал B"
            speaker="Алексей Смирнов, Lead Developer"
            type="workshop"
            registered={true}
          />
          <ScheduleCard
            time="14:00 - 15:00"
            title="Обеденный перерыв"
            location="Кафе, 2-й этаж"
            type="break"
          />
          <ScheduleCard
            time="15:00 - 16:30"
            title="Мастер-класс: Дизайн пользовательского интерфейса"
            location="Зал C"
            speaker="Елена Кузнецова, UX дизайнер"
            type="workshop"
          />
        </TabsContent>
        
        <TabsContent value="sessions" className="space-y-2">
          <ScheduleCard
            time="10:00 - 10:30"
            title="Открытие конференции"
            location="Главный зал"
            speaker="Иван Иванов, директор конференции"
            type="session"
          />
          <ScheduleCard
            time="10:45 - 12:15"
            title="Интеграция искусственного интеллекта в современные приложения"
            location="Зал A"
            speaker="Мария Петрова, AI-разработчик"
            type="session"
          />
        </TabsContent>
        
        <TabsContent value="workshops" className="space-y-2">
          <ScheduleCard
            time="12:30 - 14:00"
            title="Мастер-класс: Разработка чат-ботов для бизнеса"
            location="Зал B"
            speaker="Алексей Смирнов, Lead Developer"
            type="workshop"
            registered={true}
          />
          <ScheduleCard
            time="15:00 - 16:30"
            title="Мастер-класс: Дизайн пользовательского интерфейса"
            location="Зал C"
            speaker="Елена Кузнецова, UX дизайнер"
            type="workshop"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ScheduleDay;
