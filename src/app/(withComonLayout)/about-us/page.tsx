import aboutPageImage from "@/assets/images/dahua_dome_camera.png";
import user1 from "@/assets/images/user-1.jpg";
import user2 from "@/assets/images/user-2.jpg";
import user3 from "@/assets/images/user-3.jpg";
import user4 from "@/assets/images/user-4.jpg";
import user5 from "@/assets/images/user-5.jpg";
import Container from "@/components/shared/Container";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <Container>
      <section className="w-full shadow-sm shadow-muted-foreground my-8 rounded-lg">
        <div className="px-4 md:px-6 space-y-10 xl:space-y-1">
          <div className="grid max-w-[1300px] items-center mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-slate-800">
                Secure Your Home & Business with Our Advanced CCTV Systems!
              </h1>

              <ul className="mx-auto max-w-[700px] text-slate-500">
                <li>
                  ✅ Crystal-Clear Video Quality: 4K Ultra HD for detailed
                  monitoring
                </li>
                <li>
                  ✅ 24/7 Surveillance: Night vision ensures round-the-clock
                  security
                </li>
                <li>
                  ✅ Smart Alerts: Real-time motion detection notifications
                </li>
                <li>
                  ✅ Remote Monitoring: Access live footage from anywhere on
                  your phone
                </li>
                <li>
                  ✅ Remote Monitoring: Access live footage from anywhere on
                  your phone
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <Image
                src={aboutPageImage}
                alt="Computer image"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Story
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Premium Computer Shop, we are dedicated to offering the best
                computers for professionals, gamers, and casual users alike. Our
                passion for technology drives us to provide top-of-the-line
                computers that are built for performance and durability.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">High-Performance Systems</h3>
              <p className="text-sm text-muted-foreground">
                Choose from a wide range of systems powered by the latest
                processors and graphics cards.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Customization Options</h3>
              <p className="text-sm text-muted-foreground">
                Customize your computer to meet your specific needs, whether
                it’s for gaming, work, or creative projects.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Reliable Support</h3>
              <p className="text-sm text-muted-foreground">
                Our expert team is always available to help you with any
                technical queries or support needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted rounded-lg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet the Team
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team consists of tech enthusiasts who are passionate about
                delivering the best computing experience. Meet the people behind
                our premium computer shop.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Avatar>
                <Image
                  src={user1}
                  alt="John Doe"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h4 className="text-lg font-semibold">John Doe</h4>
                <p className="text-muted-foreground">Co-Founder</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <Avatar>
                <Image
                  src={user2}
                  alt="John Doe"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h4 className="text-lg font-semibold">Jane Ahn</h4>
                <p className="text-muted-foreground">Head of Product</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <Avatar>
                <Image
                  src={user3}
                  alt="John Doe"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <AvatarFallback>TL</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h4 className="text-lg font-semibold">Tom Lee</h4>
                <p className="text-muted-foreground">Tech Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="grid items-center justify-center gap-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              What Our Customers Say
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied customers about their experiences with our
              top-notch computers and services.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <Image
                        src={user4}
                        alt="John Doe"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">
                        Satisfied Customer
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;My new gaming PC is amazing! It&apos;s incredibly fast
                    and runs all my games smoothly. I couldn’t be happier with
                    my purchase!&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <Image
                        src={user5}
                        alt="John Doe"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold">Jane Smith</h4>
                      <p className="text-sm text-muted-foreground">
                        Professional User
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;The customer support was fantastic, and I was able to
                    customize my PC exactly how I wanted it. Highly recommended
                    for anyone looking for a high-quality computer!&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default About;
