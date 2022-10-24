import React from "react";
import styled from "styled-components";
import Input from "../atoms/Input";

const Container = styled.div`
  margin-bottom: 25px;  
`;

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function TextField({ ...rest }: TextFieldProps) {
  return (
    <Container>
      <Input {...rest}/>
    </Container>
  );
}