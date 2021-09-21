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
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [load, setLoad] = React.useState(false);

  const filterInfo = (list) => {
    console.log(list);
  };

  const getInfo = async () => {
    await axios
      .get('https://api-educa-movel.herokuapp.com/questions')
      .then((response) => {
        setData(response.data);
        filterInfo(data.data);
      })
      .catch((err) => setError(err));
  };

  React.useEffect(() => {
    setLoad(true);
    getInfo();
    setLoad(false);
  }, []);

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
            <InfoTitle title="Lorem ipsu" />
            <InfoBody body="Aliqua aute." />
          </BgWhite>
        ) : null}
      </Body>
    </Main>
  );
}
