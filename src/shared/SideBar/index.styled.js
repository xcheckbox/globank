
import styled from 'styled-components';
import GlobalStyles from 'assets/styles/global.style';


const StyledSidebar = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  top: 0;
  background: linear-gradient(${GlobalStyles.color.blue_dark}, ${GlobalStyles.color.blue_medium});
  transition: all 0.5s ease-in-out;
  left: ${({ isOpen }) => (isOpen ? '0' : '-150%')};

  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
  }
  button {
    align-self: flex-end;
  }
`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  a {
    color: white;
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
  }
`;

export {
  StyledSidebar,
  StyledLinkContainer
}