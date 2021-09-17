import React from 'react';
import Main from '../../wrappers/Main';
import Body from '../../wrappers/Body';
import Welcome from './Welcome';
import Quiz from './quiz';

export default function Home() {
  const [active] = React.useState(false);

  return (
    <Main>
      <Body>{active ? <Welcome /> : <Quiz />}</Body>
    </Main>
  );
}
