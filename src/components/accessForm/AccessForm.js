import AccessFormStyles from "./AccessFormStyles";

const AccessForm = () => {
  return (
    <AccessFormStyles>
      <input type="email" placeholder="Email Address" />
      <button>Request Access</button>
    </AccessFormStyles>
  );
};

export default AccessForm;
