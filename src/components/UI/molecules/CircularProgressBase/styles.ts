import styled from "styled-components";
import Star from "../../atoms/icons/Star";

interface CircularProgressProps {
  progress: number;
}

interface StarIconProps {
  active: boolean;
}

export const Container = styled.div`
  display: grid;
  width: 100%;
  place-items: center;
  background-color: transparent;
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const CircularProgress = styled.div<CircularProgressProps>`
  position: relative;
  width: 180px;
  height: 180px;
  background: conic-gradient(
    rgba(4, 211, 97, 1) ${({ progress }) => progress}deg,
    rgba(4, 211, 97, .1) 0deg
  );
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    height: 75%;
    width: 75%;
    background-color: rgb(32,32,36);
    border-radius: 50%;
  }
`;

export const ProgressValue = styled.div`
  position: relative;
  font-size: 30px;
`;

export const ContainerStar = styled.div`
  display: flex;
`;

export const StarIcon = styled(Star) <StarIconProps>`
  fill: ${({ active = false }) => active ? 'rgba(252, 186, 3, 1)' : 'rgba(252, 186, 3, .1)'};
  width: 80px;
  height: 80px;
`;
