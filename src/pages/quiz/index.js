import React from 'react';
import styled from 'styled-components';
import Container from '../../layout/wrappers/Container';
import Title from '../../layout/wrappers/Title';
import Table from '../../components/table/Table';
import Body from '../../layout/wrappers/Body';

const StyledError = styled.div`
  display: flex;
`;

export default function Quiz({ data, error }) {
  if (error)
    return (
      <Body>
        <Container>
          <StyledError>
            <p>Loading...</p>
          </StyledError>
        </Container>
      </Body>
    );

  return (
    <Body>
      <Container>
        <Title title="Concurso" />
        {data && <Table users={data.data} />}
      </Container>
    </Body>
  );
}
