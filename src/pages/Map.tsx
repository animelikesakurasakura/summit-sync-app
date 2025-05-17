import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ZoomIn, ZoomOut, MapPin } from "lucide-react";

const Map = () => {
  const [floor, setFloor] = useState("1");
  const [zoom, setZoom] = useState(1);
  
  const increaseZoom = () => {
    if (zoom < 1.5) {
      setZoom(zoom + 0.1);
    }
  };
  
  const decreaseZoom = () => {
    if (zoom > 0.7) {
      setZoom(zoom - 0.1);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Карта конференции</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-3">
          <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Select value={floor} onValueChange={setFloor}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Выберите этаж" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Первый этаж</SelectItem>
                    <SelectItem value="2">Второй этаж</SelectItem>
                  </SelectContent>
                </Select>
                
                <Tabs defaultValue="all" className="w-[400px]">
                  <TabsList>
                    <TabsTrigger value="all">Все</TabsTrigger>
                    <TabsTrigger value="halls">Залы</TabsTrigger>
                    <TabsTrigger value="services">Сервисы</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" onClick={decreaseZoom}>
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={increaseZoom}>
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative overflow-hidden bg-muted" style={{ height: "60vh" }}>
              <div className="absolute inset-0 p-4 flex items-center justify-center">
                <div 
                  className="w-full h-full border-2 border-dashed border-muted-foreground/30 relative transition-all" 
                  style={{ transform: `scale(${zoom})` }}
                >
                  {floor === "1" ? (
                    <>
                      {/* First floor map elements */}
                      <div className="absolute top-0 left-0 w-1/3 h-2/5 border border-primary bg-primary/10 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-6 w-6 text-primary mx-auto mb-1" />
                          <span className="text-sm font-medium">Главный зал</span>
                        </div>
                      </div>
                      
                      <div className="absolute top-0 right-0 w-1/3 h-2/5 border border-secondary bg-secondary/10 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-6 w-6 text-secondary mx-auto mb-1" />
                          <span className="text-sm font-medium">Зал A2</span>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 w-1/3 h-2/5 border border-accent bg-accent/10 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-6 w-6 text-accent mx-auto mb-1" />
                          <span className="text-sm font-medium">Зал B1</span>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 right-0 w-1/3 h-2/5 border border-muted-foreground bg-muted/50 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-6 w-6 text-muted-foreground mx-auto mb-1" />
                          <span className="text-sm font-medium">Зона отдыха</span>
                        </div>
                      </div>
                      
                      {/* Center registration area */}
                      <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary bg-primary/20 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-sm font-medium">Регистрация</span>
                        </div>
                      </div>
                      
                      {/* User location */}
                      <div className="absolute top-1/3 left-1/3 w-6 h-6 rounded-full bg-blue-600 shadow-lg animate-pulse-light" style={{ transform: "translate(calc(50% - 12px), calc(50% - 12px))" }}>
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs shadow">
                          Вы здесь
                        </span>
                      </div>
                      
                      {/* Other elements */}
                      <div className="absolute top-1/5 left-0 w-1/6 h-1/10 border border-muted-foreground bg-muted/30 flex items-center justify-center">
                        <span className="text-xs">Лестница</span>
                      </div>
                      <div className="absolute top-1/5 right-0 w-1/6 h-1/10 border border-muted-foreground bg-muted/30 flex items-center justify-center">
                        <span className="text-xs">Лестница</span>
                      </div>
                      <div className="absolute top-0 left-1/3 w-1/3 h-1/10 border border-muted-foreground bg-muted/30 flex items-center justify-center">
                        <span className="text-xs">Вход</span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Second floor map elements */}
                      <div className="absolute top-0 left-0 w-1/2 h-2/5 border border-primary bg-primary/10 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-6 w-6 text-primary mx-auto mb-1" />
                          <span className="text-sm font-medium">Зал C1</span>
                        </div>
                      </div>
                      
                      <div className="absolute top-0 right-0 w-1/2 h-2/5 border border-secondary bg-secondary/10 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-6 w-6 text-secondary mx-auto mb-1" />
                          <span className="text-sm font-medium">Зал D1</span>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 w-1/3 h-2/5 border border-muted-foreground bg-muted/50 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-6 w-6 text-muted-foreground mx-auto mb-1" />
                          <span className="text-sm font-medium">Кафе</span>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 right-0 w-1/3 h-2/5 border border-accent bg-accent/10 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-6 w-6 text-accent mx-auto mb-1" />
                          <span className="text-sm font-medium">Комната отдыха</span>
                        </div>
                      </div>
                      
                      {/* Other elements */}
                      <div className="absolute top-1/5 left-0 w-1/6 h-1/10 border border-muted-foreground bg-muted/30 flex items-center justify-center">
                        <span className="text-xs">Лестница</span>
                      </div>
                      <div className="absolute top-1/5 right-0 w-1/6 h-1/10 border border-muted-foreground bg-muted/30 flex items-center justify-center">
                        <span className="text-xs">Лестница</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Легенда карты</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center">
                <div className="w-4 h-4 border rounded bg-primary/10 border-primary mr-2" />
                <span className="text-sm">Главные залы</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 border rounded bg-secondary/10 border-secondary mr-2" />
                <span className="text-sm">Залы для мастер-классов</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 border rounded bg-accent/10 border-accent mr-2" />
                <span className="text-sm">Технические зоны</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 border rounded bg-muted/50 border-muted-foreground mr-2" />
                <span className="text-sm">Зоны отдыха</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-600 mr-2" />
                <span className="text-sm">Вы находитесь здесь</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Ближайшие мероприятия</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium text-sm">10:00 - Открытие конференции</p>
                <p className="text-xs text-muted-foreground">Главный зал, 1 этаж</p>
              </div>
              <div>
                <p className="font-medium text-sm">11:30 - Мастер-класс: AI в разработке</p>
                <p className="text-xs text-muted-foreground">Зал A2, 1 этаж</p>
              </div>
              <div>
                <p className="font-medium text-sm">12:30 - Мастер-класс: Чат-боты</p>
                <p className="text-xs text-muted-foreground">Зал B1, 1 этаж</p>
              </div>
              
              <Button variant="outline" className="w-full" size="sm">
                Все мероприятия
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Map;
