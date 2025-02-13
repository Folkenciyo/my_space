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

    const handleMouseLeave = () => {
      document.body.style.cursor = "default"; // Restaurar puntero al salir
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
     {/*  <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-transparent border-4 border-cyan-400 rounded-full pointer-events-none"
        style={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.6, 0.8] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="28px"
        height="28px"
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate(${mousePosition.x }px, ${mousePosition.y}px)`,
        }}
      >
        <linearGradient
          id="SVGID_1_"
          x1="31.062"
          x2="12.559"
          y1="16.107"
          y2="34.609"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#60e8fe" />
          <stop offset=".033" stopColor="#6ae9fe" />
          <stop offset=".197" stopColor="#97f0fe" />
          <stop offset=".362" stopColor="#bdf5ff" />
          <stop offset=".525" stopColor="#dafaff" />
          <stop offset=".687" stopColor="#eefdff" />
          <stop offset=".846" stopColor="#fbfeff" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <path
          fill="url(#SVGID_1_)"
          d="M38.705,23.752L19.416,5.721c-0.609-0.57-6.313-0.634-6.313-0.634L12.5,34.55h5.739l2.681-1.786l4.11,9.575	c0,0,5.924,0.349,6.431,0.129l4.147-2.029c0.507-0.22,0.739-0.809,0.519-1.316L30.58,26.35l7.557-0.874	C38.984,25.378,39.328,24.333,38.705,23.752z"
        />
        <line
          x1="12.5"
          x2="12.5"
          y1="4.5"
          y2="35.5"
          fill="none"
          stroke="#10cfe3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <line
          x1="21.104"
          x2="25.535"
          y1="33.296"
          y2="43.5"
          fill="none"
          stroke="#10cfe3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <polyline
          fill="none"
          stroke="#10cfe3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          points="33.043,32.763 30.603,27.145 40.5,26 17.5,4.5 17.5,13.298"
        />
        <polyline
          fill="none"
          stroke="#10cfe3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          points="17.5,19.298 17.5,35.5 25.062,29.448 31.163,43.5 36.667,41.109 34.714,36.612"
        />
        <line
          x1="17.5"
          x2="12.5"
          y1="4.5"
          y2="4.5"
          fill="none"
          stroke="#10cfe3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <line
          x1="17.5"
          x2="12.5"
          y1="35.5"
          y2="35.5"
          fill="none"
          stroke="#10cfe3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <line
          x1="30.879"
          x2="25.879"
          y1="43.5"
          y2="43.5"
          fill="none"
          stroke="#10cfe3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
      </svg>
    </>
  );
}
