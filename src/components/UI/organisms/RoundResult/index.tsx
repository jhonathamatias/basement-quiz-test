import Button from '../../atoms/Button';
import CircularProgressBase from '../../molecules/CircularProgressBase';
import { Container, Content, Header, Title } from './styles';

interface RoundResultProps {
  totalQuestions: number;
  totalCorrectAnswers: number;
  onFinish: () => void;
}

export default function RoundResult({
  totalQuestions,
  totalCorrectAnswers,
  onFinish,
}: RoundResultProps) {
  return (
    <Container>
      <Header>
        <Title>Resultado</Title>
      </Header>
      <Content>
        <CircularProgressBase
          progressValue={totalCorrectAnswers}
          progressEndValue={totalQuestions}
        />
      </Content>
      <Button onClick={onFinish}>Fim</Button>
    </Container>
  );
}
