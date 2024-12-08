"use server";

import { getCurrentUser } from "@/services/AuthService";
import { redirect } from "next/navigation";
import AddCategory from "./_components/AddCategory";

async function AddCategoryPage() {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/signin?redirect=/dashboard/admin/add-category");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8 justify-center">
      <AddCategory />
    </div>
  );
}

export default AddCategoryPage;
