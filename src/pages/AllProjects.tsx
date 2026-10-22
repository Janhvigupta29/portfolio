import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import projects from '@/data/projects';

export default function AllProjects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-espresso pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-sans text-sm text-muted-mocha hover:text-soft-amber transition-colors mb-10"
          >
            <ArrowLeft size={15} /> Back to home
          </Link>

          <p className="font-mono text-xs tracking-[0.2em] text-soft-amber uppercase mb-4">
            All Work
          </p>
          <h1 className="font-serif text-heading-xl text-warm-cream mb-16 max-w-2xl">
            Every project, documented
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group block bg-dark-roast border border-muted-mocha/15 rounded-xl p-6 hover:border-soft-amber/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-amber"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-xs text-muted-mocha uppercase tracking-wider">
                    {project.category}
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="text-muted-mocha group-hover:text-soft-amber transition-colors"
                  />
                </div>
                <h2 className="font-serif text-lg text-warm-cream mb-2 group-hover:text-soft-amber transition-colors">
                  {project.title}
                </h2>
                <p className="font-sans text-sm text-muted-mocha leading-[1.7] mb-4">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-muted-mocha/70 bg-espresso border border-muted-mocha/15 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
