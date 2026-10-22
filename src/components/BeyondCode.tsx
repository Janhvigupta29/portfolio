import { useRef, useEffect, useState } from 'react';
import { Star, BookOpen, Telescope, Users } from 'lucide-react';

const interests = [
  {
    icon: <Telescope size={20} />,
    title: 'Astronomy & Space',
    description:
      'A long-standing fascination with space — the scale, the physics, and the questions that remain open. A reminder that curiosity extends beyond what we can build today.',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'Writing & Knowledge Sharing',
    description:
      'I write on Hashnode about things I am learning — DevOps, cloud, and the intersection of engineering and systems thinking. Writing clarifies ideas.',
  },
  {
    icon: <Users size={20} />,
    title: 'Technical Community',
    description:
      'Engaging with communities around DevOps, cloud, and AI — following discussions, sharing learnings, and staying close to where the field is moving.',
  },
  {
    icon: <Star size={20} />,
    title: 'Continuous Learning',
    description:
      'CS is broad, and I deliberately explore adjacent areas — from infrastructure to AI to project management. Learning across domains is what makes the combination interesting.',
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

export default function BeyondCode() {
  const { ref, visible } = useInView(0.05);

  return (
    <section id="beyond" className="py-24 md:py-32 bg-espresso" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          className={`mb-16 transition-all duration-600 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-mono text-xs tracking-[0.2em] text-soft-amber uppercase mb-4">
            Beyond Code
          </p>
          <h2 className="font-serif text-heading-xl text-warm-cream max-w-xl">
            What keeps me curious
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {interests.map((item, i) => (
            <div
              key={item.title}
              className={`p-6 bg-dark-roast border border-muted-mocha/15 rounded-xl hover:border-soft-amber/30 transition-all duration-300 hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-espresso border border-soft-amber/30 flex items-center justify-center text-soft-amber mb-4">
                {item.icon}
              </div>
              <h3 className="font-serif text-base text-warm-cream mb-2">{item.title}</h3>
              <p className="font-sans text-sm text-muted-mocha leading-[1.7]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
