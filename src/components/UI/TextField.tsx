import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Label from './Label';

const Container = styled.div`
  margin-bottom: 25px;
`;

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function TextField({ label, ...rest }: TextFieldProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...rest} />
    </Container>
  );
}
