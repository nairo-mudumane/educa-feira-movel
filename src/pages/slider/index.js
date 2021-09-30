import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import Main from '../../layout/wrappers/Main';
import Welcome from '../home';
import Info from '../info/';
import Quiz from '../quiz/';

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
  return (
    <Main>
      <StyledSlider>
        <Carousel infiniteLoop={true} useKeyboardArrows={false} autoPlay={true}>
          <Welcome />
          <Info />
          <Quiz />
        </Carousel>
      </StyledSlider>
    </Main>
  );
}
