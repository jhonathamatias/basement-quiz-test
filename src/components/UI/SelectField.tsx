import React from 'react';
import styled from 'styled-components';
import Label from './Label';
import Select, { SelectProps } from './Select';

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
