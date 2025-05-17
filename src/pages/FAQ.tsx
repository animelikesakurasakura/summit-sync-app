
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqItems = [
    {
      question: "Как зарегистрироваться на мастер-класс?",
      answer:
        "Чтобы зарегистрироваться на мастер-класс, перейдите в раздел 'Мастер-классы', выберите интересующее мероприятие и нажмите кнопку 'Записаться'. Если все места заняты, вы можете добавить себя в лист ожидания, нажав кнопку 'В лист ожидания'.",
      category: "мастер-классы",
    },
    {
      question: "Что делать, если все места на мастер-класс заняты?",
      answer:
        "Если все места на мастер-класс заняты, вы можете записаться в лист ожидания. Когда место освободится, вы получите уведомление и у вас будет 15 минут, чтобы подтвердить своё участие. Если вы не подтвердите участие в течение этого времени, место будет предложено следующему участнику в листе ожидания.",
      category: "мастер-классы",
    },
    {
      question: "Как работает лист ожидания?",
      answer:
        "Лист ожидания формируется по принципу 'первым пришел - первым обслужен'. Когда кто-то отменяет свою запись на мастер-класс, первый человек в листе ожидания получает уведомление о возможности записаться. У него есть 15 минут, чтобы подтвердить участие, иначе место будет предложено следующему в очереди.",
      category: "мастер-классы",
    },
    {
      question: "Могу ли я отменить запись на мастер-класс?",
      answer:
        "Да, вы можете отменить свою запись на мастер-класс в любое время. Для этого перейдите в раздел 'Мастер-классы', найдите мастер-класс, на который вы записаны, и нажмите кнопку 'Отменить'. После отмены место будет предложено первому человеку в листе ожидания.",
      category: "мастер-классы",
    },
    {
      question: "Где находятся залы проведения мероприятий?",
      answer:
        "Информация о расположении залов доступна в разделе 'Карта'. Там вы найдете интерактивную карту конференции с указанием всех залов, зон отдыха и других важных мест. Залы A и B находятся на первом этаже, залы C и D - на втором этаже.",
      category: "локация",
    },
    {
      question: "Какое расписание конференции?",
      answer:
        "Полное расписание конференции доступно в разделе 'Расписание'. Там вы можете просмотреть все мероприятия, отсортированные по дням и времени. Также в личном кабинете вы найдете индивидуальное расписание с мастер-классами, на которые вы записаны.",
      category: "расписание",
    },
    {
      question: "Как связаться с организаторами?",
      answer:
        "Для связи с организаторами вы можете использовать чат-бот в разделе 'Чат', выбрав вкладку 'Чат-бот помощник'. Если у вас есть вопросы, которые требуют личного внимания, вы можете обратиться к волонтерам на стойке регистрации.",
      category: "общее",
    },
    {
      question: "Как получить уведомления о начале мероприятий?",
      answer:
        "Уведомления о начале мероприятий будут приходить автоматически, если вы разрешили push-уведомления. Также вы можете настроить напоминания в разделе 'Настройки', выбрав, за сколько времени до начала мероприятия вы хотите получать уведомления.",
      category: "общее",
    },
    {
      question: "Есть ли питание на конференции?",
      answer:
        "Да, на конференции организовано питание. Обеденный перерыв запланирован с 14:00 до 15:00. Кафе находится на втором этаже. Также на территории конференции есть зоны с легкими закусками и напитками.",
      category: "общее",
    },
    {
      question: "Как задать вопрос спикеру во время выступления?",
      answer:
        "Во время выступления вы можете задать вопрос спикеру через специальный чат в разделе 'Чат', выбрав соответствующую вкладку для текущего выступления. Модератор будет отбирать вопросы и адресовать их спикеру.",
      category: "общее",
    },
  ];

  const filteredFAQs = faqItems.filter((item) =>
    searchQuery === ""
      ? true
      : item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categorizedFAQs = {
    "мастер-классы": filteredFAQs.filter(
      (item) => item.category === "мастер-классы"
    ),
    "локация": filteredFAQs.filter((item) => item.category === "локация"),
    "расписание": filteredFAQs.filter((item) => item.category === "расписание"),
    "общее": filteredFAQs.filter((item) => item.category === "общее"),
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Часто задаваемые вопросы</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-1 space-y-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Поиск в FAQ..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Card className="p-4">
            <h3 className="text-lg font-medium mb-4">Категории</h3>
            <div className="flex flex-col space-y-2">
              <Button 
                variant={searchQuery === "" ? "secondary" : "outline"}
                onClick={() => setSearchQuery("")}
                className="justify-start"
              >
                Все вопросы
              </Button>
              <Button 
                variant={searchQuery === "мастер-классы" ? "secondary" : "outline"}
                onClick={() => setSearchQuery("мастер-классы")}
                className="justify-start"
              >
                Мастер-классы
              </Button>
              <Button 
                variant={searchQuery === "локация" ? "secondary" : "outline"}
                onClick={() => setSearchQuery("локация")}
                className="justify-start"
              >
                Локации и навигация
              </Button>
              <Button 
                variant={searchQuery === "расписание" ? "secondary" : "outline"}
                onClick={() => setSearchQuery("расписание")}
                className="justify-start"
              >
                Расписание
              </Button>
              <Button 
                variant={searchQuery === "общее" ? "secondary" : "outline"}
                onClick={() => setSearchQuery("общее")}
                className="justify-start"
              >
                Общие вопросы
              </Button>
            </div>
          </Card>
          
          <Card className="p-4">
            <h3 className="text-lg font-medium mb-4">Нужна помощь?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Не нашли ответ на свой вопрос? Свяжитесь с нами для получения помощи.
            </p>
            <Button className="w-full">Чат с поддержкой</Button>
          </Card>
        </div>
        
        <div className="md:col-span-3">
          {filteredFAQs.length === 0 ? (
            <div className="text-center p-12">
              <h3 className="text-lg font-medium mb-2">Ничего не найдено</h3>
              <p className="text-muted-foreground mb-4">
                По вашему запросу "{searchQuery}" ничего не найдено. Попробуйте изменить запрос.
              </p>
              <Button onClick={() => setSearchQuery("")}>Показать все вопросы</Button>
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(categorizedFAQs).map(
                ([category, items]) =>
                  items.length > 0 && (
                    <div key={category} className="space-y-4">
                      <h2 className="text-xl font-semibold capitalize">
                        {category === "мастер-классы"
                          ? "Мастер-классы"
                          : category === "локация"
                          ? "Локации и навигация"
                          : category === "расписание"
                          ? "Расписание"
                          : "Общие вопросы"}
                      </h2>
                      <Accordion type="single" collapsible className="w-full">
                        {items.map((item, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">
                              {item.question}
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-muted-foreground">
                                {item.answer}
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
