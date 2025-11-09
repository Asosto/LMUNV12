"use client";

import React, { useEffect, useState } from "react";

const ComingSoon: React.FC = () => {
  // Target date: March 7, 2026 at 9:00 AM
  const launchDate = new Date("2026-03-07T09:00:00");

  const calculateTimeLeft = () => {
    const diff = +launchDate - +new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D47A1] to-[#1976D2] opacity-95" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          WE’RE LAUNCHING SOON
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          Lincoln Model United Nations returns <strong>March 7, 2026</strong>.  
          Prepare for diplomacy, leadership, and global dialogue.
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 w-24"
            >
              <span className="block text-3xl font-bold">{value}</span>
              <span className="block text-xs uppercase tracking-wide text-blue-200">
                {label}
              </span>
            </div>
          ))}
        </div>

  
      </div>

      {/* Footer text */}
      <div className="absolute bottom-6 text-blue-200 text-sm">
        © {new Date().getFullYear()} Lincoln Model United Nations
      </div>
    </main>
  );
};

export default ComingSoon;
