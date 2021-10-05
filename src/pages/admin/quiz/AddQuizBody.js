import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StatusModal from './StatusModal';

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
    padding: 0.5rem 0;
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
  const URL_PATH = 'https://api-educa-movel.herokuapp.com/quiz';
  const [quest, setQuest] = React.useState('');
  const [inputValues, setInputValues] = React.useState({});
  const [radioCategory, setRadioCategory] = React.useState('bdq');
  const [radioCorrectAnswer, setRadioCorrectAnswer] = React.useState('alt1');

  const [data, setData] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [load, setLoad] = React.useState(false);

  const radioCategoryValues = [
    { value: 'bdq' },
    { value: 'tmcel' },
    { value: 'vodacom' },
    { value: 'tech' },
  ];
  const inputList = [
    { id: 'answer1', position: 'a', radioValue: 'answer1', radioName: 'alt' },
    { id: 'answer2', position: 'b', radioValue: 'answer2', radioName: 'alt' },
    { id: 'answer3', position: 'c', radioValue: 'answer3', radioName: 'alt' },
    { id: 'answer4', position: 'd', radioValue: 'answer4', radioName: 'alt' },
  ];

  function handleInputChanges({ target }) {
    const { id, value } = target;
    setInputValues({
      ...inputValues,
      [id]: value,
    });
  }
  async function submitForm(event) {
    event.preventDefault();
    setLoad(true);
    inputValues['question'] = quest;
    inputValues['category'] = radioCategory;
    inputValues['correctAnswer'] = radioCorrectAnswer;

    await axios
      .post(URL_PATH, inputValues)
      .then((response) => {
        setData(response.data);
        const res = response.data;
        if (res.error) {
          setError(true);
          setDone(false);
        } else {
          setDone(true);
        }
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
    setTimeout(() => {
      setData(false);
    }, 5000);
  }
  return (
    <StyledForm onSubmit={submitForm}>
      <StatusModal load={load} done={done} data={data} error={error} />

      <div className={`radio-container`}>
        {radioCategoryValues.map((radio) => (
          <label htmlFor={radio.value} className={`radio`} key={radio.value}>
            <input
              type="radio"
              id={radio.value}
              value={radio.value}
              onChange={({ target }) => setRadioCategory(target.value)}
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
          <label htmlFor="questao" className={`quiz-label`}>
            <span className={`required`}>*</span> Questao
          </label>
          <input
            type="text"
            id="questao"
            className={`form-input`}
            onChange={({ target }) => setQuest(target.value)}
            required
          />

          {inputList.map((input) => (
            <div className={`form-group`} key={input.position}>
              <label htmlFor={input.position} className={`radio-label`}>
                <span className={`required`}>*</span>{' '}
                {`Alternativa ${input.position}`}
              </label>
              <div className={`form-input-wrapper`}>
                <input
                  type="text"
                  id={input.id}
                  onChange={handleInputChanges}
                  className={`form-input`}
                  required
                />

                <label className={`input-radio-wrapper quiz-radio`}>
                  <input
                    type="radio"
                    id={input.id}
                    value={input.radioValue}
                    name={input.radioName}
                    onChange={({ target }) =>
                      setRadioCorrectAnswer(target.value)
                    }
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
