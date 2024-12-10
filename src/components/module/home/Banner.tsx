import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden">
      <Image
        src="/placeholder.svg?height=500&width=1000"
        alt="Ecommerce Banner Background"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-3xl text-primary md:text-4xl lg:text-5xl font-bold mb-4">
          Summer Sale is Here!
        </h1>
        <p className="text-xl md:text-2xl text-primary mb-6">
          Up to 50% off on selected items
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Shop Now
        </Button>
      </div>
    </div>
  );
}
