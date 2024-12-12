"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface IProps {
  label: string;
  placeholder: string;
  name: string;
  required?: boolean;
  type?: string;
  className?: string;
  withoutLabel?: boolean;
}

const CTInput = ({
  label,
  name,
  placeholder,
  required = true,
  type = "text",
  className,
  withoutLabel = false,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid gap-2">
      {!withoutLabel && <Label htmlFor={name}>{label}</Label>}
      <Input
        {...register(name, {
          required,
        })}
        id={name}
        type={type}
        placeholder={placeholder}
        className={className}
      />
      {errors[name] && (
        <span className="text-primary text-xs">
          {errors[name].message as string}
        </span>
      )}
    </div>
  );
};

export default CTInput;
