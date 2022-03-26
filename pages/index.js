import {Box} from '@chakra-ui/react'
import { Benefits } from '../components/Benefits/Index'
import CallToActionWithIllustration from '../components/HomePage/CTA'
import CallToActionWithVideo from '../components/HomePage/CTA2'
import GridBlurredBackdrop from '../components/Testimonials'

const Index = () => {
  return (
      <Box>
        {/* <CallToActionWithIllustration/>
        <CallToActionWithVideo/>
        <Carousel/> */}
        <Benefits/>
        <GridBlurredBackdrop/>
      </Box>
  )
}

export default Index
