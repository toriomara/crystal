import {Box, Container} from '@chakra-ui/react'
import CallToActionWithIllustration from '../components/HomePage/CTA'
import CallToActionWithVideo from '../components/HomePage/CTA2'
import Carousel from '../components/HomePage/Carousel'

const Index = () => {
  return (
      <Box maxW='xxl'>
        <CallToActionWithIllustration/>
        <CallToActionWithVideo/>
        <Carousel/>
      </Box>
  )
}

export default Index
