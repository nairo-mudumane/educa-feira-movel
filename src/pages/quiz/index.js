import React from 'react';
import Title from '../../layout/wrappers/Title';
import Table from '../../components/table/Table';
import Body from '../../layout/wrappers/Body';
import Main from '../../layout/wrappers/Main';

export default function Quiz() {
  return (
    <Main>
      <Body>
        <Title title="Teste vocacional" />
        <Table />
      </Body>
    </Main>
  );
}
