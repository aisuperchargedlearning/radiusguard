import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SectionProps {
  number: string;
  title: string;
  content: string;
  keyTakeaway: string;
  backgroundImage: string;
  Icon: LucideIcon;
}

const Section: React.FC<SectionProps> = ({
  number,
  title,
  content,
  keyTakeaway,
  backgroundImage,
  Icon,
}) => {
  return (
    <div
      className="relative h-screen flex items-center justify-center snap-start"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-8xl font-bold text-white/20">{number}</span>
          <Icon className="w-16 h-16 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{title}</h2>
        <p className="text-xl text-gray-200 mb-8 leading-relaxed">{content}</p>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Key Takeaway</h3>
          <p className="text-gray-200">{keyTakeaway}</p>
        </div>
      </div>
    </div>
  );
}

export default Section;