import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, GitBranch, Layers, Cpu, Users } from 'lucide-react';
import projects from '@/data/projects';

const categoryIcon: Record<string, React.ReactNode> = {
  engineering: <Cpu size={14} />,
  execution: <Users size={14} />,
  both: <Layers size={14} />,
};

const statusLabel: Record<string, string> = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  concept: 'Concept',
};

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

export default function SelectedWork() {
  const { ref, visible } = useInView(0.05);
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="py-24 md:py-32 bg-espresso" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-600 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-mono text-xs tracking-[0.2em] text-soft-amber uppercase mb-4">
            Selected Work
          </p>
          <h2 className="font-serif text-heading-xl text-warm-cream max-w-2xl">
            Projects that bridge engineering and execution
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <div
              key={project.id}
              className={`transition-all duration-600 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Link
                to={`/project/${project.id}`}
                className="group block h-full bg-dark-roast border border-muted-mocha/15 rounded-xl p-7 hover:border-soft-amber/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-espresso/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-amber"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 font-mono text-xs text-muted-mocha tracking-wide uppercase px-2.5 py-1 bg-espresso rounded border border-muted-mocha/20">
                      {categoryIcon[project.categoryType]}
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[10px] tracking-widest uppercase ${
                        project.status === 'completed'
                          ? 'text-cool-silver'
                          : project.status === 'in-progress'
                          ? 'text-soft-amber'
                          : 'text-muted-mocha'
                      }`}
                    >
                      {statusLabel[project.status]}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-mocha group-hover:text-soft-amber group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-warm-cream mb-3 group-hover:text-soft-amber transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-muted-mocha leading-[1.7] mb-6">
                  {project.shortDescription}
                </p>

                {/* Divider */}
                <div className="h-px bg-muted-mocha/15 mb-5" />

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-muted-mocha bg-espresso/60 border border-muted-mocha/15 px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="font-mono text-[11px] text-muted-mocha/60 px-1 py-1">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-sans text-sm text-muted-mocha hover:text-soft-amber transition-colors duration-200 border-b border-muted-mocha/30 hover:border-soft-amber pb-0.5"
          >
            View all projects <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
