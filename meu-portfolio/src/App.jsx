import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Community from './components/Community';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;