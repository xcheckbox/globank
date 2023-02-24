import GlobalStyles from 'assets/styles/global.style';
import styled from 'styled-components';


const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: space-around;
  flex: 1;
  align-items: center;
  background-image: linear-gradient(${GlobalStyles.color.blue_dark}, ${GlobalStyles.color.blue_medium});
`;

const StyledCreateAccount = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccountLink = styled.a`
  padding: 10px 0;
`;

export {
  StyledLoginPage,
  StyledCreateAccount,
  AccountLink
}