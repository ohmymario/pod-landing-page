import AppStyles from "./AppStyles";
import Logo from "../logo/Logo";
import PodInfo from "../podInfo/PodInfo";
import Attribution from "../attribution/Attribution";
import Companies from "../companies/Companies";

function App() {
  return (
    <AppStyles>
      <Logo />
      <PodInfo />
      <Companies />
      <Attribution />
    </AppStyles>
  );
}

export default App;
