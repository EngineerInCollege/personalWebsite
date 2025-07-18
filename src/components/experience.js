// Experience.js
import {React, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../theme';

const experiences = [
  {
    id: 1,
    title: 'Software Engineer Intern',
    company: 'Bank of New York',
    location: 'Pittsburgh, PA',
    start: 'June 2025',
    end: 'Present',
    bullets: [
      'Engineering an AI‑driven support routing agent using ChatGPT‑4 LLM, integrating with xMatters on‑call REST APIs and Microsoft Teams to autonomously match employees with the correct support contact and parse troubleshooting documentation, eliminating managerial escalations and saving hundreds of hours in redirected communication.',
      'Orchestrating production readiness across Teams and interns, automating workflows via Python-based reasoning functions and dynamic API calls.',
      'Collaborating closely with other engineering teams to align multiple custom agents under shared integration standards, positioning the solution for company‑wide deployment.',
      'Stack: Python, OpenAI GPT-4 API, REST API, Microsoft Graph API, Docker'
    ]
  },
  {
    id: 2,
    title: 'DevOps Engineer Intern',
    company: 'Westinghouse Electric Company',
    location: 'Cranberry, PA',
    start: 'May 2024',
    end: 'August 2024',
    bullets: [
      'Spearheaded the transition from Subversion to Azure DevOps, automating the entire software development and release lifecycle by crafting Python, PowerShell, and Perl scripts to execute Git workflows within CI/CD pipelines, resulting in 5x faster deployments, reduced manual effort, and streamlined Agile delivery.',
      'Developed a scalable validation framework for Ovation databases, integrating existing test scripts and managing dependencies like Pandas, Numpy, and Openpyxl to reduce total runtime to ~5 minutes.',
      'Enhanced a machine-learning error detection tool for database analytics in Databricks, improving classification accuracy and generating an estimated $5K in cost savings through efficient error identification.',
      'Stack: Python, PowerShell, Perl, Git, Pandas, Numpy, Openpyxl, Azure DevOps, Azure Pipelines, Docker, Kubernetes'
    ]
  },
  {
    id: 3,
    title: 'Software Engineer Intern',
    company: 'Greenman-Pedersen, Inc.',
    location: 'Pittsburgh, PA',
    start: 'May 2023',
    end: 'August 2023',
    bullets: [
      'Designed and implemented a data-integration algorithm into a 300-level-of-detail BIM 3D modeling project for the Greensburg Pump Station, using point-cloud data to save $12K by avoiding external vendor services.',
      'Authored SOPs for Greensburg Wastewater Plant operations, optimizing workflows and ensuring compliance with operational standards by communicating with plant operators.',
      'Stack: Python, MATLAB, Autodesk Revit, ArcGIS Pro'
    ]
  },
  // Add more experiences as needed....
];

const ExperienceSection = styled.div`
  padding: 2vw;
  text-align: left;
`;

const Container = styled.div`
  position: relative;
  margin: 2vw 0;
  padding: 0 5vw;

  &::after {
    content: '';
    position: absolute;
    width: 0.25vw;
    background: ${(props) => props.theme.background3};
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Item = styled.div`
  position: relative;
  width: 50%;
  padding: 1vw 2vw;
  box-sizing: border-box;
  left: ${({ side }) => (side === 'right' ? '50%' : '0')};

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    display: inline-block;
    top: 50%;
    left: ${({ side }) =>
      side === 'left' ? 'calc(100% + 0vw)' : 'calc(0vw)'};
    transform: translateX(-50%);
    width: 1vw;
    height: 1vw;
    background: ${props => props.theme.secondary};
    border-radius: 50%;
    border: 0.15vw solid ${props => props.theme.background3};
  }

  &::after {
    content: '';
    position: absolute;
    top: 1.5vw;
    width: 0; height: 0;
    border: 1vw solid transparent;
    ${({ side }) =>
      side === 'left'
        ? `
      right: -1vw;
      border-left-color: ${props => props.theme.primary};
    `
        : `
      left: -1vw;
      border-right-color: ${props => props.theme.primary};
    `}
  }
`;

const Content = styled.div`
  background: ${(props) => props.theme.background2};
  padding: 2vw;
  border-radius: 1vw;
  box-shadow: 0 0 .5vw rgba(0, 0, 0, 0.2);
  position: relative;
  transform: ${({ side }) =>
    side === 'left' ? 'translateX(-1vw)' : 'translateX(1vw)'};

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.background3};
  }

  cursor: pointer;
`;

const DateLabel = styled.div`
  font-size: 1vw;
  color: ${(props) => props.theme.primary};
  padding-bottom: 1vw;
`;

const Title = styled.div`
  margin: 0.2vw 0;
  font-size: 1.25vw;
`;

const CompanyLabel = styled.div`
  font-size: 1vw;
  color: ${(props) => props.theme.secondary};
`;

const DetailsWrapper = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? 'var(--content-height)' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: max-height 0.5s ease, opacity 0.4s ease;
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
`;

const Details = styled.div`
  margin-top: 0.5vw;
  font-size: 1vw;
  transform-origin: top center;
`;

const List = styled.ul`
  padding: 0;
`

const Bullet = styled.li`
  margin-top: 1vw;
  margin-left: 1vw;
  padding-bottom: 1vw;

  &::marker {
    color: ${(props) => props.theme.secondary};
  }
`

export default function Experience() {
  const [openId, setOpenId] = useState(null);
  const detailsRefs = useRef({});

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    Object.keys(detailsRefs.current).forEach(id => {
      const el = detailsRefs.current[id];
      if (el && el.parentElement) {
        el.parentElement.style.setProperty('--content-height', `${el.scrollHeight}px`);
      }
    });
  }, [openId]);
  
  return (
    <ExperienceSection>
      <SectionTitle>Experiences</SectionTitle>
      <Container>
        {experiences.map((exp, i) => {
          const side = i % 2 === 0 ? 'left' : 'right';
          const isOpen = openId === exp.id;

          return (
            <Item key={exp.id} side={side}>
              <Content onClick={() => toggle(exp.id)} side={side}>
                <DateLabel><i>{exp.start} – {exp.end}</i></DateLabel>
                <Title>{exp.title}</Title>
                <CompanyLabel>{exp.company}</CompanyLabel>
                {(
              <DetailsWrapper
                isOpen={isOpen}
                ref={(wrapper) => {
                  if (wrapper && detailsRefs.current[exp.id]) {
                    wrapper.style.setProperty(
                      '--content-height',
                      `${detailsRefs.current[exp.id].scrollHeight}px`
                    );
                  }
                }}>
                  <Details ref={(el) => (detailsRefs.current[exp.id] = el)}>
                    <p>Location: {exp.location}</p>
                    <List>
                      {exp.bullets.map((b, idx) => (
                        <Bullet key={idx}>
                          {b}
                        </Bullet>
                      ))}
                    </List>
                  </Details>
                </DetailsWrapper>
              )}
              </Content>
            </Item>
          );
        })}
      </Container>
    </ExperienceSection>
  );
}
