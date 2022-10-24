import { ReactNode } from 'react';
import Container from '../atoms/Container';

interface MainProps {
  children: ReactNode;
}

const styles = {
  container: {
    marginTop: '70px',
    height: '100%',
  },
};

export default function Main({ children }: MainProps) {
  return <Container style={styles.container}>{children}</Container>;
}
