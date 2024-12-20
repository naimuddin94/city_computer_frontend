import { StarIcon } from "lucide-react";

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div>
      <div className="flex items-center gap-0.5 ml-auto">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? "fill-primary stroke-none"
                : "fill-slate-300  stroke-none"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;
