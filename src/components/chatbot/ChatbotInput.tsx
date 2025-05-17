
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";

interface ChatbotInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatbotInput = ({ onSendMessage, disabled }: ChatbotInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && message.trim()) {
      handleSend();
    }
  };

  return (
    <div className="flex items-center gap-2 p-2 border-t">
      <Input
        type="text"
        placeholder="Задайте вопрос..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className="flex-grow"
      />
      <Button 
        size="icon" 
        onClick={handleSend} 
        disabled={disabled || !message.trim()}
      >
        <SendHorizontal className="h-4 w-4" />
        <span className="sr-only">Отправить</span>
      </Button>
    </div>
  );
};

export default ChatbotInput;
