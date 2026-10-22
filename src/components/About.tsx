import { useRef, useEffect, useState } from 'react';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function About() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="about" className="py-24 md:py-32 bg-espresso" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left */}
          <div
            className={`transition-all duration-600 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="font-mono text-xs tracking-[0.2em] text-soft-amber uppercase mb-4">
              About
            </p>
            <h2 className="font-serif text-heading-xl text-warm-cream mb-8">
              Engineering meets{' '}
              <span className="italic text-soft-amber">execution</span>
            </h2>

            {/* Two identity pillars */}
            <div className="space-y-4">
              <div className="p-5 bg-dark-roast border border-muted-mocha/15 rounded-xl">
                <p className="font-mono text-xs tracking-widest text-cool-silver uppercase mb-2">
                  Engineering
                </p>
                <p className="font-sans text-sm text-muted-mocha leading-[1.7]">
                  DevOps, cloud infrastructure, automation, AI applications, testing, and
                  understanding systems at a technical depth.
                </p>
              </div>
              <div className="p-5 bg-dark-roast border border-muted-mocha/15 rounded-xl">
                <p className="font-mono text-xs tracking-widest text-soft-amber uppercase mb-2">
                  Project Execution
                </p>
                <p className="font-sans text-sm text-muted-mocha leading-[1.7]">
                  Planning, task coordination, stakeholder communication, documentation, and
                  delivering outcomes across cross-functional work.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            className={`transition-all duration-600 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="space-y-5 font-sans text-base text-muted-mocha leading-[1.8]">
              <p>
                I am a Computer Science Engineering student with a strong interest in how systems
                are designed, built, and delivered. My focus sits at the crossroads of technical
                implementation and thoughtful project execution — I care as much about how work
                gets done as what gets built.
              </p>
              <p>
                On the engineering side, I have been exploring DevOps practices, cloud infrastructure,
                and AI-powered automation. I enjoy working close to infrastructure — understanding
                deployment pipelines, containerisation, and how automated systems behave under
                real conditions.
              </p>
              <p>
                On the execution side, I have worked on coordination at CCI India, where I
                supported cross-functional teams with task tracking, documentation, and keeping
                deliverables organised. I find that combining technical fluency with coordination
                skills makes me more effective in both directions.
              </p>
              <p>
                I am a continuous learner, drawn to building things that are both functional and
                well-thought-out. I believe good engineering and good execution are complementary —
                neither replaces the other.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { value: 'CS', label: 'Engineering' },
                { value: '5+', label: 'Projects' },
                { value: '2', label: 'Domains' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-dark-roast border border-muted-mocha/15 rounded-xl text-center"
                >
                  <p className="font-serif text-3xl text-soft-amber mb-1">{stat.value}</p>
                  <p className="font-mono text-[11px] text-muted-mocha uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
