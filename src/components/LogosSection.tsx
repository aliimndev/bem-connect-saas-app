"use client";

const ITEMS = [
  {
    name: "Computer Science Faculty",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/mercury.svg",
    width: 143,
    height: 26,
    href: "#",
  },
  {
    name: "Information Systems",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/watershed.svg",
    width: 154,
    height: 31,
    href: "#",
  },
  {
    name: "Software Engineering",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/retool.svg",
    width: 113,
    height: 22,
    href: "#",
  },
  {
    name: "Data Science",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/descript.svg",
    width: 112,
    height: 27,
    href: "#",
  },
  {
    name: "Cybersecurity",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/perplexity.svg",
    width: 141,
    height: 32,
    href: "#",
  },
  {
    name: "AI & Machine Learning",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/monzo.svg",
    width: 104,
    height: 18,
    href: "#",
  },
  {
    name: "Web Development",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/ramp.svg",
    width: 105,
    height: 28,
    href: "#",
  },
  {
    name: "Mobile Development",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/raycast.svg",
    width: 128,
    height: 33,
    href: "#",
  },
  {
    name: "Game Development",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/arc.svg",
    width: 90,
    height: 28,
    href: "#",
  },
];

const LogoSection = () => {
  return (
    <section className="overflow-hidden w-full px-0  bg-muted/80 backdrop-blur-3xl py-32 dark:bg-muted">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold tracking-tight text-balance lg:text-3xl">
          Trusted by student organizations across faculties.
          <br />
          <span className="text-muted-foreground">
            From computer science to engineering departments.
          </span>
        </h2>
      </div>

      <div className="relative mt-10">
        <div className="flex w-full">
          {/* First marquee group */}
          <div className="flex shrink-0 animate-marquee items-center gap-12">
            {ITEMS.map((logo, index) => (
              <a href={logo.href} target="_blank" key={index} className="p-6">
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </a>
            ))}
          </div>
          {/* Second marquee group */}
          <div className="flex shrink-0 animate-marquee items-center gap-12">
            {ITEMS.map((logo, index) => (
              <a href={logo.href} target="_blank" key={index} className="p-6">
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { LogoSection };