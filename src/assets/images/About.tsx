import Container from "@/components/shared/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import aboutPageImage from "@/assets/images/fantastic_key.png";
import user1 from "@/assets/images/user-1.jpg"
import user2 from "@/assets/images/user-2.jpg"
import user3 from "@/assets/images/user-3.jpg"
import user4 from "@/assets/images/user-4.jpg"
import user5 from "@/assets/images/user-5.jpg"


function About() {
  return (
    <Container>
      <section className="w-full shadow-sm shadow-muted-foreground my-8 rounded-lg">
        <div className="px-4 md:px-6 space-y-10 xl:space-y-1">
          <div className="grid max-w-[1300px] items-center mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Mechanical Keyboard Shop
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Discover the best mechanical keyboards for your typing and
                gaming needs.
              </p>
              <div className="mt-6">
                <Link
                  to="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <img
                src={aboutPageImage}
                alt="Keyboard image"
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
                At Mechanical Keyboard Shop, we are passionate about providing
                the best mechanical keyboards for our customers. Our journey
                began with a simple love for the satisfying click-clack of
                mechanical switches, and we've since dedicated ourselves to
                curating a collection of the finest keyboards on the market.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Unparalleled Quality</h3>
              <p className="text-sm text-muted-foreground">
                We source our keyboards from the top manufacturers, ensuring
                exceptional build quality and performance.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Customization Options</h3>
              <p className="text-sm text-muted-foreground">
                Personalize your keyboard with a wide range of keycaps,
                switches, and accessories.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Dedicated Support</h3>
              <p className="text-sm text-muted-foreground">
                Our knowledgeable team is here to assist you with any questions
                or concerns.
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
                Our team of passionate keyboard enthusiasts is dedicated to
                providing you with the best possible shopping experience. Get to
                know the people behind our mechanical keyboard shop.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Avatar>
                <AvatarImage src={user1} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h4 className="text-lg font-semibold">John Doe</h4>
                <p className="text-muted-foreground">Co-Founder</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <Avatar>
                <AvatarImage src={user2} />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h4 className="text-lg font-semibold">Jane Ahn</h4>
                <p className="text-muted-foreground">Head of Design</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <Avatar>
                <AvatarImage src={user3} />
                <AvatarFallback>TL</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h4 className="text-lg font-semibold">Tom Lee</h4>
                <p className="text-muted-foreground">Lead Engineer</p>
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
              mechanical keyboards.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={user4} />
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
                    "I absolutely love my new mechanical keyboard from\n
                    Mechanical Keyboard Shop. The build quality is\n
                    exceptional, and the typing experience is unparalleled.\n
                    Highly recommended!"
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={user5} />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold">Jane Smith</h4>
                      <p className="text-sm text-muted-foreground">
                        Satisfied Customer
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I've been using my Mechanical Keyboard Shop keyboard for\n
                    months now, and it's been a game-changer for my\n
                    productivity. The customization options are endless, and\n
                    the customer support is top-notch."
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


