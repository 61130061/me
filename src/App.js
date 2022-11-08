import Header from './components/Header';
import Projects from './components/Projects';
import Contributions from './components/Contributions';
import Skills from './components/Skills';
import Footer from './components/Footer';
import HireMe from './components/HireMe';

function App() {
  return (
    <div className="p-8">
      <div className="m-auto max-w-[720px] mt-5">
        <Header />
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
