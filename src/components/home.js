import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { HiAcademicCap } from "react-icons/hi2";
import myPhoto from '../images/my-photo.png'; 
import { SectionTitle } from '../theme';

const LeftSide = styled.div`
  padding: 2vw;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const RightSide = styled.div`
  padding: 2vw;
  width: 70%;
  text-align: left;
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  padding-top: 5vw;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 12vw;
  height: 12vw;
  object-fit: cover;
  margin-bottom: 1vw;
  object-position: top;
`;

const Title = styled.div`
  font-size: 1.5vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  color: ${(props) => props.theme.primary};
`;

const Company = styled.div`
  font-size: 1vw;
  color: ${(props) => props.theme.secondary};
  margin-bottom: 1vw;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1vw;
  margin-top: 1vw;

  a {
    color: ${(props) => props.theme.primary};
    font-size: 1.5vw;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.secondary};
    }
  }
`;

const Biography = styled.div`
  font-size: 1vw;
  margin-bottom: 2vw;
  line-height: 2;
`;

const SmallSectionTitle = styled.div`
  font-size: 1.2vw;
  margin-bottom: 1vw;
`

const BulletList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  font-size: .9vw;
  margin-bottom: 0.3vw;
  display: flex;
  align-items: center;
`;

const Degree = styled.li`
  display: inline;
`;

const BulletIcon = styled.div`
  font-size: 1.5vw;
  margin-left: 1vw;
  margin-right: 1vw;
`;

const BulletPoint = styled.div`
  width: .3vw;
  height: .3vw;
  background-color: ${(props) => props.theme.primary};
  border-radius: 50%;
  margin-right: 1vw;
  margin-left: 1vw;
`;

const University = styled.div`
  font-size: .8vw;
  color: ${(props) => props.theme.secondary};
  margin-left: 3.5vw;
`;

const DualSectionWrapper = styled.div`
  display: flex;
  gap: 2vw;
  margin-top: 2vw;
`;

const SectionBox = styled.div`
  width: 48%; //Makes each section take up half the space
  padding: 1vw;
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-.5vw);
  }
`;

// Animation for fading in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(.5vw);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BiographyWrapper = styled.div`
  position: relative;
  height: 100%; 
  animation: ${(props) => (props.isExiting ? fadeOut : fadeIn)} 0.5s ease-in-out;
  animation-fill-mode: forwards;
  opacity: ${(props) => (props.isExiting ? 0 : 1)};
  transform: ${(props) =>
  props.isExiting ? 'translateY(-1vw)' : 'translateY(0)'};
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
  font-size: 0.9vw;
  margin-top: 1vw;
  text-decoration: underline;

  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

const Home = () => {
  const [showLongBio, setShowLongBio] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleBio = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowLongBio((prev) => !prev);
      setIsAnimating(false);
    }, 500); // Match the animation duration
  };

  return (
    <PageWrapper>
      <LeftSide>
        <ProfileImage src={myPhoto} alt="My photo" />
        <Title>Negein Immen</Title>
        <Company>Computer Engineering Student</Company>

        <SocialIcons>
          <a href="https://www.linkedin.com/in/negeinimmen/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/EngineerInCollege" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:nji5081@psu.edu">
            <FaEnvelope />
          </a>
        </SocialIcons>
      </LeftSide>

      <RightSide>
        <SectionTitle>
          Biography
          <ToggleButton onClick={toggleBio}>
            {showLongBio ? "(keep it short)" : "(tell me more)"}
          </ToggleButton>
        </SectionTitle>
        <BiographyWrapper isExiting={isAnimating}>
          {showLongBio ? (
            <Biography isExiting={isAnimating}>
              <p>Hi! My name is Negein Immen, and I’m a Junior at Penn State studying Computer Engineering with a minor in Cybersecurity Computational Foundations.</p>
              
              <p>From a young age, I’ve been fascinated by how technology works—how devices communicate “through the air” and the magic behind WiFi. Growing up during the rise of iPods and iPhones, I was captivated by these innovations and constantly curious about how the world around me functioned. That curiosity has stayed with me, guiding me through high school and into my current studies. I think my younger self would be ecstatic to see what I’m working on today!</p>
              
              <p>Throughout my academic journey, I’ve explored a wide range of hardware and software projects that reflect the versatility of this field. Recently, I learned how to simulate pipelined processing in my <i>Computer Organization & Design</i> class and developed a system to efficiently write and read data using TCPv4 and caches in my <i>Intro to Systems Programming</i> class.</p>
              
              <p>My curiosity about blockchain technology has also grown, particularly its potential for security, transparency, and reliability on the web. To dive deeper, I created a decentralized voting platform where users can cast votes using Ethereum, with negligible gas fees. This project introduced me to Solidity and further expanded my web development skills.</p>
              
              <p>During my internship at Westinghouse Electric Company, I worked on real-world, mission-critical data projects. I led the migration from Subversion to Azure DevOps for the software development and release processes for nuclear power plant database systems. This included integrating automated testing and CI/CD through a streamlined pipeline. Additionally, I helped develop a machine learning-based data analytics tool to detect and classify errors in databases, saving an estimated $5,000 by improving error detection efficiency—a project carried out using Databricks.</p>
              
              <p>Beyond academics, I stay involved in my community as the Treasurer and prior DEI Chair of <a href="https://sites.psu.edu/psuieee/"target="_blank" style={{ color: 'black' }}>Penn State's IEEE organization</a> and as a volunteer in the ICU at Allegheny Health Network. I’m a firm believer that knowledge is power, which inspires me to continually learn, share my experiences, and take on new challenges.</p>
              
              <p>In my free time, I enjoy exploring creative and active outlets, like skiing, going to the gym, and teaching myself to play guitar. I’m excited to keep expanding my horizons and contributing to the ever-evolving world of technology!</p>    
            </Biography>
          ) : (
            <Biography isExiting={isAnimating}>
              <p>Hi, I'm Negein! I'm a Computer Engineering student at Penn State with interests in hardware engineering, machine learning, blockchain technology, and teaching. Currently, my technical abilities have been honed through my role as a DevOps Engineering Intern for Westinghouse Electric Company.</p>

              <p>Outside of academics, I stay involved in my community as the Treasurer for Penn State's IEEE and a volunteer in the ICU at Allegheny Health Network. I believe all knowledge is power, which drives me to continuously improve my skills, share what I've learned with others, and (as a recent personal project) learn how to play the guitar!</p>
            </Biography>
          )}

          <DualSectionWrapper>
            <SectionBox>
              <SmallSectionTitle>Interests</SmallSectionTitle>
              <BulletList>
                <ListItem><BulletPoint />Hardware Engineering</ListItem>
                <ListItem><BulletPoint />Machine Learning</ListItem>
                <ListItem><BulletPoint />Blockchain Technology</ListItem>
                <ListItem><BulletPoint />Teaching</ListItem>
              </BulletList>
            </SectionBox>

            <SectionBox>
              <SmallSectionTitle>Education</SmallSectionTitle>
              <BulletList>
                <ListItem>
                  <BulletList>
                    <ListItem>
                      <BulletIcon><HiAcademicCap /></BulletIcon>
                      <Degree>BSc Computer Engineering, <i>2022 - Current</i></Degree> 
                    </ListItem>
                    <ListItem>
                     <University>The Pennsylvania State University</University>  
                    </ListItem>
                  </BulletList>
                </ListItem>
                <ListItem>
                  <BulletList>
                    <ListItem>
                      <BulletIcon><HiAcademicCap /></BulletIcon>
                      <Degree>Cybersecurity Computational Foundations Minor, <i>2022 - Current</i></Degree>
                    </ListItem>
                    <ListItem>
                      <University>The Pennsylvania State University</University>  
                    </ListItem>
                  </BulletList>
                     
                </ListItem>
              </BulletList>
            </SectionBox>
          </DualSectionWrapper>
        </BiographyWrapper>

        
      </RightSide>
    </PageWrapper>
  );
};

export default Home;
