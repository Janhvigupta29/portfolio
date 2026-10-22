import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import config from '@/data/config';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-espresso pt-16"
      aria-label="Hero"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,240,217,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,217,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Warm gradient accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[120px] bg-soft-amber pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full py-20 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center min-h-[calc(100vh-4rem)]">
          {/* Left — text */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Identity labels */}
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs tracking-[0.2em] text-soft-amber uppercase">
                Engineering
              </span>
              <span className="text-muted-mocha text-xs">/</span>
              <span className="font-mono text-xs tracking-[0.2em] text-cool-silver uppercase">
                Project Execution
              </span>
            </div>

            {/* Name */}
            <h1 className="font-serif text-display text-warm-cream mb-6 leading-[1.02]">
              Janhvi
              <br />
              <span className="italic text-soft-amber">Gupta</span>
            </h1>

            {/* Tagline */}
            <p className="font-serif text-heading-lg text-muted-mocha mb-6 max-w-md leading-relaxed">
              "{config.tagline}"
            </p>

            {/* Bio */}
            <p className="font-sans text-base text-muted-mocha leading-[1.7] max-w-lg mb-10">
              {config.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToWork}
                className="px-6 py-3 bg-soft-amber text-espresso font-sans font-medium text-sm rounded hover:bg-amber-300 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-amber"
              >
                Explore My Work
              </button>
              <button
                onClick={scrollToAbout}
                className="px-6 py-3 border border-muted-mocha/40 text-warm-cream font-sans font-medium text-sm rounded hover:border-soft-amber hover:text-soft-amber transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-amber"
              >
                About Me
              </button>
            </div>
          </div>

          {/* Right — photo */}
          <div
            className={`flex justify-center md:justify-end transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              {/* Amber border accent */}
              <div className="absolute -inset-px rounded-2xl border border-soft-amber/30" />
              <div className="absolute -inset-3 rounded-3xl border border-muted-mocha/10" />

              <img
                src={config.photo}
                alt="Janhvi Gupta"
                loading="eager"
                className="relative w-72 md:w-80 lg:w-96 aspect-[3/4] object-cover object-top rounded-2xl"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const placeholder = target.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />

              {/* Fallback placeholder — hidden unless image fails to load */}
              <div
                className="hidden w-72 md:w-80 lg:w-96 aspect-[3/4] rounded-2xl bg-dark-roast items-center justify-center text-center p-8"
                aria-hidden="true"
              >
                <p className="font-mono text-xs text-muted-mocha leading-relaxed">
                  Place your photo at
                  <br />
                  <span className="text-soft-amber">public/janhvi.jpg</span>
                </p>
              </div>

              {/* Floating tag */}
              <div className="absolute -bottom-4 -left-4 bg-dark-roast border border-muted-mocha/20 rounded-lg px-4 py-2 shadow-xl">
                <span className="font-mono text-xs text-soft-amber tracking-wider uppercase">
                  CS Engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToWork}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-mocha hover:text-soft-amber transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
