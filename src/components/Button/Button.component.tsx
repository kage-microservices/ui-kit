import { ReactNode } from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};
