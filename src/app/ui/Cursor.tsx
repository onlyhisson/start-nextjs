"use client";

import { useEffect, useState } from "react";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mMove = (e: MouseEvent) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    const addEventListener = () => {
      document.addEventListener("mousemove", mMove);
    };

    const removeEventListener = () => {
      document.removeEventListener("mousemove", mMove);
    };

    addEventListener();
    return () => removeEventListener();
  }, []);

  return (
    <div
      className={
        "pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      }
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};
