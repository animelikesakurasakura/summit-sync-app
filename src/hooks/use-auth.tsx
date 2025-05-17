
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Типы пользователей
export interface User {
  id: string;
  name: string;
  email: string;
  role: "participant" | "organizer" | "speaker";
}

// Интерфейс контекста авторизации
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  getDashboardPath: () => string;
}

// Создание контекста авторизации
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Мок данные пользователей (в реальном приложении заменить на API)
const mockUsers = [
  {
    id: "1",
    name: "Иван Организатор",
    email: "organizer@conf.ru",
    password: "password123",
    role: "organizer" as const
  },
  {
    id: "2",
    name: "Мария Участник",
    email: "participant@conf.ru",
    password: "password123",
    role: "participant" as const
  },
  {
    id: "3",
    name: "Алексей Спикер",
    email: "speaker@conf.ru",
    password: "password123",
    role: "speaker" as const
  }
];

// Провайдер авторизации
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Проверяем, есть ли сохраненный пользователь при загрузке
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Функция входа
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Имитация задержки запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Поиск пользователя
      const foundUser = mockUsers.find(
        u => u.email === email && u.password === password
      );
      
      if (foundUser) {
        // Удаляем пароль из объекта пользователя
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem("user", JSON.stringify(userWithoutPassword));
        
        toast({
          title: "Успешный вход",
          description: `Добро пожаловать, ${userWithoutPassword.name}!`,
        });
        
        // Перенаправляем в нужный дашборд в зависимости от роли
        const dashboardPath = getDashboardPathByRole(userWithoutPassword.role);
        navigate(dashboardPath);
      } else {
        toast({
          variant: "destructive",
          title: "Ошибка входа",
          description: "Неверный email или пароль",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Произошла ошибка при входе",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Функция регистрации
  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Имитация задержки запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Проверяем, существует ли пользователь с таким email
      if (mockUsers.some(u => u.email === email)) {
        toast({
          variant: "destructive",
          title: "Ошибка регистрации",
          description: "Пользователь с таким email уже существует",
        });
        return;
      }
      
      // В реальном приложении здесь был бы API запрос
      const newUser = {
        id: String(mockUsers.length + 1),
        name,
        email,
        role: "participant" as const
      };
      
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      
      toast({
        title: "Регистрация успешна",
        description: `Добро пожаловать, ${name}!`,
      });
      
      navigate("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Произошла ошибка при регистрации",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Функция выхода
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
    toast({
      title: "Выход выполнен",
      description: "Вы вышли из системы",
    });
  };

  // Получение пути к дашборду по роли
  const getDashboardPathByRole = (role: User["role"]) => {
    switch (role) {
      case "organizer":
        return "/organizer";
      case "speaker":
        return "/speaker";
      case "participant":
      default:
        return "/dashboard";
    }
  };

  // Публичная функция для получения пути к дашборду
  const getDashboardPath = () => {
    if (!user) return "/";
    return getDashboardPathByRole(user.role);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        getDashboardPath
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Хук для использования авторизации
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
