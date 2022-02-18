import {Container, Flex} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Navbar from '../components/Navbar/Navbar'
import {Footer} from '../components/Footer/Footer'
import Meta from '../components/Meta'

const MainWrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  //flex: 1 1 auto;
  min-height: 100vh;
`

const Main = ({children, router, ...props}) => {
  return (
    <MainWrapper as="main">
      <Meta/>
      <Navbar path={router.asPath}/>
      <Container flex={'1 0'} maxW="container.xl" mx='auto' my={70}>
        {children}
      </Container>
      <Footer/>
    </MainWrapper>
  )
}

export default Main
