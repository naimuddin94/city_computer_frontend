import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-12", className)}
    >
      {children}
    </section>
  );
};

export default Container;
