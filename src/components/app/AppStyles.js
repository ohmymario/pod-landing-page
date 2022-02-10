import styled from "styled-components";
import desktop from "../../assets/desktop/image-host.jpg";
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
  }
  &:after {
    content: url(${dots});
    position: absolute;
    z-index: -1;
    right: 0;

    /* half the size of the dots */
    bottom: -52px;
  }
`;

export default AppStyles;
