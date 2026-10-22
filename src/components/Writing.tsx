import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, PenLine } from 'lucide-react';
import articles from '@/data/articles';
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

export default function Writing() {
  const { ref, visible } = useInView(0.05);

  return (
    <section id="writing" className="py-24 md:py-32 bg-dark-roast" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left */}
          <div
            className={`transition-all duration-600 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="font-mono text-xs tracking-[0.2em] text-soft-amber uppercase mb-4">
              Writing
            </p>
            <h2 className="font-serif text-heading-lg text-warm-cream mb-5">
              Thinking out loud
            </h2>
            <p className="font-sans text-sm text-muted-mocha leading-[1.7] mb-8">
              I write on Hashnode about what I am learning — DevOps workflows, cloud patterns,
              automation, and the thinking behind systems. Writing helps me learn more deliberately.
            </p>
            <a
              href={config.hashnode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-muted-mocha hover:text-soft-amber transition-colors duration-200 border-b border-muted-mocha/30 hover:border-soft-amber pb-0.5"
            >
              All articles on Hashnode <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Right — articles */}
          <div
            className={`space-y-4 transition-all duration-600 delay-150 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {articles.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 p-5 bg-espresso border border-muted-mocha/15 rounded-xl hover:border-soft-amber/40 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-amber"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-dark-roast border border-muted-mocha/20 flex items-center justify-center text-muted-mocha group-hover:text-soft-amber transition-colors">
                  <PenLine size={15} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="font-sans text-sm font-medium text-warm-cream group-hover:text-soft-amber transition-colors">
                      {article.title}
                    </h3>
                    <ArrowUpRight
                      size={14}
                      className="flex-shrink-0 text-muted-mocha group-hover:text-soft-amber group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-0.5"
                    />
                  </div>
                  <p className="font-sans text-xs text-muted-mocha leading-[1.6] mb-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-muted-mocha/60">
                      {article.date}
                    </span>
                    <div className="flex gap-1.5">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] text-muted-mocha/60 bg-dark-roast px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* Placeholder note */}
            <p className="font-mono text-[11px] text-muted-mocha/40 text-center pt-2">
              Update article data in src/data/articles.ts with your real Hashnode articles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
