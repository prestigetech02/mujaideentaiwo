"use client";

import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import TechStackLogoMarquee from "@/components/TechStackLogoMarquee";
import {
  WebDesign01Icon,
  ServerStack01Icon,
  MobileProgramming01Icon,
  CodeIcon,
  BookOpen01Icon,
  Briefcase01Icon,
  FileDownloadIcon,
} from "@hugeicons/core-free-icons";
import { useState, useCallback, useEffect } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const skillCategories: { title: string; items: string[] }[] = [
  {
    title: "Frontend & Mobile",
    items: [
      "React.js",
      "Flutter (Dart)",
      "HTML5",
      "CSS3 Responsive & Cross-Platform Development",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js (Express)",
      "Laravel (PHP)",
      "RESTful API Development",
      "Authentication (JWT)",
      "Payment & Third-Party API Integrations",
    ],
  },
  {
    title: "Database",
    items: ["MySQL", "Database Design & Optimization"],
  },
  {
    title: "DevOps & Deployment",
    items: [
      "Linux VPS Deployment",
      "NGINX",
      "PM2",
      "Server Configuration & Maintenance",
    ],
  },
  {
    title: "AI-powered coding workflows",
    items: [
      "Cursor & AI copilots",
      "Development automation",
      "Code optimization using AI tools",
    ],
  },
];

const services = [
  {
    title: "Mobile Apps",
    description:
      "Professional development of cross-platform applications using Flutter for both Android and iOS.",
    icon: MobileProgramming01Icon,
  },
  {
    title: "Web Development",
    description:
      "Responsive, SEO-friendly web applications built with modern stacks like React and Next.js.",
    icon: CodeIcon,
  },
  {
    title: "WordPress",
    description:
      "Custom WordPress sites, themes, and plugins—from content-heavy sites to WooCommerce and membership platforms.",
    icon: ServerStack01Icon,
  },
  {
    title: "UI/UX Design",
    description:
      "Modern, user-centered interfaces designed with attention to accessibility, clarity, and delight across web and mobile.",
    icon: WebDesign01Icon,
  },
];

const techLogos = [
  { src: "/tech-logos/react.svg", alt: "React" },
  { src: "/tech-logos/next.svg", alt: "Next.js" },
  { src: "/tech-logos/nodejs_logo.svg.svg", alt: "Node.js" },
  { src: "/tech-logos/docker_symbol.svg.svg", alt: "Docker" },
  { src: "/tech-logos/php_logo.svg", alt: "PHP" },
  { src: "/tech-logos/laravel_symbol.svg.svg", alt: "Laravel" },
  { src: "/tech-logos/flutter_logo.svg.svg", alt: "Flutter" },
  { src: "/tech-logos/nginx_symbol.svg.svg", alt: "NGINX" },
  { src: "/tech-logos/oracle_mysql_logo.svg.svg", alt: "MySQL" },
  { src: "/tech-logos/github.svg", alt: "GitHub" },
  { src: "/tech-logos/cpanel.svg", alt: "cPanel" },
];

const education = [
  {
    institution: "Moshood Abiola Polytechnic, Nigeria",
    degree: "Higher National Diploma (HND), Computer Science",
    period: "2019 – 2022",
  },
  {
    institution: "Moshood Abiola Polytechnic, Nigeria",
    degree: "Ordinary National Diploma (OND), Computer Science",
    period: "2016 – 2018",
  },
];

const experience = [
  {
    title: "Full-Stack Developer",
    company: "Passpro Africa",
    location: "Lagos (Remote)",
    period: "2024 – 2025",
    duration: "1 yr",
    bullets: [
      "Developed an event ticketing web application using React (frontend) and Node.js (backend).",
      "Designed secure ticket purchase and verification workflows.",
      "Built RESTful APIs and integrated MySQL database architecture.",
      "Developed admin dashboard for event management and user monitoring.",
      "Implemented authentication and transaction-ready infrastructure.",
      "Built and optimized marketing landing pages.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "TechyX360 Technologies Ltd",
    location: "Lagos (Remote)",
    period: "2025 – 2026",
    duration: "1 yr",
    bullets: [
      "Developed Billows, a fintech mobile application built with Flutter (frontend) and Node.js (backend).",
      "Designed secure transaction workflows and backend API architecture.",
      "Built admin management system and financial monitoring tools.",
      "Structured MySQL database for scalable transaction handling.",
      "Managed server deployment and performance optimization on VPS infrastructure.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "CribTech Afrik Ltd",
    location: "Lagos (Remote)",
    period: "Nov 2025",
    duration: "",
    bullets: [
      "Designed and developed CribEasy landing page with performance-focused architecture.",
      "Implemented responsive UI and SEO optimization.",
      "Handled deployment and server configuration.",
    ],
  },
];

const portfolioCategories = [
  "All",
  "Mobile Applications",
  "Web Apps",
  "Wordpress Websites",
  "UI/UX",
] as const;

type PortfolioCategory = (typeof portfolioCategories)[number];

const projects: {
  title: string;
  category: Exclude<PortfolioCategory, "All">;
  image?: string;
  url?: string;
}[] = [
  // Web Apps
  { title: "Billows", category: "Web Apps", image: "/projects/billows-webapp.png", url: "https://billows.com.ng" },
  { title: "GoQuick Web", category: "Web Apps", image: "/projects/goquick-webapp.png", url: "https://goquickapp.com.ng" },
  { title: "Passpro", category: "Web Apps", image: "/projects/passpro-webapp.png", url: "https://passproafrica.com.ng" },
  { title: "CribEasy App", category: "Web Apps", image: "/projects/cribeasy-webapp.png", url: "https://cribeasyapp.com" },
  { title: "Mujaideen Taiwo", category: "Web Apps", image: "/projects/mujaideentaiwo-webapp.png", url: "https://mujaideen-taiwo.netlify.app" },
  { title: "Maryam Portfolio", category: "Web Apps", image: "/projects/Maryamportfolio-webapp.png", url: "https://maryam-portfolio-ten.vercel.app" },
  // Mobile Applications
  { title: "GoQuick", category: "Mobile Applications", image: "/projects/goquick-mobile.png", url: "https://drive.google.com/drive/folders/1n9l2jaIx_APNtkOIGuG8p60To2-zcaF_?usp=sharing" },
  { title: "Passpro Mobile", category: "Mobile Applications", image: "/projects/passpro-mobile.png", url: "https://github.com/prestigetech02/passpro" },
  // Wordpress Websites
  { title: "Listofits", category: "Wordpress Websites", image: "/projects/listofits - wordpress.png", url: "https://listofits.com" },
  { title: "The Paddle", category: "Wordpress Websites", image: "/projects/thepadle-wordpress.png", url: "https://thepaddlehealthcare.co.uk" },
  { title: "Hobson's choice", category: "Wordpress Websites", image: "/projects/hbt-wordpress.png", url: "https://hobsonschoicetransport.com" },
  { title: "The Scale", category: "Wordpress Websites", image: "/projects/thescale-wordpres.png", url: "https://thescale.com.ng" },
  { title: "Daily Naija News", category: "Wordpress Websites", image: "/projects/dnn-wordpress.png", url: "https://dailynaijanews.com" },
  { title: "Earlybee", category: "Wordpress Websites", image: "/projects/earlybee - wordpress.png", url: "https://earlybee.ca" },
  { title: "ICL Group", category: "Wordpress Websites", image: "/projects/ICLgroup-wordpress.png", url: "https://iclgroup.com" },
  { title: "Kwikwell", category: "Wordpress Websites", image: "/projects/kwikwell-wordpress.png", url: "https://kwikwell.com" },
  { title: "Pointnews", category: "Wordpress Websites", image: "/projects/Pointnews-wordpress.png", url: "https://pointnews247.com" },
  { title: "Myrhobes", category: "Wordpress Websites", image: "/projects/Myrhobes-wordpress.png", url: "https://myrhobes.com" },
  { title: "Hobson's Choice", category: "Wordpress Websites", image: "/projects/Hobsonschoice-wordpress.png", url: "https://hobsonschoicehmhealthcare.com/" },
  { title: "Artwell Fitz", category: "Wordpress Websites", image: "/projects/artwell-wordpress.png", url: "https://artwellfitzre.com.ng/" },
  { title: "Unmask Initiative", category: "Wordpress Websites", image: "/projects/unmask-wordpress.png", url: "https://unmaskinitiative.org/" },
  // UI/UX
  { title: "Craftly", category: "UI/UX", image: "/projects/Craftly-UIux.png", url: "https://www.figma.com/design/EVwDRid286qk5XQE3pPt7r/CRAFTLY?node-id=883-7322&t=W7m1p0YwJuxRGsn4-0" },
  { title: "Farmvault", category: "UI/UX", image: "/projects/farmvault-uiux.png", url: "https://www.figma.com/design/Cpbi6ZwGN4ih4Ohw0M5KTd/Farm-Vault-Landing-Page?node-id=222-4773&t=BUkU7MEdi5whlcmu-0" },
  { title: "Bosskard", category: "UI/UX", image: "/projects/bosskard-uiux.png", url: "https://www.figma.com/design/8pcGuI57ebd8jYFcZRgzJK/BOSSKARD-LANDING-PAGE?t=rdxxWt5ZEI4rQHjt-0" },
];

const validTabIds = new Set(navItems.map((item) => item.id));

function getTabFromHash(): string {
  if (typeof window === "undefined") return "about";
  const hash = window.location.hash.slice(1).toLowerCase();
  return validTabIds.has(hash) ? hash : "about";
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [hasHydratedTabs, setHasHydratedTabs] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState<PortfolioCategory>("All");

  // Sync tab with URL hash on load and when hash changes (e.g. back/forward)
  useEffect(() => {
    setActiveTab(getTabFromHash());
    setHasHydratedTabs(true);
    const onHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const setActiveTabAndHash = useCallback((id: string) => {
    setActiveTab(id);
    window.history.replaceState(null, "", "#" + id);
  }, []);
  const [portfolioDisplayFilter, setPortfolioDisplayFilter] = useState<PortfolioCategory>("All");
  const [portfolioExiting, setPortfolioExiting] = useState(false);
  const [portfolioRunGrow, setPortfolioRunGrow] = useState(false);

  const handlePortfolioTab = useCallback((cat: PortfolioCategory) => {
    setPortfolioFilter(cat);
    if (cat !== portfolioDisplayFilter && !portfolioExiting) {
      setPortfolioExiting(true);
    }
  }, [portfolioDisplayFilter, portfolioExiting]);

  const handlePortfolioShrinkEnd = useCallback(() => {
    setPortfolioDisplayFilter(portfolioFilter);
    setPortfolioExiting(false);
    setPortfolioRunGrow(true);
  }, [portfolioFilter]);

  useEffect(() => {
    if (!portfolioRunGrow) return;
    const t = setTimeout(() => setPortfolioRunGrow(false), 320);
    return () => clearTimeout(t);
  }, [portfolioRunGrow]);

  if (!hasHydratedTabs) {
    return null;
  }

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactSending, setContactSending] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactError(null);
    setContactSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setContactError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setContactSubmitted(true);
      setContactForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setContactError("Failed to send. Please try again.");
    } finally {
      setContactSending(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Desktop Nav (top) */}
      <nav className="hidden md:flex items-center justify-between gap-4 border-b border-white/10 px-6 lg:px-10 pt-6 pb-0">
        <div className="flex gap-1">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              data-torch="button"
              className={`px-4 py-3 text-sm font-medium rounded-t-lg transition ${
                item.id === activeTab
                  ? "bg-white/10 text-brand-primary border-t border-x border-white/40 shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_18px_40px_rgba(0,0,0,0.6)] -mb-px backdrop-blur-[18px]"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setActiveTabAndHash(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setActiveTabAndHash("contact")}
          data-torch="button"
          className="mb-0 rounded-t-lg border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] backdrop-blur-[18px] transition hover:bg-white/15 hover:text-brand-primary -mb-px"
        >
          Hire Me
        </button>
      </nav>

      <div className="flex-1 p-6 lg:p-10 pb-10 space-y-12 overflow-y-auto">
        {activeTab === "about" && (
          <>
            {/* About Me */}
            <section>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                About Me
              </h1>
              <div className="mt-2 h-1 w-16 rounded-full bg-brand-primary" />
              <div className="mt-6 text-gray-300 text-sm md:text-base">
                <p className="leading-relaxed text-justify">
                  Full-Stack Developer with 2+ years of experience building
                  scalable web and mobile applications using React, Flutter,
                  Node.js, Laravel, and MySQL. Experienced in designing and
                  deploying fintech, marketplace, and service-based platforms
                  with secure backend architecture and optimized performance. I
                  possess strong expertise in API development, server deployment
                  (NGINX, PM2), and cross-platform mobile development. I also
                  actively leverage AI-assisted development tools (including AI
                  code copilots and workflow automation systems) to accelerate
                  development cycles, improve code quality, and enhance system
                  architecture design.
                </p>
              </div>
            </section>

            {/* My Expertise */}
            <section>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                My Expertise
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-brand-primary" />
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                data-torch="card"
                className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 hover:bg-white/[0.08] transition"
              >
                    <span
                      className="inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-white/10 text-lg md:text-xl mb-3 md:mb-4"
                      aria-hidden
                    >
                      <HugeiconsIcon
                        icon={service.icon}
                        size={24}
                        color="currentColor"
                        strokeWidth={1.6}
                        className="hugeicon"
                      />
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tools I Use */}
            <section aria-labelledby="tools-i-use-heading">
              <h2
                id="tools-i-use-heading"
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
              >
                Tools I use
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-brand-primary" />
              <div className="mt-6">
                <TechStackLogoMarquee logos={techLogos} animated />
              </div>
            </section>
          </>
        )}

        {activeTab === "resume" && (
          <>
            {/* Resume */}
            <section aria-labelledby="resume-heading">
              <h2
                id="resume-heading"
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
              >
                Resume
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-brand-primary" />

              <div className="mt-8 space-y-12">
                {/* Education */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/10">
                    <HugeiconsIcon
                      icon={BookOpen01Icon}
                      size={24}
                      color="currentColor"
                      strokeWidth={1.6}
                      className="hugeicon"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-white">Education</h3>
                    <div className="mt-4 space-y-0">
                      {education.map((entry, i) => (
                        <div key={i} className="flex gap-4">
                          <div
                            className="flex flex-col items-center pt-1.5"
                            aria-hidden
                          >
                            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-primary" />
                            {i < education.length - 1 && (
                              <div className="mt-1 w-px flex-1 min-h-[2rem] bg-white/20" />
                            )}
                          </div>
                          <div className="flex-1 pb-6">
                            <p className="font-semibold text-white text-sm md:text-base">
                              {entry.institution}
                            </p>
                            <p className="mt-0.5 text-xs md:text-sm text-gray-400">
                              {entry.degree}
                            </p>
                            <p className="mt-1 text-xs md:text-sm text-brand-primary">
                              {entry.period}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/10">
                    <HugeiconsIcon
                      icon={Briefcase01Icon}
                      size={24}
                      color="currentColor"
                      strokeWidth={1.6}
                      className="hugeicon"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-white">Experience</h3>
                    <div className="mt-4 space-y-0">
                      {experience.map((entry, i) => (
                        <div key={i} className="flex gap-4">
                          <div
                            className="flex flex-col items-center pt-1.5"
                            aria-hidden
                          >
                            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-primary" />
                            {i < experience.length - 1 && (
                              <div className="mt-1 w-px flex-1 min-h-[3rem] bg-white/20" />
                            )}
                          </div>
                          <div className="flex-1 pb-8">
                            <p className="font-semibold text-white text-sm md:text-base">
                              {entry.title}
                            </p>
                            <p className="mt-0.5 text-xs md:text-sm text-gray-400">
                              {entry.company}
                            </p>
                            <p className="mt-1 text-xs md:text-sm text-gray-400">
                              {entry.period}
                              {entry.duration ? (
                                <span className="text-brand-primary">
                                  {" "}
                                  • {entry.duration}
                                </span>
                              ) : null}
                            </p>
                            <p className="mt-0.5 text-xs md:text-sm text-gray-400">
                              {entry.location}
                            </p>
                            <ul className="mt-3 list-none space-y-1.5 text-xs md:text-sm text-gray-400">
                              {entry.bullets.map((bullet, j) => (
                                <li key={j} className="flex gap-2">
                                  <span
                                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"
                                    aria-hidden
                                  />
                                  <span className="leading-relaxed">
                                    {bullet}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="sticky bottom-6 mt-8 flex justify-end pr-0">
              <a
                href="/mycv.pdf"
                download
                data-torch="button"
                className="inline-flex items-center gap-2 rounded-full bg-[#212121] px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-medium text-brand-primary shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_2px_8px_rgba(0,0,0,0.3)] transition hover:bg-[#2a2a2a] hover:text-brand-primary"
              >
                <HugeiconsIcon
                  icon={FileDownloadIcon}
                  size={20}
                  color="currentColor"
                  strokeWidth={1.5}
                  className="hugeicon"
                />
                Download CV
              </a>
            </div>
          </>
        )}

        {activeTab === "portfolio" && (
          <section aria-labelledby="portfolio-heading">
            <h2
              id="portfolio-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            >
              Portfolio
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-brand-primary" />
            <div className="mt-6 flex flex-wrap gap-2 border-b border-white/10 pb-4">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handlePortfolioTab(cat)}
                  data-torch="button"
                  className={`rounded-lg px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm font-medium transition ${
                    portfolioFilter === cat
                      ? "bg-white/10 text-brand-primary border border-white/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div
              key={portfolioDisplayFilter}
              className={`mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
                portfolioExiting
                  ? "animate-portfolio-shrink"
                  : portfolioRunGrow
                    ? "animate-portfolio-grow"
                    : ""
              }`}
              onAnimationEnd={(e) => {
                if (portfolioExiting && e.animationName === "portfolio-shrink") {
                  handlePortfolioShrinkEnd();
                }
              }}
            >
              {(portfolioDisplayFilter === "All"
                ? projects
                : projects.filter((p) => p.category === portfolioDisplayFilter)
              ).map((project, i) => (
                <a
                  key={`${project.title}-${i}`}
                  href={project.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-torch="card"
                  className="block rounded-2xl bg-white/[0.06] border border-white/10 overflow-hidden hover:bg-white/[0.08] transition focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-black"
                >
                  <div className="aspect-video bg-white/5 flex items-center justify-center relative overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image.includes(" ") ? project.image.replace(/ /g, "%20") : project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-2xl md:text-4xl text-white/20 font-bold">
                        {project.title.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-semibold text-white text-sm md:text-base">{project.title}</h3>
                    <p className="mt-1 text-xs md:text-sm text-gray-400">
                      {project.category}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {activeTab === "contact" && (
          <section aria-labelledby="contact-heading">
            <h2
              id="contact-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            >
              Contact
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-brand-primary" />
            <p className="mt-4 text-gray-400 text-sm md:text-base">
              Have a project in mind or want to chat? Send a message.
            </p>

            <div className="mt-8 max-w-xl">
              {contactError && (
                <div className="mb-4 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-xs md:text-sm text-red-300">
                  {contactError}
                </div>
              )}
              {contactSubmitted ? (
                <div
                  className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 text-center"
                  data-torch="card"
                >
                  <p className="text-brand-primary font-medium">
                    Thanks for your message!
                  </p>
                  <p className="mt-2 text-xs md:text-sm text-gray-400">
                    I&apos;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setContactSubmitted(false)}
                    className="mt-4 text-xs md:text-sm text-gray-400 hover:text-brand-primary transition-colors underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleContactSubmit}
                  className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 space-y-5"
                  data-torch="card"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs md:text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm md:text-base text-white placeholder-gray-500 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs md:text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm md:text-base text-white placeholder-gray-500 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs md:text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={contactForm.subject}
                      onChange={(e) =>
                        setContactForm((prev) => ({ ...prev, subject: e.target.value }))
                      }
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm md:text-base text-white placeholder-gray-500 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition"
                      placeholder="What is this about?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs md:text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm((prev) => ({ ...prev, message: e.target.value }))
                      }
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm md:text-base text-white placeholder-gray-500 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition resize-y min-h-[120px]"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={contactSending}
                    data-torch="button"
                    className="w-full rounded-xl bg-white/10 border border-white/20 py-3 text-xs md:text-sm font-medium text-white hover:bg-white/15 hover:text-brand-primary transition focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-black disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {contactSending ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </section>
        )}

        {activeTab === "skills" && (
          <section aria-labelledby="skills-heading">
            <h2
              id="skills-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            >
              Skills
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-brand-primary" />
            <div className="mt-8 space-y-10">
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-4">
                    {category.title}
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((skill) => (
                      <div
                        key={skill}
                        data-torch="card"
                        className="rounded-2xl bg-white/[0.06] border border-white/10 px-4 py-3 hover:bg-white/[0.08] transition"
                      >
                        <p className="text-xs md:text-sm font-medium text-white">
                          {skill}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
