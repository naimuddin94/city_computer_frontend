import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createReview, fetchReviewByProductId } from "@/services/ReviewService";
import { IRating } from "@/types";
import { LoaderIcon, StarIcon } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toast } from "sonner";

type TModalProps = {
  open: boolean;
  setShowModel: Dispatch<SetStateAction<boolean>>;
  ratingData?: IRating;
  productId: string;
};

function RatingModal({ open, setShowModel, productId }: TModalProps) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    const newReview = {
      productId,
      rating: rating.toString(),
      comment,
    };

    try {
      const data = await createReview(newReview);
      toast.success(data.message);
      if (data?.success) {
        setShowModel(false);
      }
    } catch {
      toast.error("Something went wrong while saving review");
    } finally {
      setLoading(false);
    }
  };

  const fetchReviewData = async () => {
    const data = await fetchReviewByProductId(productId);
    if (data?.success && data?.data) {
      setComment(data?.data?.comment);
      setRating(data?.data?.rating);
    }
  };

  useEffect(() => {
    fetchReviewData();
  }, []);

  return (
    <Dialog open={open} onOpenChange={setShowModel}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-md">Give your feedback</DialogTitle>
          <DialogDescription className="text-xs">
            Share your experience with this product. Your feedback helps us
            improve and serve you better.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="">
            <div>
              <div className="flex items-center gap-0.5 ml-auto">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon
                    key={index}
                    onClick={() => setRating(index + 1)}
                    className={`w-6 h-6 cursor-pointer ${
                      index < rating
                        ? "fill-primary stroke-slate-800/30"
                        : " stroke-slate-800/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <Label htmlFor="feedback" className="text-right">
              Feedback
            </Label>
            <Textarea
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              id="feedback"
              placeholder="Share your feedback and help us serve you better."
              className="w-full"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onSubmit} type="submit">
            {loading ? <LoaderIcon className="animate-spin" /> : "Submit"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default RatingModal;
