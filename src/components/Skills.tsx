import { useRef, useEffect, useState } from 'react';

const technicalSkills = [
  {
    group: 'DevOps & Cloud',
    color: 'text-cool-silver',
    items: ['Kubernetes', 'Docker', 'CI/CD Pipelines', 'Infrastructure as Code', 'Linux', 'Shell Scripting'],
  },
  {
    group: 'Programming',
    color: 'text-warm-cream',
    items: ['Python', 'YAML / JSON', 'Bash', 'Git', 'TypeScript (learning)'],
  },
  {
    group: 'AI & Automation',
    color: 'text-soft-amber',
    items: ['LLM APIs', 'Prompt Engineering', 'Agentic Workflows', 'Workflow Automation', 'Testing Automation'],
  },
  {
    group: 'Developer Tools',
    color: 'text-muted-mocha',
    items: ['GitHub', 'VS Code', 'Notion', 'Linux CLI', 'Monitoring Tools'],
  },
];

const executionSkills = [
  {
    group: 'Planning & Coordination',
    color: 'text-soft-amber',
    items: ['Project Planning', 'Task Tracking', 'Scope Definition', 'Timeline Management', 'Cross-functional Collaboration'],
  },
  {
    group: 'Communication',
    color: 'text-cool-silver',
    items: ['Stakeholder Communication', 'Documentation', 'Progress Reporting', 'Requirements Gathering'],
  },
  {
    group: 'Execution',
    color: 'text-warm-cream',
    items: ['Prioritisation', 'Deliverable Tracking', 'Risk Identification', 'Process Improvement'],
  },
];

function useInView(threshold = 0.05) {
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

export default function Skills() {
  const { ref, visible } = useInView();

  return (
    <section id="skills" className="py-24 md:py-32 bg-dark-roast" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          className={`mb-16 transition-all duration-600 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-mono text-xs tracking-[0.2em] text-soft-amber uppercase mb-4">
            Skills & Toolkit
          </p>
          <h2 className="font-serif text-heading-xl text-warm-cream max-w-2xl">
            Two sets of tools, one coherent approach
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Technical */}
          <div
            className={`transition-all duration-600 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] tracking-[0.25em] text-cool-silver uppercase">
                Technical
              </span>
              <div className="flex-1 h-px bg-cool-silver/20" />
            </div>
            <div className="space-y-6">
              {technicalSkills.map((group) => (
                <div key={group.group}>
                  <p className={`font-mono text-xs tracking-wider uppercase mb-3 ${group.color}`}>
                    {group.group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="font-sans text-sm text-muted-mocha bg-espresso border border-muted-mocha/15 px-3 py-1.5 rounded hover:border-soft-amber/40 hover:text-warm-cream transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Execution */}
          <div
            className={`transition-all duration-600 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] tracking-[0.25em] text-soft-amber uppercase">
                Execution
              </span>
              <div className="flex-1 h-px bg-soft-amber/20" />
            </div>
            <div className="space-y-6">
              {executionSkills.map((group) => (
                <div key={group.group}>
                  <p className={`font-mono text-xs tracking-wider uppercase mb-3 ${group.color}`}>
                    {group.group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="font-sans text-sm text-muted-mocha bg-espresso border border-muted-mocha/15 px-3 py-1.5 rounded hover:border-soft-amber/40 hover:text-warm-cream transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
