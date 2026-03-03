import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  CallIcon,
  Location01Icon,
  Linkedin01Icon,
  GithubIcon,
  NewTwitterIcon,
  Message01Icon,
} from "@hugeicons/core-free-icons";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-full md:items-center md:text-center md:px-6 md:pb-6 lg:pb-8">
      {/* Profile: compact card on mobile, full on desktop */}
      <div className="flex flex-row items-center gap-4 p-4 md:flex-col md:gap-0 md:mb-4 md:p-0 md:pt-6 md:px-6 lg:pt-8 lg:px-8 md:w-full">
        <div className="relative shrink-0 w-28 h-28 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl md:rounded-2xl overflow-hidden bg-white/5 border border-white/10">
          <Image
            src="/mypics.png"
            alt="Profile"
            fill
            className="object-cover -scale-x-100"
            sizes="(max-width: 768px) 112px, 128px"
          />
          <span
            className="absolute bottom-1 right-1 w-2.5 h-2.5 md:bottom-1.5 md:right-1.5 md:w-3 md:h-3 rounded-full bg-emerald-500 ring-2 ring-black"
            aria-hidden
          />
        </div>
        <div className="min-w-0 flex-1 md:flex-none md:mt-4 md:w-full text-center">
          <h2 className="text-[28px] md:text-xl lg:text-2xl font-bold text-white truncate md:overflow-visible md:whitespace-normal">
            Hey, I&apos;m Taiwo
          </h2>
          <span className="inline-block mt-1 md:mt-2 px-3 py-1 md:px-4 md:py-1.5 rounded-lg bg-white/10 text-[11px] md:text-sm text-gray-400">
            Full-Stack Engineer
          </span>
        </div>
      </div>

      {/* Contact: hidden on mobile, full block on desktop */}
      <div className="hidden md:block mt-8 w-full max-w-full space-y-6 text-left overflow-hidden" data-torch="card">
        <div className="h-px w-full bg-white/10" />
        <div className="flex items-center gap-4 min-w-0">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black/40 shadow-neu-soft border border-white/5">
            <HugeiconsIcon
              icon={Mail01Icon}
              size={22}
              color="currentColor"
              strokeWidth={1.6}
              className="hugeicon"
            />
          </div>
          <div className="min-w-0 flex-1 space-y-1 overflow-hidden">
            <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
              Email
            </p>
            <a
              href="mailto:mujaideentaiwo01@gmail.com"
              className="text-sm text-gray-100 hover:text-brand-primary transition-colors break-all"
            >
              mujaideentaiwo01@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4 min-w-0">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black/40 shadow-neu-soft border border-white/5">
            <HugeiconsIcon
              icon={CallIcon}
              size={22}
              color="currentColor"
              strokeWidth={1.6}
              className="hugeicon"
            />
          </div>
          <div className="min-w-0 flex-1 space-y-1 overflow-hidden">
            <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
              Phone
            </p>
            <a
              href="https://wa.me/2349128868892"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-100 hover:text-brand-primary transition-colors"
            >
              +234 912 886 8892
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4 min-w-0">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black/40 shadow-neu-soft border border-white/5">
            <HugeiconsIcon
              icon={Location01Icon}
              size={22}
              color="currentColor"
              strokeWidth={1.6}
              className="hugeicon"
            />
          </div>
          <div className="min-w-0 flex-1 space-y-1 overflow-hidden">
            <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
              Location
            </p>
            <p className="text-sm text-gray-100">Lagos, Nigeria</p>
          </div>
        </div>

        {/* Social */}
        <div className="flex items-center gap-4 pt-2 flex-wrap justify-center">
          <a
            href="https://github.com/prestigetech02/"
            target="_blank"
            rel="noopener noreferrer"
            data-torch="button"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <HugeiconsIcon
              icon={GithubIcon}
              size={20}
              color="currentColor"
              strokeWidth={1.5}
              className="hugeicon"
            />
          </a>
          <a
            href="mailto:mujaideentaiwo01@gmail.com"
            data-torch="button"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <HugeiconsIcon
              icon={Mail01Icon}
              size={20}
              color="currentColor"
              strokeWidth={1.5}
              className="hugeicon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mujaideen-taiwo/"
            target="_blank"
            rel="noopener noreferrer"
            data-torch="button"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <HugeiconsIcon
              icon={Linkedin01Icon}
              size={20}
              color="currentColor"
              strokeWidth={1.5}
              className="hugeicon"
            />
          </a>
          <a
            href="https://x.com/Ayohimself2"
            target="_blank"
            rel="noopener noreferrer"
            data-torch="button"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="X (Twitter)"
          >
            <HugeiconsIcon
              icon={NewTwitterIcon}
              size={20}
              color="currentColor"
              strokeWidth={1.5}
              className="hugeicon"
            />
          </a>
          <a
            href="https://wa.me/2349128868892"
            target="_blank"
            rel="noopener noreferrer"
            data-torch="button"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="WhatsApp"
          >
            <HugeiconsIcon
              icon={Message01Icon}
              size={20}
              color="currentColor"
              strokeWidth={1.5}
              className="hugeicon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
