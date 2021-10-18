import styled from 'styled-components';
const StyledTitle = styled.div`
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.2rem;
  .info-title {
    color: var(--color-gray-1);
    font-size: 2.5rem;
    text-transform: capitalize;
  }
`;

export default function InfoTitle({ title }) {
  return (
    <StyledTitle>
      <h3 className={`info-title no-margin animeTop`}>{title}</h3>
    </StyledTitle>
  );
}
