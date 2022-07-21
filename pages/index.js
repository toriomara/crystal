import { Box, Heading } from '@chakra-ui/react';
import { Benefits } from '../src/components/Benefits/Index';
import CallToActionWithIllustration from '../src/components/HomePage/CTA';
import CallToActionWithVideo from '../src/components/HomePage/CTA2';
import Banner from '../src/components/ui/Banner';
import { Showcase } from '../src/components/Showcase/Showcase';
import GridBlurredBackdrop from '../src/components/Testimonials';
import { Description } from '../src/components/Description/Description';
import ClientLine from '../src/components/ClientLine';

const Index = () => {
  return (
    <Box>
      {/* <CallToActionWithIllustration /> 
      <CallToActionWithVideo/>
      <Carousel/> */}
      <Description />
      <Benefits />
      <ClientLine />
      <Showcase />
      <GridBlurredBackdrop />
    </Box>
  );
};

export default Index;
