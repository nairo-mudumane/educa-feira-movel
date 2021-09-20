import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import BgWhite from '../../layout/wrappers/BgWhite';

const StyledForm = styled.form`
  width: 100%;
  padding: 0.5rem 1rem;

  .input-info-label {
    color: var(--color-gray-1);
  }
  .post-info-input {
    color: var(--color-black-1);
    font-size: 1rem;
    background: var(--bg-gray-2);
    border-radius: 6px;
    width: 100%;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;

    &:focus {
      color: var(--color-white-1);
      background: var(--bg-gray-1);
    }
  }
  .post-info-textarea {
    height: 30vh;
    max-height: 40vh;
    resize: none;
  }
  .align-right {
    text-align: right;
  }

  .post-info-btn {
    margin-right: auto;
    font-size: 1rem;
    color: var(--color-white-1);
    background: var(--bg-gray-1);

    &:hover {
      background: var(--bg-yellow-1);
    }
  }
  .msg > p {
    color: #3f3;
    text-align: center;
  }
`;

export default function PostInfoForm() {
  const [error, setError] = React.useState(null);
  const [load, setLoad] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const fields = {
    title: '',
    content: '',
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoad(true);
    await postInfo();
    clearInput();
    setLoad(false);
  }
  async function postInfo() {
    fields.title = title;
    fields.content = content;
    await axios
      .post('http://localhost:8080/questions', fields)
      .then((response) => console.log(response))
      .catch((err) => {
        setError(err);
        console.log(error);
      });
  }
  function clearInput() {
    setTitle('');
    setContent('');
  }

  return (
    <BgWhite>
      <StyledForm method="POST" onSubmit={handleSubmit}>
        {/* <div className={`msg animeTop`}>
          {load ? <p>Enviando...</p> : <p>Enviado!</p>}
        </div> */}
        <p className={`input-info-label`}>Titulo</p>
        <input
          type="text"
          className={`post-info-input`}
          onChange={({ target }) => setTitle(target.value)}
        />
        <p className={`input-info-label`}>Conteudo</p>
        <textarea
          className={`post-info-input post-info-textarea`}
          onChange={({ target }) => setContent(target.value)}
        ></textarea>

        <div className={`align-right`}>
          <button type="submit" className={`btn btn-sm post-info-btn`}>
            Cadastrar
          </button>
        </div>
      </StyledForm>
    </BgWhite>
  );
}
