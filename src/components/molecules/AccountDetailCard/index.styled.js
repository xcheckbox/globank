
import { StyledCard } from 'components/atoms/Card/index.styled';
import styled from 'styled-components';

const StyledAccountDetail = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  margin: 15px 20px;
  padding: 10px;
  border-radius: 10px;
`;

const AccountActions = styled.div`
  display: flex;
  gap: 5px;
  margin: 10px 0;
`;

export {
  StyledAccountDetail,
  AccountActions
}