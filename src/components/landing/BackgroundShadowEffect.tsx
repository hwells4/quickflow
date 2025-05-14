import React from "react";

interface BackgroundShadowEffectProps {
  children: React.ReactNode;
  className?: string;
}

export const BackgroundShadowEffect: React.FC<BackgroundShadowEffectProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {/* Gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)] via-purple-600 to-blue-700 opacity-90"
        aria-hidden="true"
      />
      
      {/* Animated subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTJjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTEyIDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bS0xMiAxMmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTEyIDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAgMTJjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTEyIDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bS0xMi0xMmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTEyIDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00Ii8+PC9nPjwvZz48L3N2Zz4=')]"
          style={{ animation: "move-background 20s linear infinite" }}
        />
      </div>

      {/* Glassmorphism effect container */}
      <div className="relative backdrop-blur-[2px] p-6 md:p-8 h-full">
        {/* Frosted glass overlay */}
        <div 
          className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"
          aria-hidden="true"
        />
        
        {/* Content container */}
        <div className="relative z-10">
          {children}
        </div>
      </div>

      {/* Add global styles for animation */}
      <style jsx global>{`
        @keyframes move-background {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundShadowEffect;
