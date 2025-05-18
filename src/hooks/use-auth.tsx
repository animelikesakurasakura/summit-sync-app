
import { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "participant" | "organizer" | "speaker";
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  getDashboardPath: () => string;
  register: (name: string, email: string, password: string) => Promise<void>;
}

// Создаем контекст для авторизации
const AuthContext = createContext<AuthContextType | null>(null);

const mockUsers = [
  {
    id: "1",
    email: "participant@conf.ru",
    password: "password123",
    name: "Иван Участник",
    role: "participant" as const
  },
  {
    id: "2",
    email: "organizer@conf.ru",
    password: "password123",
    name: "Мария Организатор",
    role: "organizer" as const
  },
  {
    id: "3",
    email: "speaker@conf.ru",
    password: "password123",
    name: "Алексей Спикер",
    role: "speaker" as const
  }
];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Проверяем, есть ли сохраненные данные пользователя
    const savedUser = localStorage.getItem("user");
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Имитируем задержку загрузки
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Поиск пользователя в моковых данных
    const foundUser = mockUsers.find(
      u => u.email === email && u.password === password
    );
    
    if (!foundUser) {
      setIsLoading(false);
      throw new Error("Неверный email или пароль");
    }
    
    const { password: _, ...userWithoutPassword } = foundUser;
    setUser(userWithoutPassword);
    localStorage.setItem("user", JSON.stringify(userWithoutPassword));
    setIsLoading(false);
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    // Имитируем задержку загрузки
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Проверяем, не существует ли уже пользователь с таким email
    const existingUser = mockUsers.find(u => u.email === email);
    
    if (existingUser) {
      setIsLoading(false);
      throw new Error("Пользователь с таким email уже существует");
    }
    
    // В реальном приложении здесь был бы запрос к API для создания нового пользователя
    // Сейчас мы просто создаем нового пользователя локально
    const newUser = {
      id: String(mockUsers.length + 1),
      name,
      email,
      role: "participant" as const
    };
    
    // Обновляем состояние
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Функция для определения базового пути для дашборда пользователя
  const getDashboardPath = () => {
    if (!user) return "/dashboard";
    
    switch (user.role) {
      case "organizer":
        return "/organizer";
      case "speaker":
        return "/speaker";
      default:
        return "/dashboard";
    }
  };
  
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        getDashboardPath,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }
  
  return context;
};
