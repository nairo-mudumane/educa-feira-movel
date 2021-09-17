import styled from 'styled-components';
import Table from '../../../../components/table/Table';
import QuizTitle from './QuizTitle';

const StyledContainer = styled.div`
  /* padding: 0.5rem 0; */
`;

export default function Quiz() {
  return (
    <StyledContainer>
      <QuizTitle />
      <Table />
    </StyledContainer>
  );
}
