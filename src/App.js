import { useState, useEffect } from 'react';

import Header from './components/Header';
import Projects from './components/Projects';
import Contributions from './components/Contributions';
import Skills from './components/Skills';
import Footer from './components/Footer';
import HireMe from './components/HireMe';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <div className="p-8 dark:bg-zinc-900 dark:text-white">
      <div className="m-auto max-w-[720px] mt-5">
        <Header setDark={setDark} dark={dark} />
        <Skills />
        <Contributions />
        <Projects />

        <HireMe />

        <Footer />

      </div>
    </div>
  );
}

export default App;
