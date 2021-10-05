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
          });
        setLoad(false);
      }
      getInfo();
    }, []);
  } catch (err) {
    setError(err);
  }
  return (
    <Main>
      <StyledSlider>
        <Carousel
          interval={1000}
          infiniteLoop
          autoPlay={false}
          showArrows
          showIndicators={false}
          showThumbs={false}
        >
          <Welcome />
          {data ? <Info load={load} data={data} error={error} /> : null}
          <Quiz />
        </Carousel>
      </StyledSlider>
    </Main>
  );
}
