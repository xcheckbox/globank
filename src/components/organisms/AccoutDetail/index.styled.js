
import GlobalStyles from 'assets/styles/global.style';
import { StyledCard } from 'components/atoms/Card/index.styled';
import styled from 'styled-components';

const StyledAccountCard = styled(StyledCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  margin: 0 5px;
  border-bottom: 1px solid ${GlobalStyles.color.blue_light};

  .title {
    font-weight: normal;
  }

  .balance {
    font-size: .8em;
    font-weight: 500;
  }
`;

export {
  StyledAccountCard
}