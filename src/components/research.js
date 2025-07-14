import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../theme';

// Container for the Projects section
const ProjectsSection = styled.div`
  padding: 2vw;
  text-align: left;
`;

const ProjectsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ProjectItem = styled.a`
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 0 .5vw rgba(0, 0, 0, 0.1);
  padding: 2vw;
  width: 60%;
  margin-bottom: 1.5vw;
  border-radius: .5vw;
  text-decoration: none;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ProjectTitle = styled.div`
  font-size: 1.4vw;
  padding: 1vw;
  color: ${(props) => props.theme.secondary};
`;

const Description = styled.div`
  font-size: 0.9vw;
  color: ${(props) => props.theme.primary};
  margin-top: 0.5vw;
  padding-left: 1vw;
  line-height: 1.5;
`;

const VisitButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
  border: none;
  padding: 0.5vw 1vw;
  border-radius: 0.5vw;
  font-size: 0.9vw;
  cursor: pointer;
  margin-left: 1vw;
  text-decoration: none; 

  &:hover {
    background-color: ${(props) => props.theme.secondary};
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Decentralized Voting Platform',
      description: 'Lead a team of seven in the creation of an educational video-series aimed at enhancing the learning experience for introductory computer science students. The research paper evaluates the effectiveness of these videos in improving learning outcomes for 112 students enrolled in Programming Principles: C++. By examining the impact of the video resources, the study highlights their potential to augment traditional teaching methods and boost student engagement and understanding in coding courses, specifically in C++ programming.',
      link: 'https://github.com/EngineerInCollege/BlockBallot-Voting',
      tools: 'Solidity, Blockchain, JavaScript, React, Node.js',
    },
    {
      title: 'Travel Search Website',
      description: 'A full-stack website that lets users explore travel destinations and activities. It also saves your browsing history using Firebase for login and data storage.',
      link: 'https://github.com/EngineerInCollege/WishVoyage',
      tools: 'JavaScript, React, Node.js, Firebase, APIs',
    },
  ];

  return (
    <ProjectsSection>
      <SectionTitle>Research</SectionTitle>
      <ProjectsBox>
      <ProjectItem>
            <TitleWrapper>
              <div>
                <ProjectTitle>Enhancing Lecture Material with Conceptual Videos: A Supplementary Learning Experience Paper</ProjectTitle>
              </div>
            </TitleWrapper>
            <Description>
              <p>Lead a team of seven in the creation of an educational video-series aimed at enhancing the learning experience for introductory computer science students. The research paper evaluates the effectiveness of these videos in improving learning outcomes for 112 students enrolled in <i>Programming Principles: C++</i>. </p>

              <p>By examining the impact of the video resources, the study highlights their potential to augment traditional teaching methods and boost student engagement and understanding in coding courses, specifically in C++ programming.</p>

              <p><i>Rossi, T., & Agrawal, P., & Immen, N., & Valentin, A. K., & Sagi, N., & Alford-Egizio, D. (2024, June), Board 447: Enhancing Lecture Material with Conceptual Videos: A Supplementary Learning Experience Paper presented at 2024 ASEE Annual Conference & Exposition, Portland, Oregon. 10.18260/1-2--47039</i></p>
            </Description>
            <VisitButton
                  as="a"
                  href="https://peer.asee.org/board-447-enhancing-lecture-material-with-conceptual-videos-a-supplementary-learning-experience"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Paper
             </VisitButton>
            </ProjectItem>
      </ProjectsBox>
    </ProjectsSection>
  );
};

export default Projects;
