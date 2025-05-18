
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, Edit, Trash } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

const NewsManagement = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingNewsId, setEditingNewsId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = () => {
    try {
      const savedNews = localStorage.getItem("conferenceNews");
      if (savedNews) {
        setNews(JSON.parse(savedNews));
      }
    } catch (error) {
      console.error("Error loading news:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить список новостей",
        variant: "destructive",
      });
    }
  };

  const handleOpenDialog = (newsItem?: NewsItem) => {
    if (newsItem) {
      setFormData({
        title: newsItem.title,
        content: newsItem.content,
      });
      setEditingNewsId(newsItem.id);
    } else {
      setFormData({ title: "", content: "" });
      setEditingNewsId(null);
    }
    setDialogOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    try {
      if (!formData.title || !formData.content) {
        toast({
          title: "Ошибка",
          description: "Заполните все поля формы",
          variant: "destructive",
        });
        return;
      }

      let updatedNews: NewsItem[];

      if (editingNewsId) {
        // Update existing news
        updatedNews = news.map((item) =>
          item.id === editingNewsId
            ? {
                ...item,
                title: formData.title,
                content: formData.content,
              }
            : item
        );
        toast({
          title: "Успех",
          description: "Новость успешно обновлена",
        });
      } else {
        // Add new news item
        const newItem: NewsItem = {
          id: Date.now().toString(),
          title: formData.title,
          content: formData.content,
          date: new Date().toISOString().split("T")[0],
          author: user?.name || "Организатор"
        };
        updatedNews = [newItem, ...news];
        toast({
          title: "Успех",
          description: "Новость успешно добавлена",
        });
      }

      localStorage.setItem("conferenceNews", JSON.stringify(updatedNews));
      setNews(updatedNews);
      setDialogOpen(false);
      setFormData({ title: "", content: "" });
      setEditingNewsId(null);
    } catch (error) {
      console.error("Error saving news:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить новость",
        variant: "destructive",
      });
    }
  };

  const handleDeleteNews = (id: string) => {
    try {
      const updatedNews = news.filter((item) => item.id !== id);
      localStorage.setItem("conferenceNews", JSON.stringify(updatedNews));
      setNews(updatedNews);
      toast({
        title: "Успех",
        description: "Новость успешно удалена",
      });
    } catch (error) {
      console.error("Error deleting news:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось удалить новость",
        variant: "destructive",
      });
    }
  };

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
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Управление новостями</h1>
          <p className="text-muted-foreground">
            Добавление и редактирование новостей конференции
          </p>
        </div>
        <Button onClick={() => handleOpenDialog()}>Добавить новость</Button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{editingNewsId ? "Редактировать новость" : "Добавить новость"}</DialogTitle>
            <DialogDescription>
              Заполните форму для публикации новости на сайте конференции
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Заголовок
              </label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Введите заголовок новости"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium">
                Содержание
              </label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Введите текст новости"
                rows={6}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Отмена
            </Button>
            <Button onClick={handleSubmit}>
              {editingNewsId ? "Сохранить" : "Опубликовать"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="space-y-6">
        {news.length === 0 ? (
          <Card>
            <CardContent className="py-8">
              <p className="text-center text-muted-foreground">Нет доступных новостей</p>
            </CardContent>
          </Card>
        ) : (
          news.map((item) => (
            <Card key={item.id}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle>{item.title}</CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => handleOpenDialog(item)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="text-destructive"
                      onClick={() => handleDeleteNews(item.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {formatDate(item.date)} · {item.author}
                </div>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{item.content}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsManagement;
