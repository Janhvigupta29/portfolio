import { useRef, useEffect, useState } from 'react';
import { Search, Map, Hammer, FlaskConical, Send } from 'lucide-react';

const steps = [
  {
    number: '01',
    label: 'Understand',
    icon: <Search size={20} />,
    description:
      'Before writing a single line or creating a task, I spend time understanding the problem clearly — what is being built, for whom, and why it matters. This shapes everything that follows.',
  },
  {
    number: '02',
    label: 'Plan',
    icon: <Map size={20} />,
    description:
      'I map out the work: identify dependencies, define scope, break things into tasks, and anticipate blockers. Good planning makes building faster, not slower.',
  },
  {
    number: '03',
    label: 'Build',
    icon: <Hammer size={20} />,
    description:
      'Implementation with intention — writing code or configuring infrastructure with the overall system in mind. I care about clarity and correctness, not just getting it to run.',
  },
  {
    number: '04',
    label: 'Test',
    icon: <FlaskConical size={20} />,
    description:
      'I validate what I build. Testing is not a final step — it is woven into the process to catch issues early and build confidence in the output.',
  },
  {
    number: '05',
    label: 'Deliver',
    icon: <Send size={20} />,
    description:
      'Delivering means handing off something complete — documented, reliable, and understood by the people who will use or maintain it. The work is not done until it lands properly.',
  },
];

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

export default function HowIWork() {
  const { ref, visible } = useInView(0.05);

  return (
    <section id="how-i-work" className="py-24 md:py-32 bg-dark-roast" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-600 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-mono text-xs tracking-[0.2em] text-soft-amber uppercase mb-4">
            How I Work
          </p>
          <h2 className="font-serif text-heading-xl text-warm-cream max-w-2xl">
            A process for going from{' '}
            <span className="italic text-soft-amber">ambiguity to outcome</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-muted-mocha/20" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, i) => (
              <div
                key={step.label}
                className={`relative transition-all duration-600 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step node */}
                <div className="flex md:flex-col items-start md:items-center gap-5 md:gap-0">
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-full bg-espresso border border-soft-amber/40 flex items-center justify-center text-soft-amber z-10 relative md:mx-auto">
                      {step.icon}
                    </div>
                  </div>

                  <div className="md:mt-6 md:text-center">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-muted-mocha uppercase mb-1">
                      {step.number}
                    </p>
                    <h3 className="font-serif text-lg text-warm-cream mb-3">
                      {step.label}
                    </h3>
                    <p className="font-sans text-sm text-muted-mocha leading-[1.7]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div
          className={`mt-16 pt-10 border-t border-muted-mocha/15 transition-all duration-600 delay-500 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="font-sans text-sm text-muted-mocha max-w-2xl leading-[1.8]">
            This is not a rigid formula — it is an orientation. Real work is iterative, and each step
            informs the others. What stays consistent is the habit of thinking before acting, and
            communicating throughout.
          </p>
        </div>
      </div>
    </section>
  );
}
