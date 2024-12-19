import Rating from "@/components/shared/Rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IReview } from "@/types";
import moment from "moment";

const ReviewCard = ({ review }: { review: IReview }) => {
  const { user, rating, createdAt, comment } = review;

  return (
    <div className="flex gap-4">
      <Avatar className="w-10 h-10 border">
        <AvatarImage src={user.image} />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <div className="grid gap-4">
        <div className="flex gap-4 items-start">
          <div className="grid gap-0.5 text-sm">
            <h2 className="font-semibold">{user.name}</h2>
            <time className="text-sm text-muted-foreground">
              {moment(createdAt).fromNow()}
            </time>
          </div>
          <Rating rating={rating} />
        </div>
        <div className="text-sm leading-loose text-muted-foreground">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
