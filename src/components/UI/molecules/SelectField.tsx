import React from "react";
import styled from "styled-components";
import Select, { SelectProps } from "../atoms/Select";

const Container = styled.div`
  margin-bottom: 25px;  
`;

interface SelectFieldProps extends SelectProps { }

export default function SelectField({ ...rest }: SelectFieldProps) {
  return (
    <Container>
      <Select {...rest} />
    </Container>
  );
}