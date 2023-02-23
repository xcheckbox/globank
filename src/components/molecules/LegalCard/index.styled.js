import styled from 'styled-components';
import { StyledCard } from 'components/atoms/Card/index.styled';


const StyledLegalCard = styled(StyledCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid pink;
`;

const Title = styled.h4`
  font-size: .8em;
  padding: 0;
  margin: 0;
`;

export {
  StyledLegalCard,
  Title
}