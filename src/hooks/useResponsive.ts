// hooks/useResponsive.ts
import { useState, useEffect } from "react";

export default function useResponsive(breakpoint: number = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return { isDesktop };
}
