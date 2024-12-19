"use client";

import PaginationComponent from "@/components/shared/PaginationComponent";
import { fetchProductReviews } from "@/services/ReviewService";
import { IMeta, IReview } from "@/types";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Review = ({ productId }: { productId: string }) => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [meta, setMeta] = useState<IMeta | null>(null);
  const [page, setPage] = useState(1);

  const fetchReviews = async () => {
    const data = await fetchProductReviews(productId, {
      page: page.toString(),
      limit: "3",
    });
    setReviews(data?.data);
    setMeta(data?.meta);
  };

  useEffect(() => {
    fetchReviews();
  }, [page]);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="grid gap-4 py-6">
      <div className="grid gap-2">
        <h2 className="md:text-lg font-bold text-slate-700">
          Customer Reviews
        </h2>
        <div className="grid gap-6">
          {reviews?.length ? (
            reviews?.map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))
          ) : (
            <div>
              <p>No review yet !</p>
            </div>
          )}
        </div>
        {meta && meta?.totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <PaginationComponent meta={meta} onPageChange={onPageChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
