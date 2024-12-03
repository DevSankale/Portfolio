import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import data from './components/Data.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import Form from './components/Form.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const projectList = data.map((project) => {
    return <ProjectCard key={project.id} project={project} />;
  });

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <section>
        <p id="Project">Projects</p>
        <div className="project-container">{projectList}</div>
      </section>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
