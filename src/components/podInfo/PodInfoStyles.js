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
  }

  p {
    color: var(--paragraph);
    font-size: 1.125rem;
    max-width: 445px;
    margin-bottom: 41px;
    line-height: 28px;
  }

  @media (max-width: 1024px) {
    padding-top: 93px;
    max-width: 635px;
  }

  @media (max-width: 620px) {
    padding-top: 62px;
  }
`;

export default PodInfoStyles;
