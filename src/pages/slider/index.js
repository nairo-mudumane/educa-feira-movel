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
  /* const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ]; */
  return (
    <Main>
      <StyledSlider>
        <Carousel>
          <Welcome />
          <Info />
          <Quiz />
        </Carousel>
      </StyledSlider>
    </Main>
  );
}

/* 

React.useEffect(() => {
    const interval = setInterval(() => {
      // if (count >= hrefs.length) {
      //   setCount((count) => (count = -1));
      // }
      setCount((count) => count + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

*/
