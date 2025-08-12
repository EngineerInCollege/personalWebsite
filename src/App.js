import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import theme from './theme';

import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import Research from './components/research';
import ExperienceTimeline from './components/experience';

const AppContainer = styled.div`
  text-align: center;
  font-family: 'Verdana';
`;

const BodyContainer = styled.section`
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 10vh;
  padding-bottom: 10vh;
  scroll-margin-top: 10vh;

  background-color: ${(props) =>
    props.active ? 'rgba(220, 220, 220, 0.1)' : props.variant === 'feature'
      ? props.theme.background2
      : props.theme.background};

  transition: background-color 0.3s ease;
`;

const jobs = [
  {
    title: 'Intern',
    company: 'Company A',
    start: { year: 2023, month: 5 },
    finish: { year: 2023, month: 8 },
    details: ['Worked on X', 'Achieved Y'],
  },
  {
    title: 'Engineer',
    company: 'Company B',
    start: { year: 2023, month: 5 },
    finish: 'Present',
    details: ['Developed Z', 'Led W'],
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Refs for each section
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const researchRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const sections = [
      homeRef.current,
      projectsRef.current,
      experienceRef.current,
      researchRef.current,
    ];

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => {
      sections.forEach((sec) => sec && observer.unobserve(sec));
    };
  }, []);

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      projects: projectsRef,
      experience: experienceRef,
      research: researchRef,
    };

    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <Navbar
          active={activeSection}
          onNavigate={scrollToSection}
        />

        <BodyContainer id="home" ref={homeRef} active={activeSection === 'home'}>
          <Home />
        </BodyContainer>

        <BodyContainer
          id="projects"
          ref={projectsRef}
          variant="feature"
          active={activeSection === 'projects'}
        >
          <Projects />
        </BodyContainer>

        <BodyContainer
          id="experience"
          ref={experienceRef}
          active={activeSection === 'experience'}
        >
          <ExperienceTimeline jobs={jobs} />
        </BodyContainer>

        <BodyContainer
          id="research"
          ref={researchRef}
          variant="feature"
          active={activeSection === 'research'}
        >
          <Research />
        </BodyContainer>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
