"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MouseEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      document.body.style.cursor = "none"; // Ocultar puntero
    };

    /*     const handleMouseLeave = () => {
        document.body.style.cursor = "default"; // Restaurar puntero al salir
      }; */

    window.addEventListener("mousemove", handleMouseMove);
    /* window.addEventListener("mouseleave", handleMouseLeave); */

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      /* window.removeEventListener("mouseleave", handleMouseLeave); */
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-transparent border border-blue-400 rounded-full pointer-events-none"
      style={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.6, 0.8] }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
