import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Main from '../../layout/wrappers/Main';
import Welcome from '../home';
import Info from '../info/';
import Quiz from '../quiz/';

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
  return (
    <Main>
      <StyledSlider>
        <Carousel
          interval={3000}
          infiniteLoop={true}
          // autoPlay={true}
          showArrows={false}
          showIndicators={false}
        >
          <Welcome />
          <Info />
          <Quiz />
        </Carousel>
      </StyledSlider>
    </Main>
  );
}
