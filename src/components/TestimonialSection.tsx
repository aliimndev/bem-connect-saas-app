"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronRight, Star, Users } from "lucide-react";
import { useRef } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "BEM President",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content:
      "BEM Connect has transformed how we manage our student organization. Event planning and member engagement has never been easier.",
  },
  {
    name: "Ahmad Rahman",
    role: "Committee Lead",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content:
      "The committee management features are outstanding. We can coordinate projects and communicate with members seamlessly.",
  },
  {
    name: "Lisa Chen",
    role: "Faculty Advisor",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content:
      "As an advisor, I love how I can stay updated on all student activities and provide guidance when needed through the platform.",
  },
  {
    name: "Michael Torres",
    role: "Event Coordinator",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content:
      "Managing RSVPs and volunteer signups for our events has become incredibly streamlined. The analytics help us improve each time.",
  },
  {
    name: "Jessica Kim",
    role: "Secretary",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content:
      "The announcement system ensures important information reaches all members quickly. No more missed communications or confusion.",
  },
  {
    name: "David Okafor",
    role: "Student Member",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content:
      "I stay connected with my student government easily. Finding events, joining committees, and participating in polls is so intuitive.",
  },
];

const TestimonialSection = () => {
  const plugin = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    })
  );

  return (
    <section className="py-32 w-full mx-auto overflow-hidden">
      <div className="w-full mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-1 text-sm font-semibold">
          <Users className="h-6 w-auto fill-primary" />
          Trusted by 500+ student organizations nationwide
        </div>

        <h2 className="text-balance text-center text-3xl font-medium md:text-4xl lg:text-6xl">
          Meet our active BEM Connect users
        </h2>
        <p className="text-muted-foreground text-center mx-auto mt-4 max-w-2xl text-lg">
          Join student leaders, faculty advisors, and engaged members building
          stronger campus communities.
        </p>
      </div>
      <div className="lg:w-full mx-auto ">
        <div className="mt-16 space-y-4">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseLeave={() => plugin.current.play()}
            className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-10 before:w-36 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:top-0 after:right-0 after:bottom-0 after:z-10 after:w-36 after:bg-linear-to-l after:from-orange-200 after:to-transparent"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 p-6 select-none">
                    <div className="flex justify-between">
                      <div className="mb-4 flex gap-4">
                        <Avatar className="size-14 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                      </div>
                    </div>
                    <q className="leading-7 text-muted-foreground">
                      {testimonial.content}
                    </q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { TestimonialSection };