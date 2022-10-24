import styled from "styled-components";
import { breakpoints } from "../../../../utils/devices";
import Button from "../../atoms/Button";

export const Container = styled.div`
  width: 100%;
  background: rgb(32, 32, 36);
  border-radius: 5px;
  padding: 25px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h2`
  text-align: center;
  /* margin: 30px 0 30px 0; */
`

export const OptionsButton = styled(Button)`
  margin-bottom: 15px;
  text-transform: none;
`;

