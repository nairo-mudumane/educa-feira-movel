import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSwitcher = styled.div`
  /* display: none; */
`;

export default function RouteSwitcher() {
  const links = [];
  //   let timer = '3000';
  //   const [count, setCount] = React.useState(0);
  const hrefs = [
    { to: '/', id: 'home' },
    { to: 'info', id: 'info' },
    { to: 'quiz', id: 'quiz' },
  ];
  hrefs.forEach((link) => {
    links.push(document.getElementById(link.id));
  });

  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (count >= hrefs.length) {
        setCount((count) => (count = -1));
      }
      setCount((count) => count + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [count, hrefs.length]);

  return (
    <StyledSwitcher>
      {hrefs.map((href) => (
        <NavLink to={href.to} id={href.id} key={href.to}>
          {href.id}
        </NavLink>
      ))}
      <p>{count}</p>
    </StyledSwitcher>
  );
}
