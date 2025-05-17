
import { useState } from "react";
import WorkshopCard from "@/components/workshops/WorkshopCard";
import WorkshopFilter from "@/components/workshops/WorkshopFilter";

const Workshops = () => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    day: "all",
    location: "all",
    showAvailable: false,
    showRegistered: false,
  });

  // Mock workshop data
  const workshopsData = [
    {
      id: 1,
      title: "Разработка чат-ботов для бизнеса",
      description: "На этом практическом мастер-классе вы узнаете, как создавать интеллектуальных чат-ботов, которые могут эффективно взаимодействовать с клиентами, отвечать на вопросы и обрабатывать запросы. Мы рассмотрим различные платформы для разработки ботов и интеграцию с популярными мессенджерами.",
      speaker: "Алексей Смирнов, Lead Developer",
      date: "15 мая, 2025",
      time: "12:30 - 14:00",
      location: "Зал B",
      totalSeats: 20,
      availableSeats: 5,
      registered: true,
    },
    {
      id: 2,
      title: "Дизайн пользовательского интерфейса",
      description: "Мастер-класс посвящен основным принципам и практикам дизайна пользовательских интерфейсов. Вы узнаете о современных тенденциях в UI/UX дизайне, научитесь создавать удобные и интуитивно понятные интерфейсы, а также познакомитесь с инструментами для прототипирования.",
      speaker: "Елена Кузнецова, UX дизайнер",
      date: "15 мая, 2025",
      time: "15:00 - 16:30",
      location: "Зал C",
      totalSeats: 25,
      availableSeats: 0,
      waitlist: true,
      waitlistPosition: 2,
    },
    {
      id: 3,
      title: "Машинное обучение для начинающих",
      description: "Вводный мастер-класс по машинному обучению, на котором вы познакомитесь с основными концепциями и алгоритмами. Мы рассмотрим практические примеры и научимся создавать простые модели прогнозирования на основе данных.",
      speaker: "Дмитрий Соколов, Data Scientist",
      date: "16 мая, 2025",
      time: "10:00 - 12:00",
      location: "Зал A",
      totalSeats: 30,
      availableSeats: 12,
    },
    {
      id: 4,
      title: "Блокчейн технологии в современном мире",
      description: "Мастер-класс о применении блокчейн-технологий в различных отраслях. Вы узнаете о принципах работы блокчейна, смарт-контрактах и децентрализованных приложениях, а также о том, как эти технологии меняют бизнес-процессы.",
      speaker: "Михаил Волков, Blockchain Developer",
      date: "16 мая, 2025",
      time: "14:30 - 16:30",
      location: "Зал B",
      totalSeats: 20,
      availableSeats: 0,
    },
    {
      id: 5,
      title: "Создание мобильных приложений",
      description: "Практический мастер-класс по разработке мобильных приложений с использованием современных фреймворков. Вы научитесь создавать кроссплатформенные приложения для iOS и Android, познакомитесь с лучшими практиками и подходами к разработке.",
      speaker: "Анна Морозова, Mobile Developer",
      date: "17 мая, 2025",
      time: "11:00 - 13:00",
      location: "Зал C",
      totalSeats: 25,
      availableSeats: 8,
    },
    {
      id: 6,
      title: "Кибербезопасность: защита от атак",
      description: "Мастер-класс о современных угрозах кибербезопасности и методах защиты. Вы узнаете о типичных уязвимостях, способах их обнаружения и предотвращения, а также о том, как обеспечить безопасность данных в компании.",
      speaker: "Сергей Иванов, Security Expert",
      date: "17 мая, 2025",
      time: "14:00 - 16:00",
      location: "Зал A",
      totalSeats: 20,
      availableSeats: 3,
    },
  ];

  const filterWorkshops = () => {
    return workshopsData.filter((workshop) => {
      // Search term filter
      if (
        filters.searchTerm &&
        !workshop.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
        !workshop.speaker.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
        !workshop.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
      ) {
        return false;
      }

      // Day filter
      if (filters.day !== "all") {
        const dayMap: Record<string, string> = {
          day1: "15 мая",
          day2: "16 мая",
          day3: "17 мая",
        };
        if (!workshop.date.includes(dayMap[filters.day])) {
          return false;
        }
      }

      // Location filter
      if (filters.location !== "all") {
        const locationMap: Record<string, string> = {
          hallA: "Зал A",
          hallB: "Зал B",
          hallC: "Зал C",
        };
        if (workshop.location !== locationMap[filters.location]) {
          return false;
        }
      }

      // Available seats filter
      if (filters.showAvailable && workshop.availableSeats === 0) {
        return false;
      }

      // Registered filter
      if (filters.showRegistered && !workshop.registered && !workshop.waitlist) {
        return false;
      }

      return true;
    });
  };

  const filteredWorkshops = filterWorkshops();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Мастер-классы</h1>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <WorkshopFilter onFilter={setFilters} />
        </div>
        
        <div className="lg:col-span-3">
          {filteredWorkshops.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">
                Мастер-классы не найдены. Попробуйте изменить фильтры.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredWorkshops.map((workshop) => (
                <WorkshopCard key={workshop.id} {...workshop} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workshops;
