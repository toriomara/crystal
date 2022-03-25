import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Heading,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import { useBreakpointValue } from '@chakra-ui/react'

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

const About = () => {
  const variant = useBreakpointValue({ base: 'outline', bsm: 'solid' })
  return (
    <Box mt={14}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <Heading fontSize='46px' fontWeight="900">
              Boost your<br/>software development<br/> like never before
            </Heading>
            <Button >Call To Action</Button>
            <Button variant='secondary'>Call To Action</Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p fontSize={18}>
              Provide your customers a story they would enjoy keeping in mind
              the objectives of your website. Pay special attention to the tone
              of voice.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"First Feature"}
          text={"Short text describing one of you features/service"}
        />
        <Feature
          heading={"Second Feature"}
          text={"Short text describing one of you features/service"}
        />
        <Feature
          heading={"Third Feature"}
          text={"Short text describing one of you features/service"}
        />
        <Feature
          heading={"Fourth Feature"}
          text={"Short text describing one of you features/service"}
        />
      </Grid>
    </Box>
  );
};

export default About;
