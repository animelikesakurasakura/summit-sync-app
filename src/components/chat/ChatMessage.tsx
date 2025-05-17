
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";

interface ChatMessageProps {
  content: string;
  sender: string;
  timestamp: string;
  avatar?: string;
  isCurrentUser: boolean;
}

const ChatMessage = ({
  content,
  sender,
  timestamp,
  avatar,
  isCurrentUser,
}: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full mb-4",
        isCurrentUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "flex max-w-[80%]",
          isCurrentUser ? "flex-row-reverse" : "flex-row"
        )}
      >
        <Avatar className="h-8 w-8 border">
          <div className="bg-primary flex h-full w-full items-center justify-center rounded-full text-primary-foreground">
            {avatar || sender.charAt(0).toUpperCase()}
          </div>
        </Avatar>

        <div
          className={cn(
            "mx-2 rounded-lg px-4 py-2 shadow-sm",
            isCurrentUser
              ? "rounded-br-none bg-primary text-primary-foreground"
              : "rounded-bl-none bg-muted"
          )}
        >
          {!isCurrentUser && (
            <div className="mb-1 font-medium text-sm">{sender}</div>
          )}
          <div className="text-sm">{content}</div>
          <div
            className={cn(
              "mt-1 text-xs",
              isCurrentUser ? "text-primary-foreground/80" : "text-muted-foreground"
            )}
          >
            {timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
