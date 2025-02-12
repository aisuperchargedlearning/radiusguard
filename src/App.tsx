import React, { useEffect, useRef } from 'react';
import { ChevronDown, Flame, Shield, Wind, Home, PenTool, Book } from 'lucide-react';
import Section from './components/Section';
import { sections } from './data/sections';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const icons = {
    1: Shield,
    2: Flame,
    3: Wind,
    4: Home,
    5: PenTool,
  };

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen flex items-center justify-center snap-start bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://ik.imagekit.io/a7tech/Open%20Source%20Dwelling/Firestorm.jpg?tr=w-1200,h-800,f-auto")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Lessons Learned: Building a Fire-Hardened Community
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
            Recent events and analyses of wildfire impacts have highlighted several key strategies and principles
            to reduce the devastation caused by wind-driven embers and extreme fire behavior. Below is a concise
            overview of the most important lessons learned, focusing on how well-planned infrastructure and
            design features can protect a community.
          </p>
          <ChevronDown className="w-8 h-8 md:w-12 md:h-12 text-white mx-auto animate-bounce" />
        </div>
      </div>

      {/* Content Sections */}
      {sections.map((section) => (
        <Section
          key={section.number}
          {...section}
          Icon={icons[section.number as keyof typeof icons]}
        />
      ))}

      {/* Conclusion Section */}
      <div
        className="relative h-screen flex items-center justify-center snap-start bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://ik.imagekit.io/a7tech/Open%20Source%20Dwelling/nicehousewithprotection.jpg?tr=w-1200,h-800,f-auto")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <Book className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-6 md:mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">In Conclusion</h2>
          <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            A community that combines fire-hardened structures with careful landscaping, strategically placed
            ember traps, and proactive policies can greatly reduce the threat from wildfires. By minimizing
            local fuel sources, preventing embers from penetrating homes, and maintaining a culture of fire
            safety, modern developments stand a far better chance of withstanding the onslaught of a wind-driven
            wildfire. While no strategy offers a 100% guarantee, these lessons learned show that a thoughtful,
            multipronged approach can dramatically limit catastrophic losses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;