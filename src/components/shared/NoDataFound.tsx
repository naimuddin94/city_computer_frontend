import { cn } from "@/lib/utils";

interface IProps {
  message: string;
  className?: string;
}

const NoDataFound = ({ message, className }: IProps) => {
  return (
    <div className={cn("h-[50vh] flex items-center justify-center", className)}>
      <h3 className="opacity-70 text-lg">{message}</h3>
    </div>
  );
};

export default NoDataFound;
