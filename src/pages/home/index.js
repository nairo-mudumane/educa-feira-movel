import Body from '../../layout/wrappers/Body';
import Main from '../../layout/wrappers/Main';
import Container from './Container';

export default function Welcome() {
  return (
    <Main>
      <Body>
        <Container>
          <div className={`welcome-bar`}>
            <h3 className={`wc-text wc-text-tiny  animeLeft no-margin`}>
              Bem vindo ao
            </h3>
            <h1 className={`wc-text wc-text-huge animeTop no-margin`}>
              Educa Móvel 2021!
            </h1>
            <h5 className={`wc-text wc-text-medium animeBottom no-margin`}>
              Primeira edicao
            </h5>
          </div>
        </Container>
      </Body>
    </Main>
  );
}
