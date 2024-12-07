import { signout } from "@/services/AuthService";
import { toast } from "sonner";

export const handleLogout = async () => {
  try {
    signout();
    toast("logged out");
  } catch (error) {
    console.log(error);
  }
};
