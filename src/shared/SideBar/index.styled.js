
import styled from 'styled-components';

const StyledSidebar = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: green;
  transition: all 0.5s ease-in-out;
  left: ${({ isOpen }) => (isOpen ? '0' : '-150%')};
`;

export {
  StyledSidebar
}