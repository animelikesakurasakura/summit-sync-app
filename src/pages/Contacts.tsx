
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // В реальном приложении здесь будет отправка формы
    alert("Сообщение отправлено!");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Контакты</h1>
          <p className="text-xl max-w-3xl">
            Свяжитесь с нами, если у вас возникли вопросы по участию в Конференции 2025.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Информация для связи</h2>
              
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Для участников</h3>
                    <p className="mb-1">Email: participants@conference2025.ru</p>
                    <p>Телефон: +7 (999) 123-45-67</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Для спикеров</h3>
                    <p className="mb-1">Email: speakers@conference2025.ru</p>
                    <p>Телефон: +7 (999) 765-43-21</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Для СМИ и партнеров</h3>
                    <p className="mb-1">Email: partners@conference2025.ru</p>
                    <p>Телефон: +7 (999) 555-55-55</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Адрес проведения</h3>
                    <p className="mb-1">Москва, ул. Конференц-холла, д. 123</p>
                    <p className="text-sm text-muted-foreground">
                      Станция метро "Конференц", выход №2
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Имя
                    </label>
                    <Input id="name" placeholder="Введите ваше имя" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="email@example.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Тема
                  </label>
                  <Input id="subject" placeholder="Тема вашего сообщения" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Введите ваше сообщение"
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
