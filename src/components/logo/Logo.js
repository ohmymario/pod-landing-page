import LogoStyles from "./LogoStyles";
import logo from "../../assets/desktop/logo.svg";

const Logo = () => {
  return (
    <LogoStyles>
      <img src={logo} alt="Pod Home" />
    </LogoStyles>
  );
};

export default Logo;
