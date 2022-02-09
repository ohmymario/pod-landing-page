import CompaniesStyles from "./CompaniesStyles";
import spotify from "../../assets/logos/spotify.svg";
import apple from "../../assets/logos/apple-podcast.svg";
import google from "../../assets/logos/google-podcasts.svg";
import pocket from "../../assets/logos/pocket-casts.svg";

const Companies = () => {
  return (
    <CompaniesStyles>
      <img src={spotify} alt="Spotify" />
      <img src={apple} alt="Apple Podcast" />
      <img src={google} alt="Google Podcasts" />
      <img src={pocket} alt="Pocket Casts" />
    </CompaniesStyles>
  );
};

export default Companies;
