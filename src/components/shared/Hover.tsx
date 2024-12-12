import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ReactNode } from "react";

type THoverProps = {
  children: ReactNode;
  image?: string;
  heading: string;
  description: string;
};

function Hover({ children, image, heading, description }: THoverProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-80 max-w-fit">
        <div className="flex justify-between space-x-4">
          {image && (
            <Avatar>
              <AvatarImage src={image} />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
          )}
          <div className="space-y-1">
            <h4 className="text-sm">{heading}</h4>
            <p className="text-xs text-muted-foreground font-thin">
              {description}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default Hover;
