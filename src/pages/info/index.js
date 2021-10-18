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
        <Title title="Curiosidade do dia..." />
        {load ? (
          <Error>
            <Loader />
          </Error>
        ) : (
          data && (
            <BgWhite>
              {data.data.map((info, index) => (
                <div key={index}>
                  <InfoTitle title={info.title} />
                  <InfoBody body={info.content} />
                </div>
              ))}
            </BgWhite>
          )
        )}
      </Container>
    </Body>
  );
}
