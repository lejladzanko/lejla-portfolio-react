import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import '../scss/App.scss';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <div>
      <Navbar />
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};




export default App;
