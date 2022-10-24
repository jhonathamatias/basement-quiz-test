import { ReactNode } from 'react';
import styled from 'styled-components';

import Header from '../UI/organisms/Header';
import Main from '../UI/organisms/Main';

interface LayoutProps {
  children: ReactNode;
}

const LayoutContainer = styled.div`
  height: 100%;
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
    </LayoutContainer>
  );
}
