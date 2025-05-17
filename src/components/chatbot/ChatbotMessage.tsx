
import { cn } from "@/lib/utils";

interface ChatbotMessageProps {
  content: string;
  isUser: boolean;
}

const ChatbotMessage = ({ content, isUser }: ChatbotMessageProps) => {
  return (
    <div
      className={cn(
        "mb-4 flex",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[75%] rounded-xl px-4 py-2 shadow-sm",
          isUser
            ? "rounded-tr-none bg-primary text-primary-foreground"
            : "rounded-tl-none bg-muted"
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default ChatbotMessage;
