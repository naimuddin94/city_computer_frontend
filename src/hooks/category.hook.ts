/* eslint-disable @typescript-eslint/no-explicit-any */
import { addCategory } from "@/services/CategoryService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

// AddPost Hook
export const useAddCategory = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["AddCategory"],
    mutationFn: async (categoryData) => await addCategory(categoryData),
    onSuccess: (data) => {
      toast.success(data?.message);

      // Correctly invalidate the query with the posts key
      queryClient.refetchQueries({
        queryKey: ["FetchCategories"],
        type: "active",
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
