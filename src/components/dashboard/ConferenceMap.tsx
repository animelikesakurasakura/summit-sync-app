
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ConferenceMap = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Карта конференции</CardTitle>
          <Button variant="outline" size="sm">На весь экран</Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="aspect-[16/9] bg-muted relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 border-2 border-dashed border-muted-foreground/50 relative">
              {/* Map areas */}
              <div className="absolute top-0 left-0 w-1/3 h-1/2 border border-primary bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium">Главный зал</span>
              </div>
              <div className="absolute top-0 right-0 w-1/3 h-1/2 border border-secondary bg-secondary/10 flex items-center justify-center">
                <span className="text-sm font-medium">Зал A2</span>
              </div>
              <div className="absolute bottom-0 left-0 w-1/3 h-1/2 border border-accent bg-accent/10 flex items-center justify-center">
                <span className="text-sm font-medium">Зал B1</span>
              </div>
              <div className="absolute bottom-0 right-0 w-1/3 h-1/2 border border-muted-foreground bg-muted flex items-center justify-center">
                <span className="text-sm font-medium">Зона отдыха</span>
              </div>
              
              {/* Center area - registration */}
              <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-medium">Регистрация</span>
              </div>
              
              {/* User position */}
              <div className="absolute top-1/3 left-1/3 w-4 h-4 rounded-full bg-blue-600 shadow-lg animate-pulse-light" style={{ transform: "translate(calc(50% - 8px), calc(50% - 8px))" }}>
                <span className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs shadow">
                  Вы здесь
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConferenceMap;
