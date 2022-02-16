import styled from "styled-components";

const AccessFormStyles = styled.form`
  position: relative;
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: 3.5rem;
  max-width: 427px;
  margin-bottom: 64px;

  input,
  button {
    border: none;
    border-radius: 40px;
    font-size: 0.875rem;
  }

  input {
    /* hard to match font weight 😡 */
    font-weight: 400;
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
    }
  }

  button {
    color: var(--bg);
    font-weight: 700;
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

    @media (max-width: 620px) {
      grid-column: initial;
      grid-row: initial;
      margin: 0;
      padding: 15px 27px;
    }
  }

  .error-message {
    position: absolute;
    color: #fb3e3e;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 0;

    bottom: -24px;
    left: 32px;
  }

  @media (max-width: 620px) {
    max-width: initial;
    grid-template-columns: initial;
    grid-template-rows: 2.875rem;
    row-gap: 16px;
    width: 100%;
  }
`;

export default AccessFormStyles;
