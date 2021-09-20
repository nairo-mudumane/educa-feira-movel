import React from 'react';
import Body from '../../layout/wrappers/Body';
import Main from '../../layout/wrappers/Main';
import Title from '../../layout/wrappers/Title';
import PostInfoForm from './PostInfoForm';

export default function PostInfo() {
  return (
    <Main>
      <Body>
        <Title title="cadastrar curiosidade" />
        <PostInfoForm />
      </Body>
    </Main>
  );
}
