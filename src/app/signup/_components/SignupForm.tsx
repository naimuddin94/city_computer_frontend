"use client";

import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/context/user.provider";
import { AuthSchema } from "@/schema/auth.schema";
import { signupUser } from "@/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { LucideEye, LucideEyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const redirect = searchParams.get("redirect");

  const { setUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(AuthSchema.registerSchema) });

  const onSubmit = async (data: FieldValues) => {
    const { files, ...remainData } = data;
    const formData = new FormData();

    // Append form fields except the file
    Object.entries(remainData).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    // Append the first file if available
    if (files && files[0]) {
      formData.append("image", files[0]);
    }

    try {
      const res = await signupUser(formData);
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
    } catch {
      toast.error("Something went wrong during register!");
    }
  };
  return (
    <>
      {isSubmitting && <Loading />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="John Doe"
            />
            {errors.name && (
              <span className="text-theme text-xs">
                {errors.name.message as string}
              </span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="m@example.com"
            />
            {errors.email && (
              <span className="text-theme text-xs">
                {errors.email.message as string}
              </span>
            )}
          </div>

          <div className="space-y-2 relative">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              {...register("password", {
                required: "Password is required",
              })}
              type={showPassword ? "text" : "password"}
              placeholder="#########"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-7 opacity-50 cursor-pointer"
            >
              {showPassword ? <LucideEye /> : <LucideEyeOff />}
            </div>
            {errors.password && (
              <span className="text-theme text-xs">
                {errors.password.message as string}
              </span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="profile-image">Profile Image</Label>
            <Input
              {...register("files", { required: "Photo is required" })}
              id="profile-image"
              type="file"
              className="dark:file:text-white"
            />

            {errors.files && (
              <span className="text-theme text-xs">
                {errors.files.message as string}
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Link
            href="/signin"
            className="text-sm hover:text-primary hover:underline"
          >
            Have an account? Signin
          </Link>
          <Button type="submit">Signup</Button>
        </CardFooter>
      </form>
    </>
  );
};

export default SignupForm;
