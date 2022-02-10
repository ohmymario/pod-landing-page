import AppStyles from "./AppStyles";
import Logo from "../logo/Logo";
import PodInfo from "../podInfo/PodInfo";
import Attribution from "../attribution/Attribution";

function App() {
  return (
    <AppStyles>
      <Logo />
      <PodInfo />
      {/* TEMP REMOVAL TO GET BASE STYLES DONE */}
      {/* <Attribution /> */}
    </AppStyles>
  );
}

export default App;
