import Head from 'next/head'
import {Box, Container, Flex} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Navbar from '../components/Navbar/Navbar'
import {Footer} from '../components/Footer/Footer'

const MainWrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  //flex: 1 1 auto;
  min-height: 100vh;
`

const Main = ({children, router, ...props}) => {
  return (
    <MainWrapper as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Korund's homepage"/>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <title>Korund | {props.title}</title>
      </Head>
      <Navbar path={router.asPath}/>
      <Container flex={'1 0'} maxW="container.xl" mx='auto' my={70}>
        {children}
      </Container>
      <Footer/>
    </MainWrapper>
  )
}

export default Main
