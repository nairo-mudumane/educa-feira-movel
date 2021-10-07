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

  /* .carousel {
    display: none;
  } */
  .rec-arrow {
    display: none;
  }
  .rec-pagination {
    display: none;
  }
`;

export default function Slider() {
  const interval = 1000;
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [load, setLoad] = React.useState(false);

  async function getInfo() {
    await axios
      // .get('http://localhost:8080/curiosity')
      .get('https://api-educa-movel.herokuapp.com/curiosity')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err || true);
      });
  }
  async function getQuiz() {}

  React.useEffect(() => {
    async function fetchData() {
      setLoad(true);
      await getInfo();
      await getQuiz();
      setLoad(false);
    }
    fetchData();
  }, []);

  return (
    <Main>
      <StyledSlider>
        {/* <Carousel
          interval={interval}
          infiniteLoop={true}
          autoPlay={true}
          showArrows={true}
          showIndicators={false}
          showThumbs={false}
        >
          <Welcome />
          <Info load={load} data={data} error={error} />
          <Quiz />
        </Carousel> */}
        <Quiz />
      </StyledSlider>
    </Main>
  );
}
