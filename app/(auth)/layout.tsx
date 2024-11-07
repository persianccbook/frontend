import { ReactNode } from "react";
import FormLayout from "../components/FormLayout";

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return <FormLayout>{children}</FormLayout>;
};

export default AuthLayout;
