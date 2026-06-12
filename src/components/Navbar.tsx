import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';

type NavbarProps = {
  activeSection: string;
  onNavigate: (id: string) => void;
};

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const onHero = activeSection === 'home' && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? 'border-b border-slate-200/60 bg-white/80 shadow-sm shadow-slate-900/5 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
          <button
            type="button"
            onClick={() => handleNavigate('home')}
            className={`font-display text-xl font-bold transition-colors ${
              onHero && !mobileOpen ? 'text-white' : 'text-slate-900'
            }`}
          >
            GL<span className="text-violet-500">.</span>
          </button>

          <ul className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/60 p-1.5 shadow-sm backdrop-blur-md md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavigate(link.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={profile.resume}
              className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition sm:inline-flex ${
                onHero && !mobileOpen
                  ? 'bg-white text-slate-900 hover:bg-violet-50'
                  : 'bg-violet-600 text-white shadow-md shadow-violet-500/20 hover:bg-violet-500'
              }`}
            >
              <Download className="h-4 w-4" />
              Resume
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition md:hidden ${
                onHero && !mobileOpen
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-slate-200 text-slate-900 hover:bg-slate-50'
              }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 transform border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-[4.5rem] items-center justify-between border-b border-slate-100 px-5">
          <span className="font-display text-lg font-bold text-slate-900">
            Menu<span className="text-violet-500">.</span>
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="space-y-1 p-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNavigate(link.id)}
                className={`block w-full rounded-xl px-4 py-3.5 text-left text-sm font-medium transition ${
                  activeSection === link.id
                    ? 'bg-violet-50 text-violet-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="border-t border-slate-100 p-4">
          <a
            href={profile.resume}
            className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3.5 text-sm font-semibold text-white"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}
