import styled from "styled-components";

// 29px height
// ~ 40 px in between each

const CompaniesStyles = styled.div`
  display: flex;
  align-items: center;

  img {
    display: block;

    &:not(:last-child) {
      margin-right: 40px;
    }

    &:nth-child(3) {
      margin-right: 27px;
    }
  }
`;

export default CompaniesStyles;
