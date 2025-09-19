import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";

import type { Variants } from "framer-motion";

const transitionVariants: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function MainFeatureSection() {
  return (
    <div className="">
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                <h2 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16">
                  Terhubung. Terorganisir. Bergerak — BEM Fakultas Ilmu Komputer
                </h2>
                <h2 className="mt-8 max-w-2xl text-muted-foreground tracking-wide text-pretty text-lg">
                  A collaborative platform for student councils to run events, share announcements, and engage members effectively
                </h2>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex items-center gap-2"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Create your BEM Workspace</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">View Demo</span>
                    </Link>
                  </Button>
                </AnimatedGroup>

                {/* Feature highlights */}
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-primary"></div>
                    Events & RSVPs
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-primary"></div>
                    Official Announcements
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-primary"></div>
                    Committee Hubs
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-primary"></div>
                    Volunteer Management
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-primary"></div>
                    Quick Polls & Surveys
                  </span>
                </div>
              </div>
            </div>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-b via-white/50 to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-transperant relative mx-auto max-w-7xl overflow-hidden rounded-3xl border px-0 shadow-lg shadow-zinc-950/15 ring-1">
                  <video
                    className="bg-background relative rounded-2xl"
                    src="https://ddux7jl4k2xkx.cloudfront.net/media/videos/Missive-tour-2502181503-1440p.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    // alt="Main Feature Image"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </div>
  );
}