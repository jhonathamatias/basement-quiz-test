import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 70px;
`;

export default function Header() {
  return (
    <Container>
      <h1>Quiz App</h1>
    </Container>
  );
}
