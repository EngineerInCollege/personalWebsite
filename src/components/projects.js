import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';
import { SectionTitle } from '../theme';

const ProjectsSection = styled.div`
  padding: 2vw;
  font-size: 1vw;
  text-align: left;
`;

const ProjectsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ProjectItem = styled.div`
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 0 .5vw rgba(0, 0, 0, 0.1);
  padding: 1vw;
  width: 60%;
  margin-bottom: 1.5vw;
  cursor: pointer;
  border-radius: .5vw;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ProjectTitle = styled.div`
  font-size: 1.2vw;
  color: ${(props) => props.theme.primary};
`;

const ProjectTools = styled.div`
  font-size: 0.9vw;
  color: ${(props) => props.theme.secondary};
  margin-top: 0.5vw;
  padding-left: 1vw;
`;

const Arrow = styled.div`
  font-size: 1.5vw;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? 'rotate(270deg)' : 'rotate(90deg)')};
`;

const ProjectDescription = styled.div`
  max-height: ${(props) => (props.isOpen ? '100vh' : '0')};
  overflow: hidden;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  padding: ${(props) => (props.isOpen ? '1vw' : '0')};
  transition: max-height 0.5s ease, opacity 0.5s ease, padding .5s ease;
`;

const VisitButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
  border: none;
  padding: 0.5vw 1vw;
  border-radius: 0.5vw;
  font-size: 0.9vw;
  cursor: pointer;
  margin-top: 1vw;
  text-decoration: none; 

  &:hover {
    background-color: ${(props) => props.theme.secondary};
  }
`;

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  const handleToggleDescription = (index) => {
    setOpenProject((prev) => (prev === index ? null : index));
  };

  const projects = [
    {
      title: 'Decentralized Voting Platform',
      description: 'A blockchain-based voting system using Ethereum to cast and track votes with transparency and security.',
      link: 'https://github.com/EngineerInCollege/BlockBallot-Voting',
      tools: 'Solidity, Blockchain, JavaScript, React, Node.js',
    },
    {
      title: 'Travel Search Website',
      description: 'A full-stack website that lets users explore travel destinations and activities. It also saves your browsing history using Firebase for login and data storage.',
      link: 'https://github.com/EngineerInCollege/WishVoyage',
      tools: 'JavaScript, React, Node.js, Firebase, APIs',
    },
    {
      title: 'Raspberry Pi BPSK Transmitter',
      description: 'A real-world BPSK (binary phase-shift keying) wireless transmitter/receiver system using a Raspberry Pi and SDR hardware as part of a wireless communcations course. In a team of four, we generated IQ samples in GNU Radio, transmitted them via rpitx from the Pi, and received them on ADALM‑PLUTO SDRs. The final results was a clear BPSK modulation and accurate message recovery, bridging classroom theory with hands-on RF experience.',
      link: 'https://youtu.be/RqLWeFEBhWk',
      tools: 'GQRX, Rpitx, Python, GNURadio, Raspberry Pi 3B+, ADALM-PLUTO SDR, NOOELEC SDR',
    },
    {
      title: 'Pipelined Processor Simulation',
      description: 'A simulated pipelined processor using Verilog and Vivado, as part of Computer Organization & Design coursework. The system implements a multi-stage pipeline architecture and includes mechanisms to detect and resolve data hazards, including load-use errors, ensuring accurate instruction execution.',
      link: '',
      tools: 'Verilog, Vivado',
    },
    {
      title: 'Mini-Shell',
      description: 'A lightweight, Bash‑like shell in C as part of a systems programming course that parses and executes user commands with full support for key built-ins like cd, pwd, exit, and quit. The shell performs comprehensive process control, including launching external programs via fork(), handling pipes (|), I/O redirection (<, >, 2>, &>, and their append variants), and allowing background execution (&). It also supports complex command sequencing using ;, conditional execution with && and ||, and enforces proper operator precedence. It also integrates environment variable handling for assignment and expansion (with undefined variables defaulting to empty strings), and ensured reliability through debugging and memory-leak detection tools.',
      link: '',
      tools: 'C',
    },
    {
      title: 'Dynamic Memory Allocator',
      description: 'A custom implementation of malloc, free, and realloc in C as part of a systems programming course. The project involved designing and optimizing a dynamic memory allocator using implicit and explicit free lists, along with a heap consistency checker to verify memory integrity. Performance optimization steps included space utilization heuristics, throughput analysis, coalescing, and eventually adopting segregated free lists and footer optimizations.',
      link: '',
      tools: 'C',
    },
    {
        title: 'TCP Data Transfer and Caching System',
        description: 'A system to efficiently transfer and cache data over a TCPv4 connection as part of Intro to Systems Programming coursework. This project involved socket programming to handle server-client communication, enabling rapid read and write operations with optimized caching mechanisms.',
        tools: 'C',
    },
    {
        title: 'Course Scheduler',
        description: 'A course scheduler application using Java and Apache Derby as the database. The system allows users to create, view, and manage course schedules, demonstrating expertise in database integration and backend development.',
        link: 'https://github.com/EngineerInCollege/CourseScheduler/tree/main',
        tools: 'Java, Apache Derby',
    },
    {
        title: '2D Drawing Application',
        description: 'A 2D drawing application similar to Paint.NET using Java. The application features a user-friendly interface and includes tools for drawing shapes, lines, and freehand sketches, showcasing skills in GUI development and graphics programming.',
        link: 'https://github.com/EngineerInCollege/paint.net/tree/main',
        tools: 'Java',
    },
  ];

  return (
    <ProjectsSection>
      <SectionTitle>Projects</SectionTitle>
      <ProjectsBox>
        {projects.map((project, index) => (
          <ProjectItem key={index} onClick={() => handleToggleDescription(index)}>
            <TitleWrapper>
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectTools>{project.tools}</ProjectTools>
              </div>
              <Arrow isOpen={openProject === index}>
                <FaChevronRight />
              </Arrow>
            </TitleWrapper>
            <ProjectDescription isOpen={openProject === index}>
              <p>{project.description}</p>
              {project.link && (
                <VisitButton
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </VisitButton>
              )}
            </ProjectDescription>
          </ProjectItem>
        ))}
      </ProjectsBox>
    </ProjectsSection>
  );
};

export default Projects;
