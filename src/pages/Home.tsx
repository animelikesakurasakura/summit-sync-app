
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container space-y-6 md:space-y-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Конференция 2025</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Главное событие года в мире технологий и инноваций
          </p>
          <p className="text-lg md:text-xl font-medium">
            15-17 мая 2025 | Москва
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link to="/register">Регистрация</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Подробнее</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">3 дня</h3>
              <p className="text-muted-foreground">
                Насыщенная программа с докладами, мастер-классами и нетворкингом
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">50+ спикеров</h3>
              <p className="text-muted-foreground">
                Ведущие эксперты из крупнейших компаний России и мира
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">1000+ участников</h3>
              <p className="text-muted-foreground">
                Представители IT-индустрии, бизнеса и стартап-сообщества
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Ключевые спикеры</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-muted mb-4"></div>
                <h3 className="text-lg font-medium">Имя Спикера {index}</h3>
                <p className="text-sm text-muted-foreground text-center">Должность, Компания</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/speakers">Все спикеры</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Программа конференции</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">День 1 - 15 мая</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Регистрация</span>
                  <span className="text-muted-foreground">9:00 - 10:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Открытие</span>
                  <span className="text-muted-foreground">10:00 - 11:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Панельные дискуссии</span>
                  <span className="text-muted-foreground">11:00 - 18:00</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">День 2 - 16 мая</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Доклады</span>
                  <span className="text-muted-foreground">10:00 - 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Мастер-классы</span>
                  <span className="text-muted-foreground">14:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Нетворкинг</span>
                  <span className="text-muted-foreground">18:00 - 20:00</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">День 3 - 17 мая</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Хакатон</span>
                  <span className="text-muted-foreground">9:00 - 16:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Презентация проектов</span>
                  <span className="text-muted-foreground">16:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Закрытие</span>
                  <span className="text-muted-foreground">18:00 - 19:00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/schedule">Полное расписание</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Готовы присоединиться к нам?</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Зарегистрируйтесь сейчас, чтобы получить доступ к полному расписанию, материалам и возможность записи на мастер-классы
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/register">Зарегистрироваться</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
