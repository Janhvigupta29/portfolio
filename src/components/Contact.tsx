import { useRef, useEffect, useState } from 'react';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import config from '@/data/config';

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

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    href: `mailto:${config.email}`,
    display: config.email,
    external: false,
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    href: config.linkedin,
    display: 'janhviguptadevops',
    external: true,
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    href: config.github,
    display: 'github.com',
    external: true,
  },
];

export default function Contact() {
  const { ref, visible } = useInView(0.05);

  return (
    <section id="contact" className="py-24 md:py-32 bg-espresso" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top border */}
        <div className="h-px bg-muted-mocha/15 mb-16" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div
            className={`transition-all duration-600 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="font-mono text-xs tracking-[0.2em] text-soft-amber uppercase mb-4">
              Contact
            </p>
            <h2 className="font-serif text-heading-xl text-warm-cream mb-6">
              Let's build something{' '}
              <span className="italic text-soft-amber">meaningful</span>
            </h2>
            <p className="font-sans text-base text-muted-mocha leading-[1.7] max-w-md">
              Whether it's a project collaboration, an opportunity in DevOps or project execution,
              or just a conversation about systems and engineering — I'd love to connect.
            </p>
          </div>

          {/* Right — links */}
          <div
            className={`transition-all duration-600 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between p-5 bg-dark-roast border border-muted-mocha/15 rounded-xl hover:border-soft-amber/40 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-amber"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-espresso border border-muted-mocha/20 flex items-center justify-center text-muted-mocha group-hover:text-soft-amber transition-colors">
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-muted-mocha/60 uppercase tracking-wider mb-0.5">
                        {link.label}
                      </p>
                      <p className="font-sans text-sm text-warm-cream">{link.display}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-mocha group-hover:text-soft-amber group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
