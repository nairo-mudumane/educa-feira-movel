import React from 'react';
import BgWhite from '../../../layout/wrappers/BgWhite';
import Body from '../../../layout/wrappers/Body';
import Main from '../../../layout/wrappers/Main';
import Title from '../../../layout/wrappers/Title';
import InfoBody from '../info/InfoBody';
import AddQuizBody from './AddQuizBody';

export default function PostQuiz() {
  return (
    <Main>
      <Body>
        <Title title="cadastrar questoes do quiz" />
        <BgWhite>
          <InfoBody body={<AddQuizBody />} />
        </BgWhite>
      </Body>
    </Main>
  );
}
