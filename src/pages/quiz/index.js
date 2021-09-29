import React from 'react';
import Container from '../../layout/wrappers/Container';
import Title from '../../layout/wrappers/Title';
import Table from '../../components/table/Table';
import Body from '../../layout/wrappers/Body';

export default function Quiz() {
  return (
    <Body>
      <Container>
        <Title title="Teste vocacional" />
        <Table />
      </Container>
    </Body>
  );
}
