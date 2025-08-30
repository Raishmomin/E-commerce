import React from "react";

const SignupComponent = React.lazy(
  () => import("../components/main/signup/signupComponent")
);
const SignUp = () => {
  return <SignupComponent />;
};

export default SignUp;
