import React from 'react';
import Main from '../../wrappers/Main';
import Body from '../../wrappers/Body';
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
