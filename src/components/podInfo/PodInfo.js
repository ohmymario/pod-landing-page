import AccessForm from "../accessForm/AccessForm";
import PodInfoStyles from "./PodInfoStyles";

const PodInfo = () => {
  return (
    <PodInfoStyles>
      <h1>Publish your podcasts everywhere.</h1>
      <p>
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
      <AccessForm />
    </PodInfoStyles>
  );
};

export default PodInfo;
