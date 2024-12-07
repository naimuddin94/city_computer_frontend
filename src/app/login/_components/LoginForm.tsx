"use client";

import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/context/user.provider";
import { signinUser } from "@/services/AuthService";
import { LucideEye, LucideEyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

//! This is for development
const defaultValues = {
  email: "jhon@gmail.com",
  password: "password123",
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const redirect = searchParams.get("redirect");

  const { setUser, setIsLoading } = useUser();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({ defaultValues });

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await signinUser(data);
      console.log(res);
      if (res?.success) {
        toast.success(res.message);
        setUser(res.data);
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      } else if (!res?.success) {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isSubmitting && <Loading />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="mail@example.com"
              required
            />
          </div>
          <div className="space-y-2 relative">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="text-sm font-medium underline underline-offset-4 hover:text-primary"
              >
                Forgot password?
              </a>
            </div>
            <Input
              {...register("password")}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="#########"
              required
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[40%] opacity-50 cursor-pointer"
            >
              {showPassword ? <LucideEye /> : <LucideEyeOff />}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full border-theme/40"
            disabled={isSubmitting}
          >
            Login
          </Button>
        </CardFooter>
      </form>
    </>
  );
};

export default LoginForm;
