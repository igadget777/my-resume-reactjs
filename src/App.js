import React from 'react'
import Header from './components/Header';
import Visits from './components/Visits';
import Section from './components/Section';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Project from './components/Project';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Resume from './resume.json';
import './App.css';

const Certificate = React.lazy(() => import('./components/Certificate'));

function App() {
  let resume = Resume[0];
  return (
    <div className="container">

      <Header header={resume.header}>
        <Visits />
      </Header>
      <Section title="">
        <Summary summary={resume.summary} />
      </Section>
      <Section title="Skills">
        <ul>
          {resume.skills.map((skill) => (
            <Skills key={skill.id} {...skill} />
          ))}
        </ul>
      </Section>
      <Section title="Projects">
        <ul>
          {resume.projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </ul>
      </Section>
      <Section title="Certifications">
        <ul className='certs'>
          {resume.certificates.map((certificate) => (
            <Certificate key={certificate.id} {...certificate} />
          ))}
        </ul>
      </Section>
      <Section title="Experience">
        {resume.experiences.map((experience) => (
          <Experience key={experience.id} {...experience} />
        ))}
      </Section>
      <Section title="Education">
        {resume.education.map((edu) => (
          <Education key={edu.id} {...edu} />
        ))}
      </Section>
      <Footer />
    </div>
  );
}

export default App;
