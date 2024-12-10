import { cn } from "@/lib/utils";
import HashLoader from "react-spinners/HashLoader";

export default function Loader({ className }: { className?: string }) {
  return (
    <div className={cn("h-full flex justify-center items-center", className)}>
      <HashLoader
        color="#F26B0F"
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
