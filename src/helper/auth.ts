import { toast } from "sonner";

export const handleLogout = async () => {
  try {
    toast("logged out");
  } catch (error) {
    console.log(error);
  }
};
