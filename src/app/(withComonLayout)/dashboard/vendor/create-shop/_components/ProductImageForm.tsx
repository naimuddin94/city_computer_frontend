"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UploadIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const ProductImageForm = () => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    null
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file);
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
          <CardTitle className="text-primary">Product Image</CardTitle>
          <CardDescription>Upload an image for your product.</CardDescription>
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
            {errors["image"] && (
              <span className="text-primary text-xs">
                {errors["image"].message as string}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductImageForm;
