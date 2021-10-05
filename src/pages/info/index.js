import React from 'react';
import Loader from '../../components/loader';
import BgWhite from '../../layout/wrappers/BgWhite';
import Title from '../../layout/wrappers/Title';
import Container from '../../layout/wrappers/Container';
import Error from './Error';
import InfoBody from './InfoBody';
import InfoTitle from './InfoTitle';
import Body from '../../layout/wrappers/Body';

export default function Info({ load, data, error }) {
  console.log(data.data[0]);
  if (error)
    return (
      <Body>
        <Container>
          <Title title="Aguarde..." />
          <Error>
            <Loader />
          </Error>
        </Container>
      </Body>
    );

  return (
    <Body>
      <Container>
        <Title title="Sabia que..." />
        {load ? (
          <Error>
            <Loader />
          </Error>
        ) : (
          data && (
            <BgWhite>
              <InfoTitle title={data.data[0].title} />
              <InfoBody body={data.data[0].content} />
            </BgWhite>
          )
        )}
      </Container>
    </Body>
  );
}
