import React from "react";

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
    "h-7 sm:h-8 md:h-9 w-auto opacity-70 hover:opacity-100 transition-transform duration-200";

  const content = (
    <>
      {logos.map((logo, index) => (
        // index is fine here, order is static
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          role="img"
          loading="lazy"
          className={`${iconClass} grayscale brightness-150 hover:opacity-100 hover:grayscale-0 hover:scale-105`}
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

