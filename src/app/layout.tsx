import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MouseTorch from "@/components/MouseTorch";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://taiwo.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taiwo – Full‑Stack Engineer",
    template: "%s | Taiwo",
  },
  description:
    "Full‑stack engineer building scalable web and mobile products with React, Flutter, Node.js, Laravel, and MySQL. Lagos, Nigeria.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Flutter",
    "Node.js",
    "Laravel",
    "MySQL",
    "Lagos",
    "Nigeria",
    "Web Development",
    "Mobile Apps",
  ],
  authors: [{ name: "Taiwo", url: siteUrl }],
  creator: "Taiwo",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Taiwo – Full‑Stack Engineer",
    title: "Taiwo – Full‑Stack Engineer",
    description:
      "Full‑stack engineer building scalable web and mobile products with React, Flutter, Node.js, Laravel, and MySQL.",
    images: [
      {
        url: "/mypics.png",
        width: 1200,
        height: 630,
        alt: "Taiwo – Full‑Stack Engineer",
      },
    ],
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taiwo – Full‑Stack Engineer",
    description:
      "Full‑stack engineer building scalable web and mobile products with React, Flutter, Node.js, Laravel, and MySQL.",
    images: ["/mypics.png"],
  },
  icons: {
    icon: "/mypics.png",
    apple: "/mypics.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} text-white antialiased`}>
        <MouseTorch />
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-[minmax(200px,20%)_1fr] gap-4 p-4 lg:gap-6 lg:p-6">
          <aside className="glass-panel self-start sticky top-4 lg:top-6">
            <Sidebar />
          </aside>
          <main className="glass-panel">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
