
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScheduleDay from "@/components/schedule/ScheduleDay";

const Schedule = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Расписание конференции</h1>
      </div>
      
      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="w-full mb-6">
          <TabsTrigger value="day1" className="flex-1">День 1 (15 мая)</TabsTrigger>
          <TabsTrigger value="day2" className="flex-1">День 2 (16 мая)</TabsTrigger>
          <TabsTrigger value="day3" className="flex-1">День 3 (17 мая)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="day1" className="mt-0">
          <ScheduleDay day="День 1" date="15 мая, 2025" />
        </TabsContent>
        
        <TabsContent value="day2" className="mt-0">
          <ScheduleDay day="День 2" date="16 мая, 2025" />
        </TabsContent>
        
        <TabsContent value="day3" className="mt-0">
          <ScheduleDay day="День 3" date="17 мая, 2025" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Schedule;
