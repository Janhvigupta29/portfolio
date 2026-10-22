import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import config from '@/data/config';

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'How I Work', href: '/#how-i-work' },
  { label: 'About', href: '/#about' },
  { label: 'Writing', href: '/#writing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#') && isHome) {
      const id = href.replace('/#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-espresso/95 backdrop-blur-md border-b border-muted-mocha/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Monogram */}
        <Link
          to="/"
          className="font-serif text-2xl text-warm-cream hover:text-soft-amber transition-colors duration-200"
          aria-label="Home"
        >
          JG.
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              {isHome ? (
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="font-sans text-sm font-medium text-muted-mocha hover:text-warm-cream transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  to={link.href}
                  className="font-sans text-sm font-medium text-muted-mocha hover:text-warm-cream transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={config.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium font-sans text-espresso bg-soft-amber rounded hover:bg-amber-300 transition-colors duration-200"
          >
            Resume <ExternalLink size={13} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-warm-cream p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-espresso/98 backdrop-blur-md border-t border-muted-mocha/20 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left font-sans text-lg font-medium text-warm-cream hover:text-soft-amber transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <a
            href={config.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium font-sans text-espresso bg-soft-amber rounded w-fit mt-2"
          >
            Resume <ExternalLink size={13} />
          </a>
        </div>
      )}
    </header>
  );
}
