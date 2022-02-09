import logo from "../../assets/desktop/logo.svg";
import LogoStyles from "./LogoStyles";

const Logo = () => {
  return (
    <LogoStyles>
      <img src={logo} alt="Pod Home" />
    </LogoStyles>
  );
};

export default Logo;
