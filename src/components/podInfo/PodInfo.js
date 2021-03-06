import AccessForm from "../accessForm/AccessForm";
import PodInfoStyles from "./PodInfoStyles";
import Companies from "../companies/Companies";

const PodInfo = () => {
  return (
    <PodInfoStyles>
      <h1>
        <span>Publish your podcasts</span> everywhere.
      </h1>
      <p>
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
      <div className="form-comp">
        <AccessForm />
        <Companies />
      </div>
    </PodInfoStyles>
  );
};

export default PodInfo;
