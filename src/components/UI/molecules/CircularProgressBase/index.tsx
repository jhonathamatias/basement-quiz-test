import { Container, CircularProgress, ProgressValue, StarIcon, ContainerStar } from "./styles";

interface CircularProgressBaseProps {
  progressValue: number;
  progressEndValue: number
}

export default function CircularProgressBase({ progressValue, progressEndValue }: CircularProgressBaseProps) {
  const deg = 360;
  const qtdStars = 3;

  const getProgress = (): number => {
    return (progressValue * deg) / progressEndValue;
  }

  const renderStars = () => {
    const activeStars = Math.round((progressValue * qtdStars) / progressEndValue);
    const desactiveStars = qtdStars - activeStars;
    const stars = [];

    for (let i = 0; i < activeStars; i++) {
      stars.push(<StarIcon key={Math.random()} active={'true'} />);
    }

    for (let i = 0; i < desactiveStars; i++) {
      stars.push(<StarIcon key={Math.random()} />);
    }

    return stars;
  }

  const renderProgressValue = () =>{
    if (progressValue !== undefined || progressEndValue !== undefined) {
      return `${progressValue}/${progressEndValue}`
    }

    return null;
  }

  return (
    <Container>
      <CircularProgress progress={getProgress()}>
        <ProgressValue>
          {renderProgressValue()}
        </ProgressValue>
      </CircularProgress>
      <ContainerStar>
        {renderStars()}
      </ContainerStar>
    </Container>
  );
}