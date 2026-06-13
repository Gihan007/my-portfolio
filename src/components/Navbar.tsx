import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { profile, tabs, type TabId } from '../data/portfolio';

type NavbarProps = {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
};

export function Navbar({ activeTab, onSelectTab }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const onHome = activeTab === 'home';

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleSelect = (tab: TabId) => {
    onSelectTab(tab);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          onHome && !mobileOpen
            ? 'border-b border-white/10 bg-surface/80 backdrop-blur-xl'
            : 'border-b border-slate-200/60 bg-white/90 shadow-sm shadow-slate-900/5 backdrop-blur-xl'
        }`}
      >
        <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
          <button
            type="button"
            onClick={() => handleSelect('home')}
            className={`font-display text-xl font-bold transition-colors ${
              onHome && !mobileOpen ? 'text-white' : 'text-slate-900'
            }`}
          >
            {profile.name.split(' ')[0]}
            <span className="text-violet-500">.</span>
          </button>

          <div
            role="tablist"
            aria-label="Portfolio sections"
            className={`hidden items-center gap-1 rounded-full p-1.5 md:flex ${
              onHome && !mobileOpen
                ? 'border border-white/10 bg-white/10 backdrop-blur-md'
                : 'border border-slate-200/80 bg-white/60 shadow-sm backdrop-blur-md'
            }`}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => handleSelect(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? onHome && !mobileOpen
                      ? 'bg-white text-slate-900 shadow-md'
                      : 'bg-slate-900 text-white shadow-md'
                    : onHome && !mobileOpen
                      ? 'text-white/80 hover:bg-white/10 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.resume}
              className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition sm:inline-flex ${
                onHome && !mobileOpen
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
                onHome && !mobileOpen
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-slate-200 text-slate-900 hover:bg-slate-50'
              }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile tab bar */}
        <div
          role="tablist"
          aria-label="Portfolio sections"
          className={`flex gap-2 overflow-x-auto border-t px-5 py-2.5 md:hidden ${
            onHome && !mobileOpen ? 'border-white/10' : 'border-slate-200/80'
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => handleSelect(tab.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                activeTab === tab.id
                  ? onHome && !mobileOpen
                    ? 'bg-white text-slate-900'
                    : 'bg-violet-600 text-white'
                  : onHome && !mobileOpen
                    ? 'bg-white/10 text-white/80'
                    : 'bg-slate-100 text-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

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
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                onClick={() => handleSelect(tab.id)}
                className={`block w-full rounded-xl px-4 py-3.5 text-left text-sm font-medium transition ${
                  activeTab === tab.id
                    ? 'bg-violet-50 text-violet-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {tab.label}
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
