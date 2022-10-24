import React from "react";
import styled from "styled-components";
import Label from "../atoms/Label";
import Select, { SelectProps } from "../atoms/Select";

const Container = styled.div`
  margin-bottom: 25px;  
`;

interface SelectFieldProps extends SelectProps {
  label?: string;
}

export default function SelectField({ label, ...rest }: SelectFieldProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Select {...rest} />
    </Container>
  );
}