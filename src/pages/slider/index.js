import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Main from '../../layout/wrappers/Main';
import Welcome from '../home';
import Info from '../info/';
import Quiz from '../quiz/';
import axios from 'axios';

const StyledSlider = styled.div`
  max-height: 80vh;

  .rec-arrow {
    display: none;
  }
  .rec-pagination {
    display: none;
  }
`;

export default function Slider() {
  const interval = 10000;
  const [infoData, setInfoData] = React.useState(null);
  const [infoError, setInfoError] = React.useState(false);
  const [infoLoad, setInfoLoad] = React.useState(false);

  const [rankData, setRankData] = React.useState(null);
  const [rankError, setRankError] = React.useState(false);

  async function getInfo() {
    await axios
      // .get('http://localhost:8080/curiosity')
      .get('https://api-educa-movel.herokuapp.com/curiosity')
      .then((response) => {
        setInfoData(response.data);
      })
      .catch((err) => {
        console.log(err);
        setInfoError(err || true);
      });
  }
  async function getRanking() {
    await axios
      .get('https://api-educa-movel.herokuapp.com/ranking')
      .then(({ data }) => {
        setRankData(data);
      })
      .catch((err) => {
        setRankError(err);
      });
  }

  React.useEffect(() => {
    async function fetchData() {
      setInfoLoad(true);
      await getInfo();
      setInfoLoad(false);
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    setInterval(() => {
      getRanking();
    }, 2000);
  }, []);

  return (
    <Main>
      <StyledSlider>
        <Carousel
          interval={interval}
          infiniteLoop={true}
          autoPlay={true}
          showArrows={true}
          showIndicators={false}
          showThumbs={false}
        >
          <Welcome />
          <Info load={infoLoad} data={infoData} error={infoError} />
          <Quiz data={rankData} error={rankError} />
        </Carousel>
      </StyledSlider>
    </Main>
  );
}
