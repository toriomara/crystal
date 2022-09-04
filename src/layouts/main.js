import { Container, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { Meta } from '../components/Meta';

const MainWrapper = styled(Flex)`
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 100%;
`;

export const Main = ({ children, router, ...props }) => {
  return (
    <MainWrapper>
      <Meta />
      <Navbar path={router.asPath} />
      <Container
        as='main'
        flex='1 0'
        maxW={{
          base: 'container.sm',
          md: 'container.sm',
          lg: 'container.md',
          xl: 'container.lg',
          '2xl': 'container.xl',
        }}
        mx='auto'
        my={70}
        px={4}
      >
        {children}
      </Container>
      <Footer />
    </MainWrapper>
  );
};
