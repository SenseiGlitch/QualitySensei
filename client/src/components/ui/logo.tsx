import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export function Logo({ size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6 text-base",
    md: "w-8 h-8 text-lg",
    lg: "w-10 h-10 text-xl",
  };

  return (
    <div className="flex items-center space-x-2">
      <div className={`relative ${sizeClasses[size]} rounded bg-gradient-to-r from-purple-900 via-purple-700 to-purple-800 flex items-center justify-center text-white font-bold`}>
        <span className="absolute">QS</span>
        <div className="absolute inset-0 bg-white dark:bg-gray-900 mix-blend-lighten opacity-20 rounded"></div>
      </div>
      <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-700 to-purple-800">
        QualitySensei
      </span>
    </div>
  );
}
