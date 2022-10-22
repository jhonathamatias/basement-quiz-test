import { Container, Content, Header, OptionsButton, Title } from "./styles";

interface QuestionCardProps {
  question: string;
  options: { id: number, label: string }[];
  total: number;
  current: number;
  corrects: number;
  onSelect: (optionId: number) => void;
}

export default function QuestionCard({
  question,
  options,
  total,
  current,
  corrects,
  onSelect
}: QuestionCardProps) {
  return (
    <Container>
      <Header>
        <div>{current}/{total}</div>
        <div>Certas: {corrects}</div>
      </Header>
      <Content>
        <Title>
          {question}
        </Title>
        {options.map((option, index) => (
          <OptionsButton
            key={index}
            onClick={() => onSelect(option.id)}
          >
            {option.label}
          </OptionsButton>
        ))}
      </Content>
    </Container>
  );
}