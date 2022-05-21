import { Box } from '@chakra-ui/react';
import { Benefits } from '../components/Benefits/Index';
import CallToActionWithIllustration from '../components/HomePage/CTA';
import CallToActionWithVideo from '../components/HomePage/CTA2';
import { Showcase } from '../components/Showcase/Showcase';
import GridBlurredBackdrop from '../components/Testimonials';
import Banner from '../components/ui/Banner';
import {Description} from '../components/Description/Description'

const Index = () => {
  return (
    <Box>
      <CallToActionWithIllustration />
      <Description/>
      {/*<CallToActionWithVideo/>
        <Carousel/> */}
      <Benefits />
      <Showcase />
      <GridBlurredBackdrop />
    </Box>
  );
};

export default Index;
