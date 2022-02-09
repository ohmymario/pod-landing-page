import styled from "styled-components";

// 29px height
// ~ 40 px in between each

const CompaniesStyles = styled.div`
  display: flex;
  align-items: center;

  img {
    display: block;

    /* used https://codepen.io/sosuke/pen/Pjoqqp?editors=0110 */
    filter: brightness(0) saturate(100%) invert(41%) sepia(15%) saturate(957%)
      hue-rotate(187deg) brightness(91%) contrast(90%);

    &:not(:last-child) {
      margin-right: 40px;
    }

    &:nth-child(3) {
      margin-right: 27px;
    }
  }
`;

export default CompaniesStyles;
