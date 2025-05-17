
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal, Paperclip } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t bg-background p-4">
      <div className="flex items-end gap-2">
        <Textarea
          className="min-h-[60px] flex-grow resize-none"
          placeholder="Введите сообщение..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="flex flex-col gap-2">
          <Button variant="outline" size="icon" type="button">
            <Paperclip className="h-4 w-4" />
            <span className="sr-only">Прикрепить файл</span>
          </Button>
          <Button size="icon" type="button" onClick={handleSend} disabled={!message.trim()}>
            <SendHorizontal className="h-4 w-4" />
            <span className="sr-only">Отправить</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
