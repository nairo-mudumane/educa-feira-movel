import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { RiImageAddLine } from 'react-icons/ri';
import BgWhite from '../../../layout/wrappers/BgWhite';

const StyledForm = styled.form`
  width: 100%;
  padding: 0.5rem 1rem;

  .form-group {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
    align-items: flex-start;
  }
  .form-control {
    flex: 1 1 14rem;
    border: 0;
    padding: 0;
  }
  .form-control-title {
    flex: 1 1 40rem;
    margin-right: 0.5rem;
  }
  .label {
    color: var(--color-gray-1);
  }
  .input {
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
  .textarea {
    height: 30vh;
    max-height: 40vh;
    resize: none;
  }
  .align-right {
    text-align: right;
  }
  .btn-post {
    margin-right: auto;
    font-size: 1rem;
    color: var(--color-white-1);
    background: var(--bg-gray-1);

    &:hover {
      background: var(--bg-yellow-1);
    }
  }

  .input-file {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .input-title {
    padding: 0.91rem;
  }
  .file-btn {
    font-size: 1.5rem;
    color: var(--color-yellow-1);
    transform: translateY(-4px);
  }
  .file-name {
    flex: 1;
    margin-left: 0.5rem;
  }
`;

export default function PostNewsForm() {
  const formData = {};
  const URL_PATH = 'http://localhost:8080/blog';
  const [imgName, setImgName] = React.useState(null);
  const [imgFile, setImgFile] = React.useState(null);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  function onFileChange(event) {
    let imgObjectURL = event.target.files[0];
    setImgFile(imgObjectURL);
    setImgName(event.target.files[0].name);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    formData['title'] = title;
    formData['content'] = content;
    formData['imgFile'] = imgFile;

    await axios
      .post(URL_PATH, formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <BgWhite>
      <StyledForm onSubmit={handleSubmit}>
        <div className={`form-group`}>
          <div className={`form-control form-control-title`}>
            <label htmlFor="title" className={`label`}>
              Titulo
            </label>
            <input
              type="text"
              id="title"
              className={`input input-title`}
              required
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div className={`form-control`}>
            <span className="label">Capa</span>
            <label htmlFor="img" className={`input input-file`}>
              <input
                type="file"
                id="img"
                accept="image/png, image/jpeg"
                // accept="image/jpeg"
                // accept="image/*"
                className={`hidden`}
                required
                onChange={onFileChange}
              />
              <span className={`file-btn`}>
                <RiImageAddLine />
              </span>
              <span className={`file-name`}>
                {imgName ? imgName : 'Nenhuma imagem seleccionada.'}
              </span>
            </label>
          </div>
        </div>
        <div className={`form-group`}>
          <label htmlFor="content" className={`label`}>
            Conteudo
          </label>
          <textarea
            className={`input textarea`}
            required
            onChange={({ target }) => setContent(target.value)}
          ></textarea>
        </div>
        <div className={`align-right`}>
          <button type="submit" className={`btn btn-sm btn-post`}>
            Cadastrar
          </button>
        </div>
      </StyledForm>
    </BgWhite>
  );
}
