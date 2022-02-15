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

    @media (max-width: 550px) {
      &:not(:last-child) {
        margin-right: 23px;
      }

      &:nth-child(3) {
        margin-right: 16px;
      }
    }
  }

  @media (max-width: 550px) {
    width: 100%;
    justify-content: center;

    img:nth-child(1) {
      width: 3.5rem;
    }
    img:nth-child(2) {
      width: 2.85rem;
    }
    img:nth-child(3) {
      width: 4.65rem;
    }
    img:nth-child(4) {
      width: 4.5rem;
    }
  }
`;

export default CompaniesStyles;
