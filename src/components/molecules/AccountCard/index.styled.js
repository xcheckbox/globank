import styled from 'styled-components';
import { StyledCard } from 'components/atoms/Card/index.styled';

const StyledAccountCard = styled(StyledCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 10px 0;
  border: 1px solid pink;
  cursor: pointer;
`;

const StyledAccountNumber = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  span.title {
    margin-left: 5px;
    font-size: 0.9em;
  }
`;

const StyledBalance = styled.div`
  font-size: 1em;

  .description {
    padding: 0;
    margin: 0;
    font-size: .7em;
  }
`;


export {
  StyledAccountCard,
  StyledAccountNumber,
  StyledBalance
}