import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import BgWhite from '../../../layout/wrappers/BgWhite';

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

    &:hover {
      opacity: 0.7;
    }
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
  .msg-red > p {
    color: red;
  }
  .msg-yellow > p {
    color: var(--color-yellow-1);
  }
`;

export default function PostInfoForm() {
  const [error, setError] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const titleRef = React.useRef();
  const contentRef = React.useRef();
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
      .post('https://api-educa-movel.herokuapp.com/curiosity', fields)
      .then((response) => console.log(response))
      .catch((err) => {
        setError(err);
        console.log(error);
      });
    setDone(true);
  }
  function clearInput() {
    titleRef.current.value = '';
    contentRef.current.value = '';
  }

  React.useEffect(() => {
    setTimeout(() => setDone(false), '5000');
  }, [done]);

  return (
    <BgWhite>
      <StyledForm method="POST" onSubmit={handleSubmit}>
        {load ? (
          <div className={`msg msg-yellow animeTop`}>
            <p>Enviando...</p>
          </div>
        ) : done ? (
          <div className={`msg animeTop`}>
            <p>Enviado!</p>
          </div>
        ) : error ? (
          <div className={`msg msg-red animeTop`}>
            <p>Erro!</p>
          </div>
        ) : null}
        <p className={`input-info-label`}>Titulo</p>
        <input
          autoComplete="off"
          required
          type="text"
          className={`post-info-input`}
          onChange={({ target }) => setTitle(target.value)}
          ref={titleRef}
        />
        <p className={`input-info-label`}>Conteudo</p>
        <textarea
          maxLength={2500}
          autoComplete="off"
          required
          className={`post-info-input post-info-textarea`}
          onChange={({ target }) => setContent(target.value)}
          ref={contentRef}
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
