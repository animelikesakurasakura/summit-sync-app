
import { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, Bot } from "lucide-react";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatInput from "@/components/chat/ChatInput";
import ChatbotMessage from "@/components/chatbot/ChatbotMessage";
import ChatbotInput from "@/components/chatbot/ChatbotInput";

const Chat = () => {
  // Public chat state
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Добро пожаловать на конференцию! Здесь вы можете общаться с другими участниками.",
      sender: "Система",
      timestamp: "09:30",
      isCurrentUser: false,
    },
    {
      id: 2,
      content: "Привет всем! Кто собирается на мастер-класс по AI в 11:30?",
      sender: "Мария",
      timestamp: "09:45",
      isCurrentUser: false,
    },
    {
      id: 3,
      content: "Я планирую пойти. Говорят, будет очень интересно!",
      sender: "Алексей",
      timestamp: "09:47",
      isCurrentUser: false,
    },
    {
      id: 4,
      content: "Привет! Я тоже иду на этот мастер-класс. Буду рад познакомиться.",
      sender: "Иван",
      timestamp: "09:50",
      isCurrentUser: true,
    },
  ]);
  
  // Bot chat state
  const [botMessages, setBotMessages] = useState([
    {
      id: 1,
      content: "Привет! Я чат-бот конференции. Чем могу помочь?",
      isUser: false,
    },
    {
      id: 2,
      content: "Вы можете спросить меня о расписании, локациях или услугах. Например: 'Где находится Зал A?' или 'Когда обед?'",
      isUser: false,
    },
  ]);
  
  const [botLoading, setBotLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const botMessagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  useEffect(() => {
    botMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [botMessages]);
  
  // Handle sending a message in the public chat
  const handleSendMessage = (message: string) => {
    const newMessage = {
      id: messages.length + 1,
      content: message,
      sender: "Иван",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCurrentUser: true,
    };
    
    setMessages([...messages, newMessage]);
  };
  
  // Handle sending a message to the bot
  const handleSendBotMessage = (message: string) => {
    const newUserMessage = {
      id: botMessages.length + 1,
      content: message,
      isUser: true,
    };
    
    setBotMessages([...botMessages, newUserMessage]);
    setBotLoading(true);
    
    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";
      
      if (message.toLowerCase().includes("зал") || message.toLowerCase().includes("где")) {
        botResponse = "Залы A и B находятся на первом этаже, залы C и D - на втором этаже. Вы можете посмотреть их расположение на карте конференции.";
      } else if (message.toLowerCase().includes("обед") || message.toLowerCase().includes("еда")) {
        botResponse = "Обеденный перерыв сегодня с 14:00 до 15:00. Кафе находится на втором этаже.";
      } else if (message.toLowerCase().includes("мастер-класс") || message.toLowerCase().includes("запись")) {
        botResponse = "Чтобы записаться на мастер-класс, перейдите в раздел 'Мастер-классы', выберите интересующее мероприятие и нажмите кнопку 'Записаться'. Если мест нет, вы можете записаться в лист ожидания.";
      } else if (message.toLowerCase().includes("расписание")) {
        botResponse = "Расписание конференции доступно в разделе 'Расписание'. Там вы найдете все мероприятия, отсортированные по дням и времени.";
      } else {
        botResponse = "Извините, я не совсем понял ваш вопрос. Вы можете спросить меня о расписании, локациях залов, мастер-классах или услугах конференции.";
      }
      
      const newBotMessage = {
        id: botMessages.length + 2,
        content: botResponse,
        isUser: false,
      };
      
      setBotMessages((prev) => [...prev, newBotMessage]);
      setBotLoading(false);
    }, 1500);
  };

  return (
    <div className="h-[calc(100vh-160px)]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Общение</h1>
      </div>
      
      <Tabs defaultValue="public" className="h-full flex flex-col">
        <TabsList className="mb-4">
          <TabsTrigger value="public" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Общий чат</span>
          </TabsTrigger>
          <TabsTrigger value="bot" className="flex items-center gap-2">
            <Bot className="h-4 w-4" />
            <span>Чат-бот помощник</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="public" className="flex-grow flex flex-col h-full mt-0">
          <Card className="flex-grow flex flex-col h-full">
            <CardHeader className="border-b p-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Общий чат конференции</CardTitle>
                  <CardDescription>Общайтесь с другими участниками</CardDescription>
                </div>
                <div className="relative max-w-xs">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Поиск в сообщениях..."
                    className="pl-8 w-[200px]"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-0">
              <div className="h-full flex flex-col">
                <div className="flex-grow p-4 overflow-y-auto">
                  {messages.map((message) => (
                    <ChatMessage
                      key={message.id}
                      content={message.content}
                      sender={message.sender}
                      timestamp={message.timestamp}
                      isCurrentUser={message.isCurrentUser}
                    />
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                
                <ChatInput onSendMessage={handleSendMessage} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="bot" className="flex-grow flex flex-col h-full mt-0">
          <Card className="flex-grow flex flex-col h-full">
            <CardHeader className="border-b p-4">
              <CardTitle>Чат-бот помощник</CardTitle>
              <CardDescription>Задайте вопросы о конференции</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow p-0">
              <div className="h-full flex flex-col">
                <div className="flex-grow p-4 overflow-y-auto">
                  {botMessages.map((message) => (
                    <ChatbotMessage
                      key={message.id}
                      content={message.content}
                      isUser={message.isUser}
                    />
                  ))}
                  <div ref={botMessagesEndRef} />
                </div>
                
                <ChatbotInput onSendMessage={handleSendBotMessage} disabled={botLoading} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Chat;
