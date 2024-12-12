"use client";

import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/context/user.context";
import { AuthSchema } from "@/schema/auth.schema";
import { signinUser } from "@/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { LucideEye, LucideEyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const redirect = searchParams.get("redirect");

  const { setUser, setIsLoading } = useUser();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: zodResolver(AuthSchema.loginSchema) });

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await signinUser(data);
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
    } catch {
      toast.error("Something went wrong during login!");
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
            <span className="text-primary text-sm">
              {errors?.email && (errors.email.message as string)}
            </span>
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
            <span className="text-primary text-sm">
              {errors?.password && (errors.password.message as string)}
            </span>
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-6 opacity-50 cursor-pointer"
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
            Signin
          </Button>
        </CardFooter>
      </form>
    </>
  );
};

export default SigninForm;
