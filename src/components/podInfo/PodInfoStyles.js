import styled from "styled-components";

const PodInfoStyles = styled.main`
  background-color: var(--bg);
  max-width: 723px;
  padding-top: 88px;
  font-weight: 300;
  h1 {
    font-size: 3.25rem;
    font-weight: 300;
    line-height: 62px;
    text-transform: uppercase;
    margin-bottom: 24px;
    color: var(--header);
    span {
      color: var(--header-secondary);
    }
    @media (max-width: 1024px) {
      font-size: 3rem;
      margin-bottom: 31px;
      line-height: 56px;
    }
    @media (max-width: 550px) {
      font-size: 1.625rem;
      line-height: 38px;
      margin-bottom: 16px;
    }
  }

  p {
    color: var(--paragraph);
    font-size: 1.125rem;
    max-width: 445px;
    margin-bottom: 41px;
    line-height: 28px;

    @media (max-width: 550px) {
      font-size: 0.9375rem;
      line-height: 25px;
      margin-bottom: 33px;
    }
  }

  @media (max-width: 1024px) {
    padding-top: 93px;
    max-width: 635px;
  }

  @media (max-width: 620px) {
    padding-top: 57px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: none;

    .form-comp {
      display: grid;
      gap: 48px;
      width: 100%;

      > *:first-child {
        order: 1;
      }
    }
  }

  @media (max-width: 550px) {
    padding: 57px 24px 0px 24px;
  }
`;

export default PodInfoStyles;
