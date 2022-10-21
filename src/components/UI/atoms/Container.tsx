import styled from 'styled-components';
import { breakpoints } from '../../../utils/devices';

export default styled.div`
  display: flex;
	margin: auto;
  width: 40%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 85%;
  }
`;