import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import projects from '@/data/projects';

const statusLabel: Record<string, { label: string; color: string }> = {
  completed: { label: 'Completed', color: 'text-cool-silver' },
  'in-progress': { label: 'In Progress', color: 'text-soft-amber' },
  concept: { label: 'Concept', color: 'text-muted-mocha' },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-espresso pt-32 flex items-center justify-center">
          <div className="text-center">
            <p className="font-mono text-muted-mocha mb-4">Project not found.</p>
            <Link
              to="/"
              className="font-sans text-sm text-soft-amber hover:text-warm-cream transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const status = statusLabel[project.status];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-espresso">
        {/* Header */}
        <section className="pt-32 pb-16 bg-espresso border-b border-muted-mocha/15">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-sans text-sm text-muted-mocha hover:text-soft-amber transition-colors mb-10"
            >
              <ArrowLeft size={15} /> Back to work
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-xs text-muted-mocha bg-dark-roast border border-muted-mocha/20 px-3 py-1 rounded uppercase tracking-wider">
                {project.category}
              </span>
              <span className={`font-mono text-xs uppercase tracking-widest ${status.color}`}>
                {status.label}
              </span>
            </div>

            <h1 className="font-serif text-heading-xl text-warm-cream mb-6">
              {project.title}
            </h1>

            <p className="font-sans text-lg text-muted-mocha leading-[1.7] max-w-2xl">
              {project.fullDescription}
            </p>

            {/* Action links */}
            {(project.githubUrl || project.demoUrl) && (
              <div className="flex flex-wrap gap-4 mt-8">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-dark-roast border border-muted-mocha/20 rounded text-sm font-sans text-warm-cream hover:border-soft-amber/40 transition-colors"
                  >
                    <Github size={15} /> View on GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-soft-amber text-espresso rounded text-sm font-sans font-medium hover:bg-amber-300 transition-colors"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Body */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-[2fr_1fr] gap-12">
              {/* Main content */}
              <div className="space-y-12">
                {/* Role */}
                <div>
                  <h2 className="font-serif text-xl text-warm-cream mb-4">My Role</h2>
                  <p className="font-sans text-base text-muted-mocha leading-[1.8]">
                    {project.role}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <h2 className="font-serif text-xl text-warm-cream mb-4">Approach</h2>
                  <p className="font-sans text-base text-muted-mocha leading-[1.8]">
                    {project.approach}
                  </p>
                </div>

                {/* Challenges */}
                <div>
                  <h2 className="font-serif text-xl text-warm-cream mb-4">
                    Challenges & Lessons
                  </h2>
                  <p className="font-sans text-base text-muted-mocha leading-[1.8]">
                    {project.challenges}
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Tools */}
                <div className="p-5 bg-dark-roast border border-muted-mocha/15 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag size={13} className="text-soft-amber" />
                    <h3 className="font-mono text-xs text-soft-amber uppercase tracking-wider">
                      Tools Used
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-xs text-muted-mocha bg-espresso border border-muted-mocha/15 px-2.5 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="p-5 bg-dark-roast border border-muted-mocha/15 rounded-xl">
                  <h3 className="font-mono text-xs text-muted-mocha/60 uppercase tracking-wider mb-4">
                    Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-xs text-muted-mocha bg-espresso border border-muted-mocha/15 px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation between projects */}
        <section className="border-t border-muted-mocha/15 py-12">
          <div className="max-w-4xl mx-auto px-6 md:px-10 flex items-center justify-between">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 font-sans text-sm text-muted-mocha hover:text-soft-amber transition-colors"
            >
              <ArrowLeft size={15} /> All Projects
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 font-sans text-sm text-muted-mocha hover:text-soft-amber transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
