
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";

interface WorkshopFilterProps {
  onFilter: (filters: any) => void;
}

const WorkshopFilter = ({ onFilter }: WorkshopFilterProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [day, setDay] = useState("all");
  const [location, setLocation] = useState("all");
  const [showAvailable, setShowAvailable] = useState(false);
  const [showRegistered, setShowRegistered] = useState(false);

  const handleFilter = () => {
    onFilter({
      searchTerm,
      day,
      location,
      showAvailable,
      showRegistered,
    });
  };

  const handleReset = () => {
    setSearchTerm("");
    setDay("all");
    setLocation("all");
    setShowAvailable(false);
    setShowRegistered(false);
    onFilter({
      searchTerm: "",
      day: "all",
      location: "all",
      showAvailable: false,
      showRegistered: false,
    });
  };

  return (
    <div className="bg-card p-4 rounded-lg border space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Поиск мастер-классов..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="day">День</Label>
          <Select value={day} onValueChange={setDay}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите день" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все дни</SelectItem>
              <SelectItem value="day1">День 1 (15.05)</SelectItem>
              <SelectItem value="day2">День 2 (16.05)</SelectItem>
              <SelectItem value="day3">День 3 (17.05)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Место проведения</Label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите место" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все локации</SelectItem>
              <SelectItem value="hallA">Зал A</SelectItem>
              <SelectItem value="hallB">Зал B</SelectItem>
              <SelectItem value="hallC">Зал C</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="available"
            checked={showAvailable}
            onCheckedChange={(checked) => 
              setShowAvailable(checked as boolean)
            }
          />
          <Label htmlFor="available">Только с доступными местами</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="registered"
            checked={showRegistered}
            onCheckedChange={(checked) => 
              setShowRegistered(checked as boolean)
            }
          />
          <Label htmlFor="registered">Мои мастер-классы</Label>
        </div>
      </div>

      <div className="flex gap-2">
        <Button onClick={handleFilter} className="w-full">Применить фильтры</Button>
        <Button variant="outline" onClick={handleReset}>Сбросить</Button>
      </div>
    </div>
  );
};

export default WorkshopFilter;
