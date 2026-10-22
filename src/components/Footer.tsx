import { Link } from 'react-router-dom';
import { Linkedin, Github } from 'lucide-react';
import config from '@/data/config';

export default function Footer() {
  return (
    <footer className="bg-dark-roast border-t border-muted-mocha/15 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="font-serif text-xl text-warm-cream hover:text-soft-amber transition-colors"
          >
            JG.
          </Link>
          <span className="text-muted-mocha/40 text-xs">|</span>
          <p className="font-mono text-xs text-muted-mocha/60">
            Engineering & Project Execution
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={config.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-mocha hover:text-soft-amber transition-colors"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={config.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-mocha hover:text-soft-amber transition-colors"
          >
            <Github size={17} />
          </a>
        </div>

        <p className="font-mono text-[11px] text-muted-mocha/40">
          © {new Date().getFullYear()} Janhvi Gupta
        </p>
      </div>
    </footer>
  );
}
