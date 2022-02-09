import styled from "styled-components";

const PodInfoStyles = styled.main`
  background-color: var(--bg);
  max-width: 723px;
  padding-top: 88px;
  padding-right: 58px;
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
  }

  p {
    color: var(--paragraph);
    font-size: 1.125rem;
    width: 66%;
    margin-bottom: 40px;
  }
`;

export default PodInfoStyles;
