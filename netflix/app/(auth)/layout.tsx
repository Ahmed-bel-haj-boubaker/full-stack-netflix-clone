import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1>hello</h1>
      {children}
    </>
  );
};

export default AuthLayout;
