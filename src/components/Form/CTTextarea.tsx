"use client";

import { useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface IProps {
  label: string;
  placeholder: string;
  name: string;
  required?: boolean;
  type?: string;
}

const CTTextarea = ({ label, name, placeholder, required = true }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        {...register(name, {
          required,
        })}
        id={name}
        placeholder={placeholder}
        className="min-h-[120px]"
      />
      {errors[name] && (
        <span className="text-primary text-xs">
          {errors[name].message as string}
        </span>
      )}
    </div>
  );
};

export default CTTextarea;
