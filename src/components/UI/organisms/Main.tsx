import { ReactNode } from "react";
import Container from "../atoms/Container";

interface MainProps {
  children: ReactNode
}

export default function Main({ children }: MainProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}