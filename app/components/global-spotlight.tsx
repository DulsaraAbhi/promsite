"use client";

import { useEffect, useState } from "react";

export function GlobalSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      className="global-spotlight" 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0
      }}
    />
  );
} 