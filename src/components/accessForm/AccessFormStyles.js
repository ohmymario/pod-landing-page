import styled from "styled-components";

const AccessFormStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: 3.5rem;
  max-width: 427px;

  @media only screen and (max-width: 600px) {
    grid-row-gap: 16px;
    width: 100%;
  }

  input,
  button {
    border: none;
    border-radius: 40px;
    font-weight: 700;
    font-size: 0.875rem;
  }

  input {
    color: var(--header);
    background-color: var(--form-bg);
    padding-left: 32px;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    &:focus {
      outline: 2px solid var(--header-secondary);
    }
    &::placeholder {
      color: var(--header);
      opacity: 0.5;
      letter-spacing: 0.25px;
      vertical-align: sub;
    }
  }

  button {
    color: var(--bg);
    background-color: var(--header-secondary);
    cursor: pointer;
    padding: 16px 27px;
    transition: background-color 0.35s;

    grid-column: 2 / -1;
    grid-row: 1 / -1;
    margin: 5px;
    &:hover {
      background-color: #b3ffe2;
    }

    @media only screen and (max-width: 600px) {
      grid-column: initial;
      grid-row: initial;
      margin: 0;
    }
  }
`;

export default AccessFormStyles;
