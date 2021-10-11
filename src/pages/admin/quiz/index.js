import React from 'react';
import styled from 'styled-components';
import BgWhite from '../../../layout/wrappers/BgWhite';
import Body from '../../../layout/wrappers/Body';
import Main from '../../../layout/wrappers/Main';
import Title from '../../../layout/wrappers/Title';
import AddQuizBody from './AddQuizBody';

const StyledOverflow = styled.div`
  width: 100%;
  height: 100%;
`;

export default function PostQuiz() {
  return (
    <Main>
      <Body>
        <Title title="cadastrar questoes" />
        <BgWhite>
          <StyledOverflow>
            <AddQuizBody />
          </StyledOverflow>
        </BgWhite>
      </Body>
    </Main>
  );
}
