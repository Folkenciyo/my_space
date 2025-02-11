"use client";

import { useEffect } from "react";

interface CardProps {
  project: string;
  description: string;
  url_git: string;
  url_web: string;
  tags: { color: string; text: string }[];
}

const colorClasses: { [key: string]: string } = {
    yellow: "bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm",
    green: "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm",
    blue: "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm",
    red: "bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm",
    teal: "bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm",
    purple: "bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm",
    pink: "bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm",
    indigo: "bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm",
    gray: "bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm",
    orange: "bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm",
    cyan: "bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm",
    lime: "bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-sm",
    amber: "bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm",
    rose: "bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm",
  };

interface CardProps {
  project: string;
  image: string;
  description: string;
  url_git: string;
  url_web: string;
  tags: { color: string; text: string }[];
}

export function Card({
  project,
  image,
  description,
  url_git,
  url_web,
  tags,
}: CardProps) {
  useEffect(() => {
    const handleMouseMove = (ev: MouseEvent) => {
      const allCards = document.querySelectorAll(".card");

      allCards.forEach((e) => {
        const blob = e.querySelector(".blob");
        const fblob = e.querySelector(".fakeblob");

        if (blob && fblob) {
          const rec = fblob.getBoundingClientRect();
          blob.animate(
            [
              {
                transform: `translate(${
                  ev.clientX - rec.left - rec.width / 2
                }px,${ev.clientY - rec.top - rec.height / 2}px)`,
              },
            ],
            {
              duration: 300,
              fill: "forwards",
            }
          );
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); /*  */

  return (
    <div className="card">
      <div className="inner bg-white-500/10 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
        {/* overflow-hidden transform transition-transform hover:scale-105 */}
        <img
          src={image}
          alt="Proyecto 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-cyan-950 text-2xl font-bold mb-2">{project}</h3>
          <p className="text-cyan-950 mb-4">{description}</p>
          <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm ${
                  colorClasses[tag.color] || "bg-gray-100 text-gray-800"
                }`}
              >
                {tag.text}
              </span>
            ))}
          </div>
          <div className="flex flex-row justify-center items-center space-x-4">
            <a
              href={url_git}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Ver en GitHub
            </a>
            {url_web && (
                <a
                    href={url_web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                    Ir a la página
                </a>
            )}
          </div>
        </div>
      </div>
      <div className="blob"></div>
      <div className="fakeblob"></div>
    </div>
  );
}
