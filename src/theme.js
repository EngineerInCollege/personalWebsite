import styled from 'styled-components';

const theme = {
    primary: '#121110',    // Black
    secondary: '#e86c13',  // Orange
    background: "white", // White
    background2: "#f7f6f5", // Gray
    background3: "#e0dedc", // Dark Gray
    text: '#121110',       // Black
  };
  
  export default theme;
  
  export const SectionTitle = styled.div`
    font-size: 2vw;
    margin-bottom: 1vw;
    color: ${(props) => props.theme.primary};
  `;
  
  