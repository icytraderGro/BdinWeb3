import React from 'react';

interface ServiceButtonProps {
  name: string;
  icon: React.ReactNode;
  isSelected: boolean;
  isComingSoon?: boolean;
  onClick: () => void;
}

export function ServiceButton({ name, icon, isSelected, isComingSoon, onClick }: ServiceButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isComingSoon}
      className={`
        px-6 py-4 rounded-xl transition-all duration-300 flex flex-col items-center gap-2
        ${isSelected 
          ? 'bg-emerald-500 text-white shadow-lg scale-105 ring-4 ring-emerald-500/20' 
          : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
        }
        ${isComingSoon ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
      `}
    >
      <span className="mb-1">{icon}</span>
      <span className="font-medium">{name}</span>
      {isComingSoon && <span className="text-xs opacity-75">(Coming Soon)</span>}
    </button>
  );
}