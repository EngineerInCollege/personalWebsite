import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  font-size: 1vw;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5vw 15vw;
  width: 100%;
  box-sizing: border-box;
  background: ${(props) => props.theme.background};
  box-shadow: 0 .1vw .2vw rgba(0, 0, 0, 0.1);
`;

const Name = styled.div`
  font-size: 1.3vw;
  color: ${(props) => props.theme.font};
  span {
    font-weight: bold;
    color: ${(props) => props.theme.secondary};
  }
`;

const ItemBox = styled.div`
  display: flex;
  gap: 2vw;
  align-items: center;
  justify-content: flex-end;
  background-color: ${(props) =>
    props.active ? 'rgba(200, 200, 200, 0.1)' : 'transparent'};
  transition: background-color 0.3s ease;
`;

const Item = styled.div`
  color: ${(props) => props.theme.font};
  position: relative;
  cursor: pointer;
  text-decoration: none;

  &.active {
    color: ${(props) => props.theme.secondary};
  }

  span {
    font-weight: bold;
    position: relative;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -.1vw;
    left: 0;
    width: 0;
    height: .1vw;
    background-color: ${(props) => props.theme.secondary};
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &,
  &:visited,
  &:active {
    color: ${(props) =>
      props.variant === 'feature' ? props.theme.secondary : props.theme.font};
    text-decoration: none;
  }
`;

const Navbar = ({ active, onNavigate }) => {
  const navItems = ['home', 'projects', 'experience', 'research'];

  return (
    <Content>
      <Name onClick={() => onNavigate('home')}>
        <span>Negein </span>Immen
      </Name>

      <ItemBox>
        {navItems.map((item) => (
          <Item
            key={item}
            onClick={() => onNavigate(item)}
            className={active === item ? 'active' : ''}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Item>
        ))}
        <Item onClick={() => onNavigate('resume')} 
          variant="feature"
          as="a"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          
        > Resume </Item>
      </ItemBox>
    </Content>
  );
};

export default Navbar;
