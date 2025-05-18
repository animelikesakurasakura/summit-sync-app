
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll use mock data from localStorage
    const fetchNews = () => {
      setLoading(true);
      try {
        const savedNews = localStorage.getItem("conferenceNews");
        if (savedNews) {
          setNews(JSON.parse(savedNews));
        } else {
          // Default news items if none exist
          const defaultNews: NewsItem[] = [
            {
              id: "1",
              title: "Открыта регистрация на конференцию",
              content: "Мы рады сообщить, что регистрация на Конференцию 2025 официально открыта! Не упустите возможность принять участие в главном событии года.",
              date: "2025-01-15",
              author: "Организационный комитет"
            },
            {
              id: "2",
              title: "Объявлены ключевые спикеры",
              content: "С гордостью представляем вам ключевых спикеров Конференции 2025. В этом году у нас выступят ведущие эксперты из разных стран.",
              date: "2025-02-20",
              author: "Организационный комитет"
            }
          ];
          localStorage.setItem("conferenceNews", JSON.stringify(defaultNews));
          setNews(defaultNews);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Новости конференции</h1>
      
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : news.length === 0 ? (
        <Card>
          <CardContent className="py-8">
            <p className="text-center text-muted-foreground">Нет доступных новостей</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{formatDate(item.date)}</span>
                  <span>{item.author}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
