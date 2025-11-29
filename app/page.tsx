"use client";

import Curtains from "@/components/curtains";
import LightRays from "@/components/light-rays-unicorn";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

export const dynamic = "force-static";
export const revalidate = 86400;

function interpolate(value: number, from: number, to: number) {
  const distance = (value - from) / to;
  if (distance >= 1) return 1;
  if (value <= 0) return 0;
  return distance;
}

function clamp(value: number, min: number, max: number) {
  if (value > max) return max;
  if (value < min) return min;
  return value;
}

export default function Home() {
  const logoRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!logoRef.current) return;

    const scrollPosition = interpolate(window.scrollY, 0, 200);

    const scale = clamp((1 - scrollPosition) * 2, 1, 2);
    const gap = clamp(Math.floor((1 - scrollPosition) * 200), 100, 200);

    const margin = `${gap}px`;
    const transform = `scale(${scale})`;

    logoRef.current.style.marginTop = margin;
    logoRef.current.style.marginBottom = margin;
    logoRef.current.style.transform = transform;
  }, []);

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/screenshot.webp"
          fetchPriority="high"
          as="image"
        ></link>
      </Head>
      <Curtains />
      <main className="flex flex-col min-h-screen">
        <LightRays />

        <div className="flex lg:scale-100 scale-40">
          <div
            id="logo"
            ref={logoRef}
            className="flex m-auto flex-col my-100"
            style={{
              marginTop: "200px",
              marginBottom: "200px",
              transform: "scale(2)",
            }}
          >
            <span className="font-sans text-7xl tracking-[-4px] ml-[104px] bg-clip-text text-transparent bg-linear-to-b from-[#CDFDF6] to-[#00E8C6]">
              Oceans of
            </span>
            <span className="font-serif text-9xl italic mt-[-16px] bg-clip-text text-transparent bg-linear-to-b from-[#00E8C6] to-[#12C382] text-shadow-glow px-2">
              Andromeda
            </span>
          </div>
        </div>
        <div className="flex justify-center mb-24">
          <Image
            src="/screenshot.webp"
            width={3680}
            height={2382}
            alt="Screenshot of Cursor with Oceans of Andromeda Theme on MacOS"
            className="lg:w-3/5 w-full"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="flex gap-12 justify-center mb-24 mt-0 px-32 md:flex-col lg:flex-row">
          <CardLink href="https://marketplace.visualstudio.com/items?itemName=samlovescoding.oceans-of-andromeda">
            VS Code
          </CardLink>
          <CardLink href="https://open-vsx.org/extension/samlovescoding/oceans-of-andromeda">
            Cursor
          </CardLink>
          <CardLink href="https://github.com/samlovescoding/oceans-of-andromeda/releases/latest">
            Download
          </CardLink>
          <CardLink href="https://github.com/samlovescoding/oceans-of-andromeda/">
            Source Code
          </CardLink>
        </div>

        <footer className="bg-[#060B0C] border-t border-[#051412] flex flex-col py-16 gap-12 items-center mt-24 px-8">
          <div className="font-serif text-5xl text-[#2FAE9D] ">
            Forged for the deep work. Yours to use. Yours to share.
          </div>
          <div className="flex gap-8 text-[#245E56] flex-col lg:flex-row">
            <div className="flex gap-1">
              <span>Licensed under</span>
              <span className="underline">MIT License</span>
            </div>
            <div className="">&copy;2025 Oceans of Andromeda</div>
          </div>
        </footer>
      </main>
    </>
  );
}

function CardLink({
  children,
  href,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="border  border-[#182E32] bg-[#0E1819] uppercase p-8 rounded-lg min-w-2xs flex justify-center text-[#245E56] cursor-pointer hover:text-[#12C382] hover:border-[#12C382] hover:bg-[#132123]"
      target="_blank"
    >
      {children}
    </a>
  );
}
