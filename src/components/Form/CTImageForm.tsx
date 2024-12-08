"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IInputProps } from "@/types";
import { UploadIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const CTImageForm = ({ name, label, placeholder }: IInputProps) => {
  const {
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useFormContext();
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    null
  );

  useEffect(() => {
    setPreviewUrl(null);
  }, [isSubmitSuccessful]);

  console.log("rendering...ctimage form");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue(name, file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="col-span-2 lg:col-span-1">
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">{label}</CardTitle>
          <CardDescription>{placeholder}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="aspect-square bg-muted dark:bg-muted/30 rounded-md overflow-hidden">
              {previewUrl && (
                <Image
                  src={previewUrl as string}
                  alt="Product Image"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <Button
              variant="outline"
              type="button"
              className="justify-center"
              onClick={() => document.getElementById("file-input")?.click()}
            >
              <UploadIcon className="w-4 h-4 mr-2" />
              Upload Image
            </Button>
            {errors[name] && (
              <span className="text-primary text-xs">
                {errors[name].message as string}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CTImageForm;
