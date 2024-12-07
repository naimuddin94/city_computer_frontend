"use client";

import { useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface IProps {
  label: string;
  placeholder: string;
  name?: string;
  required?: boolean;
  type?: string;
}

const CTTextarea = ({ label, name, placeholder, required = true }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldName = name || label.toLowerCase();

  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        {...register(fieldName, {
          required,
        })}
        id={name}
        placeholder={placeholder}
        className="min-h-[120px]"
      />
      {errors[fieldName] && (
        <span className="text-theme text-xs">
          {errors[fieldName].message as string}
        </span>
      )}
    </div>
  );
};

export default CTTextarea;
