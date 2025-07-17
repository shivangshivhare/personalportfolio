import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate text in
    tl.fromTo('.loading-text',
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out' }
    );

    // Slide and fade out screen
    setTimeout(() => {
      tl.to('.loading-screen', {
        y: '-100%',
        duration: 1.6,
        ease: 'power4.inOut',
        onComplete: () => setIsLoading(false)
      });
    }, 2500);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen fixed inset-0 z-[9999] bg-gradient-radial from-black via-zinc-900 to-black flex items-center justify-center overflow-hidden">
      <div className="loading-text relative text-white text-4xl md:text-5xl font-extrabold tracking-widest animate-pulse-soft">
        SHIVANG RAJ SHIVHARE
        <div className="absolute left-1/2 top-full -translate-x-1/2 mt-4 w-16 h-1 bg-white rounded-full animate-glow"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
