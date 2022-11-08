import Header from './components/Header';
import Projects from './components/Projects';
import Contributions from './components/Contributions';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="p-8">
      <div className="m-auto max-w-[720px] mt-5">
        <Header />
        <Skills />
        <Contributions />
        <Projects />

        <div className="my-12">
          <div className="text-4xl my-4 font-[400] text-center">Hire me 👋!</div>
        </div>

        <Footer />

      </div>
    </div>
  );
}

export default App;
