
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const speakersList = [
  {
    id: 1,
    name: "Анна Петрова",
    title: "CTO, TechInnovations",
    topic: "Искусственный интеллект в бизнес-процессах",
    bio: "Эксперт по искусственному интеллекту с 10-летним опытом. Руководила проектами в области машинного обучения для крупнейших компаний России."
  },
  {
    id: 2,
    name: "Иван Смирнов",
    title: "Lead Developer, CloudSoft",
    topic: "Микросервисная архитектура на практике",
    bio: "Лидирующий разработчик с опытом создания высоконагруженных систем. Автор книги о микросервисной архитектуре."
  },
  {
    id: 3,
    name: "Мария Козлова",
    title: "UX Director, DesignMasters",
    topic: "Пользовательский опыт будущего",
    bio: "Более 15 лет в UX-дизайне. Работала над интерфейсами для крупнейших банков и ритейл-компаний России."
  },
  {
    id: 4,
    name: "Алексей Иванов",
    title: "CIO, FinTech Solutions",
    topic: "Блокчейн в финансовых технологиях",
    bio: "Эксперт по внедрению блокчейн-решений в финансовом секторе. Консультант международных компаний."
  },
  {
    id: 5,
    name: "Елена Николаева",
    title: "Product Manager, SoftwareGiants",
    topic: "Управление продуктом в эпоху AI",
    bio: "Опытный продакт-менеджер, руководила запуском более 10 успешных IT-продуктов на международные рынки."
  },
  {
    id: 6,
    name: "Сергей Васильев",
    title: "Security Expert, CyberShield",
    topic: "Кибербезопасность для современных приложений",
    bio: "Специалист по информационной безопасности с 12-летним стажем. Автор множества статей по защите данных."
  },
  {
    id: 7,
    name: "Ольга Соколова",
    title: "DevOps Lead, CloudTech",
    topic: "CI/CD для контейнеризированных приложений",
    bio: "Эксперт по DevOps практикам и автоматизации процессов разработки. Сертифицированный специалист по Kubernetes."
  },
  {
    id: 8,
    name: "Павел Новиков",
    title: "Mobile Director, AppMakers",
    topic: "Кроссплатформенная разработка: мифы и реальность",
    bio: "Руководитель мобильной разработки с опытом создания приложений с многомиллионной аудиторией."
  },
];

const Speakers = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Спикеры конференции</h1>
          <p className="text-xl max-w-3xl">
            Познакомьтесь с ведущими экспертами, которые поделятся своим опытом
            и знаниями на Конференции 2025.
          </p>
        </div>
      </section>

      {/* Speakers List */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakersList.map((speaker) => (
              <Card key={speaker.id} className="overflow-hidden">
                <div className="aspect-square w-full bg-muted"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{speaker.title}</p>
                  <p className="font-medium mb-3">Тема: {speaker.topic}</p>
                  <p className="text-sm">{speaker.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Хотите послушать наших спикеров?</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Зарегистрируйтесь сейчас, чтобы не пропустить выступления экспертов и получить доступ к материалам конференции
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/register">Зарегистрироваться</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Speakers;
