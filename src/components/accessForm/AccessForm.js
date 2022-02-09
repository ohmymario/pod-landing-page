import AccessFormStyles from "./AccessFormStyles";

const AccessForm = () => {
  return (
    <AccessFormStyles>
      <input type="email" placeholder="Email address" />
      <button>Request Access</button>
    </AccessFormStyles>
  );
};

export default AccessForm;
