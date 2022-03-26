import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  Center,
  Skeleton,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaViber,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

import { FcGoogle } from "react-icons/fc";
import { SiTwitter, SiMessenger, SiTelegram } from "react-icons/si";

const MotionButton = motion(Button);

const ContactForm = () => {
  return (
    <SimpleGrid columns={4} columnGap={3}>
      <GridItem
        colSpan={1}
        justifyContent="center"
        border="1px solid #EDF2F7"
        rounded={4}
      >
        <Center p={8}>
          <Stack spacing={4} w="full" align={"center"} maxW={"md"}>
            <VStack spacing={3} alignItems="center">
              <Heading variant="h3" >
                Свяжитесь с нами
              </Heading>
              <Text>С удовольствием ответим на все Ваши вопросы</Text>
            </VStack>
            {/* Facebook */}
            <Button
            variant='primary'
              w={"full"}
              colorScheme={"facebook"}
              leftIcon={<FaFacebook />}
              size="sm"
            >
              <Center>
                <Text>Send to Facebook</Text>
              </Center>
            </Button>

            {/* Google */}
            <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>

            {/* LinkedIn */}
            <Button
              w={"full"}
              colorScheme={"messenger"}
              leftIcon={<SiTwitter />}
            >
              <Center>
                <Text>Send to Twitter</Text>
              </Center>
            </Button>

            {/* Messenger */}
            <Button
              w={"full"}
              colorScheme={"messenger"}
              leftIcon={<SiMessenger />}
            >
              <Center>
                <Text>Send to Messenger</Text>
              </Center>
            </Button>
            <Button
              w={"full"}
              bgColor="#0088cc"
              color="white"
              leftIcon={<SiTelegram />}
            >
              <Center>
                <Text>Send to Telegram</Text>
              </Center>
            </Button>
          </Stack>
        </Center>
      </GridItem>
      <GridItem colSpan={3}>
        <Box border="1px solid #EDF2F7" rounded={4}>
          <AspectRatio ratio={16 / 9} borderRadius={4}>
            <iframe
              fallback={<Skeleton />}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2213.8748382895697!2d44.52841130989059!3d48.710150039659084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411acb2d69616541%3A0x7ac494b9e736bc95!2z0KTQo9Cb0JvQldCg0JXQnSwg0L3QsNGD0YfQvdC-LdC_0YDQvtC40LfQstC-0LTRgdGC0LLQtdC90L3QvtC1INC-0LHRitC10LTQuNC90LXQvdC40LU!5e0!3m2!1sru!2sru!4v1641906649031!5m2!1sru!2sru"
              /*width="800" height="600" style="border:0;" allowFullScreen="" loading="lazy"*/
            />
          </AspectRatio>
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default ContactForm;
