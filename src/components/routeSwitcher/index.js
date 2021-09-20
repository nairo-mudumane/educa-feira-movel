import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSwitcher = styled.div`
  /* display: none; */
`;

export default function RouteSwitcher() {
  const hrefs = [
    { to: '/', class: 'home' },
    { to: 'info', class: 'info' },
    { to: 'quiz', class: 'quiz' },
  ];

  return (
    <StyledSwitcher>
      {hrefs.map((href) => (
        <NavLink to={href.to} className={href.class} key={href.to} />
      ))}
    </StyledSwitcher>
  );
}
