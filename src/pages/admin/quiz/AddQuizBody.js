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
    /* margin-top: 0.5rem; */
    margin-bottom: 0.3rem;
  }
  .quiz-label {
    color: var(--color-gray-1);
    display: block;
    text-transform: capitalize;
    margin-bottom: 0.2rem;
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
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 3rem;
    position: absolute;
    right: 0;
  }

  .radio-input {
    display: none;
  }
  .radio {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }
  .radio-radio {
    border-radius: 50%;
    border: 2px solid var(--bg-gray-2);

    width: 1.25em;
    height: 1.25em;
    padding: 2px;
    margin-right: 0.5rem;

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: var(--bg-yellow-1);

      transform: scale(0);
    }
  }

  .quiz-radio {
    &:hover {
      background: var(--bg-gray-1);
    }
  }
  .quiz-radio {
    &:hover > .radio-radio {
      background: var(--bg-white-1);
    }
  }
  .quiz-radio .radio-radio {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    margin: 0;
    background: transparent;

    &:hover {
      background: var(--bg-white-1);
    }
  }

  .radio-input:checked + .radio-radio {
    &:after {
      transform: scale(1);
    }
  }
  .quiz-radio:checked + .radio-radio {
    &:after {
      margin: 0;
      background: var(--bg-white-1);
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
    padding-top: 0.5rem;
  }
`;

export default function PostQuiz() {
  const radioValues = [
    { value: 'bdq' },
    { value: 'tmcel' },
    { value: 'vodacom' },
    { value: 'tech' },
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
          <label htmlFor={radio.value} className={`radio`} key={radio.value}>
            <input
              type="radio"
              id={radio.value}
              value={radio.value}
              name="category"
              className={`radio-input`}
            />
            <div className={`radio-radio`} />{' '}
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
              <label className={`radio-label`}>
                <span className={`required`}>*</span>{' '}
                {`Alternativa ${input.position}`}
              </label>
              <div className={`form-input-wrapper`}>
                <input type="text" className={`form-input`} required />

                <label className={`input-radio-wrapper quiz-radio`}>
                  <input
                    type="radio"
                    value={input.radioValue}
                    name={input.radioName}
                    className={`radio-input`}
                  />
                  <div className={`no-margin radio-radio`} />
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className={`align-right`}>
          <button type="submit" className={`btn btn-sm btn-submit`}>
            Cadastrar
          </button>
        </div>
      </div>
    </StyledForm>
  );
}
