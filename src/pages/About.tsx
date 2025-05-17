
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">О конференции</h1>
          <p className="text-xl max-w-3xl">
            Конференция 2025 — это крупнейшее событие года в мире технологий,
            объединяющее экспертов, разработчиков и предпринимателей для обмена идеями
            и опытом.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
              <p className="mb-4">
                Наша миссия — создать уникальную платформу для общения, обучения и
                сотрудничества в сфере технологий. Мы стремимся к тому, чтобы каждый
                участник нашей конференции получил ценные знания и контакты, которые
                помогут ему в профессиональном развитии.
              </p>
              <p>
                Конференция 2025 — это не просто мероприятие, это сообщество
                профессионалов, объединенных общими целями и интересами.
              </p>
            </div>
            <div className="bg-muted h-64 rounded-lg"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 bg-muted h-64 rounded-lg"></div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold mb-4">История конференции</h2>
              <p className="mb-4">
                Первая конференция состоялась в 2020 году и собрала более 300 участников.
                С каждым годом мероприятие росло и развивалось, привлекая всё больше
                спикеров и слушателей из разных городов и стран.
              </p>
              <p>
                В 2024 году конференция приобрела международный статус, а в 2025 мы
                ожидаем рекордное количество участников — более 1000 человек из 15 стран мира.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-6 shadow-sm rounded-lg">
              <h3 className="text-xl font-bold mb-3">Доклады</h3>
              <p>
                Выступления от ведущих экспертов о новейших технологических трендах,
                инновациях и лучших практиках в IT-индустрии.
              </p>
            </div>
            <div className="bg-card p-6 shadow-sm rounded-lg">
              <h3 className="text-xl font-bold mb-3">Мастер-классы</h3>
              <p>
                Практические сессии с ограниченным количеством участников,
                где вы сможете получить новые навыки под руководством опытных наставников.
              </p>
            </div>
            <div className="bg-card p-6 shadow-sm rounded-lg">
              <h3 className="text-xl font-bold mb-3">Нетворкинг</h3>
              <p>
                Многочисленные возможности для неформального общения с коллегами,
                спикерами и потенциальными партнерами.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Присоединяйтесь к нам!</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Не упустите возможность стать частью крупнейшего технологического
              события года. Регистрируйтесь сейчас и получите доступ ко всем активностям
              конференции.
            </p>
            <Button size="lg" asChild>
              <Link to="/register">Зарегистрироваться</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
