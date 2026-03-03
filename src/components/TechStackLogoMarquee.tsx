import React from "react";
import Image from "next/image";

type TechLogo = {
  src: string; // public path, e.g. "/tech-logos/react.svg"
  alt: string;
};

type TechStackProps = {
  logos?: TechLogo[];
  animated?: boolean;
};

/**
 * Horizontal tech stack logo strip with optional marquee animation.
 * Uses monochrome SVGs placed in the public/tech-logos folder.
 */
const TechStackLogoMarquee: React.FC<TechStackProps> = ({
  logos = [],
  animated = false,
}) => {
  if (!logos.length) return null;

  const iconClass =
    "h-7 sm:h-8 md:h-9 w-auto brightness-0 invert opacity-55 transition-[filter,transform,opacity] duration-200 hover:opacity-100 hover:brightness-100 hover:invert-0 hover:scale-105";

  const content = (
    <>
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          width={36}
          height={36}
          loading="lazy"
          className={iconClass}
        />
      ))}
    </>
  );

  if (animated) {
    return (
      <section className="w-full py-5 sm:py-6">
        <div className="w-full overflow-hidden">
          <div className="rounded-2xl bg-white/[0.06] border border-white/10 px-6 sm:px-10 py-4 overflow-hidden hover:bg-white/[0.08] transition">
            <div className="tech-marquee flex items-center gap-12 sm:gap-16">
              {content}
              {content}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-5 sm:py-6">
      <div className="w-full">
        <div className="rounded-2xl bg-white/[0.06] border border-white/10 px-6 sm:px-10 py-4">
          <div className="flex items-center justify-center gap-10 sm:gap-14 md:gap-16 overflow-x-auto tech-scroll-hide">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackLogoMarquee;

