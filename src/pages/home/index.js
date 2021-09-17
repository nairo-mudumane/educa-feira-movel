import React from 'react';
import Main from '../../layout/wrappers/Main';
import Body from '../../layout/wrappers/Body';
import Welcome from './Welcome';

export default function Home() {
  return (
    <Main>
      <Body>
        <Welcome />
      </Body>
    </Main>
  );
}
