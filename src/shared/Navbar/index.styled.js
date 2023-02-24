import styled from "styled-components";
import GlobalStyles from "assets/styles/global.style";

export const StyledNavbar = styled.header`
  background-image: linear-gradient(${GlobalStyles.color.blue_dark}, ${GlobalStyles.color.blue_medium});
  border-bottom-left-radius: 50% 25%;
  border-bottom-right-radius: 50% 25%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 7rem;
`;