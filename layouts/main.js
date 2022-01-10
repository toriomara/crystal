import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Navbar from '../components/Navbar/Navbar'
import {Footer} from '../components/Footer/Footer'

const MainWrapper = styled(Box)`
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
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
        <title>Korund | {props.title}</title>
      </Head>
      <Navbar/>
      <Container flex={'1 0'} auto maxW="container.xl" pt={14}>
        {children}
      </Container>
      <Footer/>
    </MainWrapper>
  )
}

export default Main
