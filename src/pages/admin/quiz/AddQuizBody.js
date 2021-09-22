import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  padding: 0.5rem 1rem;

  .radio-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .radio-label {
    display: inline;

    cursor: pointer;
    padding: 0.5rem 1rem;
  }
  .input-radio {
    margin-right: 0.5rem;
    border-color: var(--color-yellow-1);
  }
  .radio-legend {
    text-transform: uppercase;
  }

  .quiz-form {
    padding: 0 1rem;
    margin-bottom: 0.5rem;
  }
  .form-group {
    width: 100%;
    margin-top: 0.5rem;
  }
  .quiz-label {
    color: var(--color-gray-1);
    display: block;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }
  .form-input {
    color: var(--color-black-1);
    font-size: 1rem;
    background: var(--bg-gray-2);
    border-radius: 6px;
    width: 100%;
    padding: 0.5rem 1rem;

    &:focus {
      color: var(--color-white-1);
      background: var(--bg-gray-1);
    }
  }

  .form-input-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .input-radio-wrapper {
    background: var(--bg-white-2);
    border-radius: 0px 4px 4px 0px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 3rem;
    position: absolute;
    right: 0;

    & > input[type='radio'] {
      cursor: pointer;
      margin: 0;
      padding: 1rem;
      width: 40%;
      height: 40%;
    }
    &:hover {
      background: var(--bg-gray-1);
    }
  }

  .btn-submit {
    font-size: 1rem;
    color: var(--color-white-1);
    background: var(--bg-gray-1);

    &:hover {
      background: var(--bg-yellow-1);
    }
  }

  .required {
    color: red;
  }
  .align-right {
    text-align: right;
  }
`;

export default function PostQuiz() {
  const radioValues = [
    { value: 'bdq', name: 'category' },
    { value: 'tmcel', name: 'category' },
    { value: 'vodacom', name: 'category' },
    { value: 'tech', name: 'category' },
  ];
  const inputList = [
    { position: 'a', choice: 'alt1', radioValue: 'alt1', radioName: 'alt' },
    { position: 'b', choice: 'alt2', radioValue: 'alt2', radioName: 'alt' },
    { position: 'c', choice: 'alt3', radioValue: 'alt3', radioName: 'alt' },
    { position: 'd', choice: 'alt4', radioValue: 'alt4', radioName: 'alt' },
  ];
  return (
    <StyledForm>
      <div className={`radio-container`}>
        {radioValues.map((radio) => (
          <label className={`radio-label`} key={radio.value}>
            <input
              type="radio"
              value={radio.value}
              name={radio.name}
              className={`input-radio`}
            />
            <span className={`radio-legend`}>{radio.value}</span>
          </label>
        ))}
      </div>

      <div className={'quiz-form'}>
        <div className={`form-group`}>
          <label className={`quiz-label`}>
            <span className={`required`}>*</span> Questao
          </label>
          <input type="text" className={`form-input`} required />

          {inputList.map((input) => (
            <div className={`form-group`} key={input.position}>
              <label className={`quiz-label`}>
                <span className={`required`}>*</span>{' '}
                {`Alternativa ${input.position}`}
              </label>
              <div className={`form-input-wrapper`}>
                <input type="text" className={`form-input`} required />

                <label className={`input-radio-wrapper`}>
                  <input
                    type="radio"
                    value={input.radioValue}
                    name={input.radioName}
                    className={`input-radio`}
                  />
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className={`form-group align-right`}>
          <button type="submit" className={`btn btn-sm btn-submit`}>
            Cadastrar
          </button>
        </div>
      </div>
    </StyledForm>
  );
}
