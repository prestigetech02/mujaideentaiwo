"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type TorchVariant = "default" | "card" | "button";

const RADIUS: Record<TorchVariant, number> = {
  default: 140,
  card: 200,
  button: 44,
};

const OPACITY: Record<TorchVariant, number> = {
  default: 0.16,
  card: 0.2,
  button: 0.32,
};

const TORCH_ON_CLASS = "torch-on";

export default function MouseTorch() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [variant, setVariant] = useState<TorchVariant>("default");
  const [mounted, setMounted] = useState(false);
  const prevTorchElRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMove = useCallback((e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
    const target = e.target as HTMLElement;
    const torchEl = target?.closest?.("[data-torch]") as HTMLElement | null;
    const value = torchEl?.getAttribute("data-torch");

    if (value === "button" && torchEl) {
      setVariant("button");
      prevTorchElRef.current?.classList.remove(TORCH_ON_CLASS);
      torchEl.classList.add(TORCH_ON_CLASS);
      prevTorchElRef.current = torchEl;
    } else {
      setVariant(value === "card" ? "card" : "default");
      prevTorchElRef.current?.classList.remove(TORCH_ON_CLASS);
      prevTorchElRef.current = null;
    }
  }, []);

  const handleLeave = useCallback(() => {
    setPos((p) => ({ ...p, x: -1000, y: -1000 }));
    setVariant("default");
    prevTorchElRef.current?.classList.remove(TORCH_ON_CLASS);
    prevTorchElRef.current = null;
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [mounted, handleMove, handleLeave]);

  if (!mounted) return null;

  const r = RADIUS[variant];
  const opacity = OPACITY[variant];

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden
    >
      <div
        className="absolute transition-[width,height,opacity] duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          width: r * 2,
          height: r * 2,
          marginLeft: -r,
          marginTop: -r,
          background: `radial-gradient(circle, rgba(34, 197, 94, ${opacity}) 0%, rgba(34, 197, 94, ${opacity * 0.5}) 40%, transparent 72%)`,
          filter: variant === "button" ? "blur(6px)" : "blur(10px)",
        }}
      />
    </div>
  );
}
