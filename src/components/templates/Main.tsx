import { ReactNode } from 'react';
import Container from '@components/UI/Container';

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
