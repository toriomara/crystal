import { Box, Button, Heading } from '@chakra-ui/react';
import { Benefits } from '../components/Benefits/Index';
import { Showcase } from '../components/Showcase/Showcase';
import { GridBlurredBackdrop } from '../components/Testimonials';
import { Description } from '../components/Description/Description';
import { ClientLine } from '../components/ClientLine';
import { useRouter } from 'next/router';

import CallToActionWithIllustration from '../components/HomePage/CTA';
import CallToActionWithVideo from '../components/HomePage/CTA2';
import Banner from '../components/ui/Banner';

const Index = () => {
  const router = useRouter();
  return (
    <Box>
      <CallToActionWithIllustration />
      <CallToActionWithVideo />
      {/* <Carousel /> */}
      <Description />
      <Benefits />
      <Showcase />
      <GridBlurredBackdrop />
      <ClientLine />
    </Box>
  );
};

export default Index;
