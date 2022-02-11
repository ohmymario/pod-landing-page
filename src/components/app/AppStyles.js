import styled from "styled-components";
import desktop from "../../assets/desktop/image-host.jpg";
import tablet from "../../assets/tablet/image-host.jpg";
import dots from "../../assets/desktop/bg-pattern-dots.svg";

const AppStyles = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding-top: 102px;
  position: relative;

  /* img from top 130px */
  /* 888x640 img full size on desktop */

  /* dots 718 from top */
  /* dots touching right side */
  /* dots 78 from bottom */

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 130px;
    width: 100%;
    height: 640px;
    background-image: url(${desktop});
    background-position: top right;
    background-repeat: no-repeat;

    @media (max-width: 1000px) {
      background-image: url(${tablet});
      height: 100%;
      top: 0;
    }
  }
  &:after {
    content: url(${dots});
    position: absolute;
    z-index: -1;
    right: 0;
    /* half the size of the dots */
    bottom: -52px;

    @media (max-width: 1000px) {
      position: fixed;
      left: 30px;
      bottom: 0;
    }
  }

  @media (max-width: 1440px) {
    width: initial;
    margin: 0 20px;
  }

  @media (max-width: 1000px) {
    margin: 0 0 0 40px;
    padding-top: 50px;
  }
`;

export default AppStyles;
