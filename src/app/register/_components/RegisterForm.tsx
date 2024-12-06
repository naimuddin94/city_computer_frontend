"use client";

import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideEye, LucideEyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onsubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
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
            className="absolute right-3 top-[45%] opacity-50 cursor-pointer"
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
          href="/login"
          className="text-sm hover:text-primary hover:underline"
        >
          Have an account? Login
        </Link>
        <Button type="submit">
          {isSubmitting ? <Loader size={28} /> : "Register"}
        </Button>
      </CardFooter>
    </form>
  );
};

export default RegisterForm;
