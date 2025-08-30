import React from "react";
const SignInComponent = React.lazy(() => import("@/components/main/signin/signinComponent"));

const SignIn = () => {
  return <SignInComponent />;
};

export default SignIn;
