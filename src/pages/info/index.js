import axios from 'axios';
import React from 'react';
import Loader from '../../components/loader';
import BgWhite from '../../layout/wrappers/BgWhite';
import Body from '../../layout/wrappers/Body';
import Main from '../../layout/wrappers/Main';
import Title from '../../layout/wrappers/Title';
import Error from './Error';
import InfoBody from './InfoBody';
import InfoTitle from './InfoTitle';

export default function Info() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [load, setLoad] = React.useState(false);

  try {
    React.useEffect(() => {
      async function getInfo() {
        setLoad(true);
        await axios
          .get('https://api-educa-movel.herokuapp.com/questions')
          .then((response) => {
            setData(response.data);
            filterInfo(response.data);
          });
        setLoad(false);
      }
      getInfo();
    }, []);
  } catch (err) {
    setError(err);
  }

  function filterInfo({ data }) {
    console.log(data);
    return null;
  }

  if (error)
    return (
      <Main>
        <Body>
          <Title title="Aguarde..." />
          <Error>
            <Loader />
          </Error>
        </Body>
      </Main>
    );

  return (
    <Main>
      <Body>
        <Title title="Sabia que ..." />
        {load ? (
          <Error>
            <Loader />
          </Error>
        ) : data ? (
          <BgWhite>
            <InfoTitle title="{data[0].title}" />
            <InfoBody body="{data[0].content}" />
          </BgWhite>
        ) : null}
      </Body>
    </Main>
  );
}
