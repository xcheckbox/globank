import GlobalStyles from 'assets/styles/global.style';
import styled, { css } from 'styled-components';

const COLOR = {
  primary: css`
    color: #ffff;
    background: linear-gradient(${GlobalStyles.color.blue_dark}, ${GlobalStyles.color.blue_medium});
  `,
  secondary: css`
  color: #000;
  border: 2px solid ${GlobalStyles.color.blue_light};
  background-color: white;
`,
};

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px 15px;
  font-size: 12px;
  border-radius: 50px;
  font-weight: 400;
  outline: none;

  ${({ color }) => color && COLOR[color]}
`;