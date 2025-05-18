
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { useTheme } from "@/hooks/use-theme";

const Settings = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const { theme, setTheme, isDarkMode } = useTheme();
  
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    language: "Russian",
    notifications: true,
    emailNotifications: true,
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleDarkModeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
    toast({
      title: "Тема изменена",
      description: checked ? "Темная тема включена" : "Светлая тема включена"
    });
  };
  
  const handleSave = () => {
    toast({
      title: "Настройки сохранены",
      description: "Ваши настройки были успешно обновлены"
    });
  };
  
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Настройки</h1>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Профиль</CardTitle>
            <CardDescription>
              Управление личной информацией
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="language">Язык</Label>
              <Input
                id="language"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                disabled
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSave}>Сохранить изменения</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Уведомления</CardTitle>
            <CardDescription>
              Настройка уведомлений
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Включить уведомления</p>
                <p className="text-sm text-muted-foreground">
                  Получать уведомления о важных событиях конференции
                </p>
              </div>
              <Switch
                checked={formData.notifications}
                onCheckedChange={(checked) => handleSwitchChange("notifications", checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email уведомления</p>
                <p className="text-sm text-muted-foreground">
                  Получать уведомления на email
                </p>
              </div>
              <Switch
                checked={formData.emailNotifications}
                onCheckedChange={(checked) => handleSwitchChange("emailNotifications", checked)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSave}>Сохранить настройки</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Предпочтения</CardTitle>
            <CardDescription>
              Персональные настройки приложения
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Темная тема</p>
                <p className="text-sm text-muted-foreground">
                  Включить темную тему
                </p>
              </div>
              <Switch
                checked={isDarkMode}
                onCheckedChange={handleDarkModeChange}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSave}>Сохранить предпочтения</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
