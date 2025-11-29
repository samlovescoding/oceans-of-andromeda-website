"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CURSOR_GAP_X = 0;
const CURSOR_GAP_Y = 0;

export default function Curtains() {
  const [isHidden, setIsHidden] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(function (event: MouseEvent) {
    if (cursorRef.current) {
      const xPosition = event.clientX + CURSOR_GAP_X;
      const yPosition = event.clientY + CURSOR_GAP_Y;
      cursorRef.current.style.left = `${xPosition}px`;
      cursorRef.current.style.top = `${yPosition}px`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  function handleClick() {
    setIsHidden(true);
  }

  if (isHidden) return null;

  return (
    <>
      <div
        id="curtains"
        className="bg-black z-10 fixed top-0 left-0 h-screen w-screen flex flex-col justify-center font-serif text-4xl gap-17 text-left cursor-none"
        onClick={handleClick}
      >
        <div className="w-4xl mx-auto">
          For millions of years, we hunted in green twilight. Our eyes evolved
          to read every shade of the canopy to spot movement, to find shelter,
          to survive the long watch.
        </div>
        <div className="w-4xl mx-auto">This is that wavelength.</div>
        <div className="w-4xl mx-auto">
          Not engineered, but recognized. It feels like home after midnight,
          three hours deep, when the code finally flows.
        </div>
      </div>
      <div
        ref={cursorRef}
        className="absolute z-20 cursor-none"
        onClick={handleClick}
      >
        Click to Continue
      </div>
    </>
  );
}
