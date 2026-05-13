// src/components/GlassCard.tsx
import React from 'react';

const GlassCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/10 transition-all duration-300">
      {children}
    </div>
  );
};

export default GlassCard;
