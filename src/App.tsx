import { useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { TechMarquee } from './components/TechMarquee';
import type { TabId } from './data/portfolio';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');

  const selectTab = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar activeTab={activeTab} onSelectTab={selectTab} />
      <main>
        {activeTab === 'home' && (
          <>
            <Hero onSelectTab={selectTab} />
            <TechMarquee />
            <About />
          </>
        )}
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'skills' && <Skills />}
        <Contact />
      </main>
      <Footer onSelectTab={selectTab} />
    </div>
  );
}

export default App;
