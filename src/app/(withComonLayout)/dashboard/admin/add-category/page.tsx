import { getCurrentUser } from "@/services/AuthService";
import { redirect } from "next/navigation";

const AddCategory = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/signin?redirect=dashboard/admin/add-category");
  }
  return (
    <div>
      <h1>This is category page component</h1>
    </div>
  );
};

export default AddCategory;
