import styled from "styled-components";

const LogoStyles = styled.header`
  margin-bottom: 103px;
  img {
    display: block;
  }

  @media (max-width: 1024px) {
    margin-bottom: 152px;
  }

  @media (max-width: 620px) {
    margin-bottom: 50px;
  }

  @media (max-width: 550px) {
    margin-bottom: 0;
    img {
      margin: 0 auto;
    }
  }
`;

export default LogoStyles;
