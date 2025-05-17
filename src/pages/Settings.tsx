
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/toast";

const Settings = () => {
  const { toast } = useToast();
  
  // Profile settings
  const [firstName, setFirstName] = useState("Иван");
  const [lastName, setLastName] = useState("Иванов");
  const [email, setEmail] = useState("ivan@example.com");
  const [company, setCompany] = useState("ООО Технологии");
  const [position, setPosition] = useState("Разработчик");
  
  // Notification settings
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [workshopReminders, setWorkshopReminders] = useState(true);
  const [scheduleChanges, setScheduleChanges] = useState(true);
  const [waitlistNotifications, setWaitlistNotifications] = useState(true);
  
  // Privacy settings
  const [showInAttendeeList, setShowInAttendeeList] = useState(true);
  const [allowMessaging, setAllowMessaging] = useState(true);
  
  const handleSaveProfile = () => {
    toast({
      title: "Профиль сохранен",
      description: "Ваши данные профиля были успешно обновлены",
    });
  };
  
  const handleSaveNotifications = () => {
    toast({
      title: "Настройки уведомлений сохранены",
      description: "Ваши предпочтения по уведомлениям были обновлены",
    });
  };
  
  const handleSavePrivacy = () => {
    toast({
      title: "Настройки приватности сохранены",
      description: "Ваши настройки приватности были обновлены",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Настройки</h1>
          <p className="text-muted-foreground">
            Управляйте своим профилем и настройками приложения
          </p>
        </div>
      </div>
      
      <Tabs defaultValue="profile">
        <TabsList className="mb-6">
          <TabsTrigger value="profile">Профиль</TabsTrigger>
          <TabsTrigger value="notifications">Уведомления</TabsTrigger>
          <TabsTrigger value="privacy">Приватность</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Информация профиля</CardTitle>
                <CardDescription>
                  Управляйте информацией вашего профиля конференции
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Имя</Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания</Label>
                    <Input
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="position">Должность</Label>
                    <Input
                      id="position"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </div>
                  
                  <div className="sm:col-span-2">
                    <Button onClick={handleSaveProfile}>Сохранить изменения</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Билет конференции</CardTitle>
                <CardDescription>
                  Информация о вашем билете на конференцию
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-muted h-40 w-40 flex items-center justify-center rounded-lg border">
                      <span className="text-sm text-muted-foreground">QR-код билета</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Тип билета:</div>
                      <div className="text-sm font-medium">Полный доступ</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">ID билета:</div>
                      <div className="text-sm font-medium">CONF-2025-1234</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Статус:</div>
                      <div>
                        <Badge className="bg-primary">Подтвержден</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="outline" className="w-full">Скачать билет</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Интересы</CardTitle>
                <CardDescription>
                  Выберите ваши профессиональные интересы для персонализации контента
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary-100 text-primary-800 hover:bg-primary-200 cursor-pointer">Frontend</Badge>
                    <Badge variant="outline" className="bg-muted hover:bg-muted/80 cursor-pointer">Backend</Badge>
                    <Badge variant="outline" className="bg-primary-100 text-primary-800 hover:bg-primary-200 cursor-pointer">Machine Learning</Badge>
                    <Badge variant="outline" className="bg-muted hover:bg-muted/80 cursor-pointer">DevOps</Badge>
                    <Badge variant="outline" className="bg-primary-100 text-primary-800 hover:bg-primary-200 cursor-pointer">Mobile</Badge>
                    <Badge variant="outline" className="bg-muted hover:bg-muted/80 cursor-pointer">Design</Badge>
                    <Badge variant="outline" className="bg-muted hover:bg-muted/80 cursor-pointer">Management</Badge>
                    <Badge variant="outline" className="bg-muted hover:bg-muted/80 cursor-pointer">QA</Badge>
                    <Badge variant="outline" className="bg-primary-100 text-primary-800 hover:bg-primary-200 cursor-pointer">Data Science</Badge>
                  </div>
                  
                  <Button onClick={handleSaveProfile}>Сохранить интересы</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Настройки уведомлений</CardTitle>
              <CardDescription>
                Настройте способы получения уведомлений о событиях конференции
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Каналы уведомлений</h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-notifications">Push-уведомления</Label>
                    <p className="text-sm text-muted-foreground">
                      Получать мгновенные уведомления в приложении
                    </p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications">Email-уведомления</Label>
                    <p className="text-sm text-muted-foreground">
                      Получать важные обновления на почту
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Типы уведомлений</h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="workshop-reminders">Напоминания о мастер-классах</Label>
                    <p className="text-sm text-muted-foreground">
                      Получать напоминания о мастер-классах за 15 минут до начала
                    </p>
                  </div>
                  <Switch
                    id="workshop-reminders"
                    checked={workshopReminders}
                    onCheckedChange={setWorkshopReminders}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="schedule-changes">Изменения в расписании</Label>
                    <p className="text-sm text-muted-foreground">
                      Получать уведомления об изменениях в расписании
                    </p>
                  </div>
                  <Switch
                    id="schedule-changes"
                    checked={scheduleChanges}
                    onCheckedChange={setScheduleChanges}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="waitlist-notifications">Уведомления о листе ожидания</Label>
                    <p className="text-sm text-muted-foreground">
                      Получать уведомления о освобождении мест в мастер-классах
                    </p>
                  </div>
                  <Switch
                    id="waitlist-notifications"
                    checked={waitlistNotifications}
                    onCheckedChange={setWaitlistNotifications}
                  />
                </div>
              </div>
              
              <Button onClick={handleSaveNotifications}>Сохранить настройки</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Настройки приватности</CardTitle>
              <CardDescription>
                Управляйте тем, как вы взаимодействуете с другими участниками
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="show-in-attendee-list">Показывать в списке участников</Label>
                    <p className="text-sm text-muted-foreground">
                      Позволить другим участникам видеть вас в списке присутствующих
                    </p>
                  </div>
                  <Switch
                    id="show-in-attendee-list"
                    checked={showInAttendeeList}
                    onCheckedChange={setShowInAttendeeList}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="allow-messaging">Разрешить сообщения</Label>
                    <p className="text-sm text-muted-foreground">
                      Разрешить другим участникам отправлять вам сообщения
                    </p>
                  </div>
                  <Switch
                    id="allow-messaging"
                    checked={allowMessaging}
                    onCheckedChange={setAllowMessaging}
                  />
                </div>
              </div>
              
              <Button onClick={handleSavePrivacy}>Сохранить настройки</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
