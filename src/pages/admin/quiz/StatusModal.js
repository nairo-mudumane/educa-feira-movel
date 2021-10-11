import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--bg-white-1);
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0.5);

  width: 8rem;
  height: 3rem;
  padding: 0.5rem;

  position: fixed;
  top: 6rem;
  right: 1rem;
  z-index: 101;

  .modal-error {
    background: red;
  }
  .modal-loading {
    background: orange;
  }
  .modal-sucsses {
    background: green;
  }
`;

/* 
verificar slider
gestao de erros
tuturial do aplicativo -
testes finais
tv de upload
*/

export default function StatusModal({ load, data, error, done }) {
  return (
    <>
      {load ? (
        <StyledModal className={`animeTop modal-loading`}>
          <p className={`no-margin no-padding`}>Enviando...</p>
        </StyledModal>
      ) : done ? (
        <StyledModal className={`animeTop modal-sucsses`}>
          <p className={`no-margin no-padding`}>Enviado!</p>
        </StyledModal>
      ) : (
        <StyledModal className={`animeTop modal-error`}>
          <p className={`no-margin no-padding`}>Erro ao enviar!</p>
        </StyledModal>
      )}
    </>
  );

  /* if (error)
    return (
      <StyledModal className={`animeTop modal-error`}>
        <p className={`no-margin no-padding`}>Erro ao enviar!</p>
      </StyledModal>
    );

  return (
    <>
      {load && (
        <StyledModal className={`animeTop modal-loading`}>
          <p className={`no-margin no-padding`}>Enviando...</p>
        </StyledModal>
      )}

      {data && (
        <StyledModal className={`animeTop modal-sucsses`}>
          <p className={`no-margin no-padding`}>Enviado!</p>
        </StyledModal>
      )}
    </>
  ); */
}
