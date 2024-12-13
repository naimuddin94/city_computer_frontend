import contactPageImg from "@/assets/images/location.webp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { ClockIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

function Contact() {
  return (
    <div className="w-full flex justify-center items-center">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container max-w-4xl px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-600">
              Get in Touch
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Have a question or want to work together? Fill out the form below
              and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <form className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div>
            <div className="space-y-4">
              <div className="grid gap-2">
                <h2 className="text-2xl font-bold text-slate-600">
                  Our Location
                </h2>
                <p className="text-muted-foreground">
                  123 Main St, Anytown USA 12345
                </p>
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={contactPageImg}
                  alt="keyboard image"
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                  <p>(123) 456-7890</p>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-muted-foreground" />
                  <p>Mon-Fri: 9am - 5pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
