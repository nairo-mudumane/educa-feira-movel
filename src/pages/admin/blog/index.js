import React from 'react';
import Body from '../../../layout/wrappers/Body';
import Main from '../../../layout/wrappers/Main';
import Title from '../../../layout/wrappers/Title';
import PostNewsForm from './PostNewsForm';

export default function PostBlogNews({ children }) {
  return (
    <Main>
      <Body>
        <Title title="cadastrar noticias" />
        <PostNewsForm />
      </Body>
    </Main>
  );
}
