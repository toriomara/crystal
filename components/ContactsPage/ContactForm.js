import React from 'react'
import {AspectRatio, Box, Button, Flex, Grid, Heading, HStack, SimpleGrid, Spacer, Stack, Text} from '@chakra-ui/react'
import {FaFacebook, FaInstagram, FaTwitter, FaViber, FaWhatsapp, FaYoutube} from "react-icons/fa";
import {motion} from 'framer-motion'

const MotionButton = motion(Button)

const ContactForm = () => {
  return (
    <Grid
      my={4}
      direction={['row', 'column', 'column', 'column']}
      gap={4}
      templateColumns={{
        sm: 'repeat(2, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: '1fr 2fr',
      }}
    >
      <Grid justifyContent='center' border='1px solid #EDF2F7' rounded={4}>
        <Heading variant='h3' align='center' py={4}>Свяжитесь с нами</Heading>
        <MotionButton variant='inverse' animate={{x: 50}}>
          <FaWhatsapp/>
          <Text p={4}>WhatsApp</Text>
        </MotionButton>
        <Button variant='inverse'>
          <FaViber/>
          <Text p={4}>Viber</Text>
        </Button>
        <Button variant='inverse'>
          <FaInstagram/>
          <Text p={4}>Instagram</Text>
        </Button>
        <Button variant='inverse'>
          <FaYoutube/>
          <Text p={4}>Youtube</Text>
        </Button>
        <Button variant='inverse'>
          <FaTwitter/>
          <Text p={4}>Twitter</Text>
        </Button>
        <Button variant='inverse'>
          <FaFacebook/>
          <Text p={4}>Facebook</Text>
        </Button>
      </Grid>

      <Box border='1px solid #EDF2F7' rounded={4}>
        <AspectRatio ratio={16/9} borderRadius={4}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2213.8748382895697!2d44.52841130989059!3d48.710150039659084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411acb2d69616541%3A0x7ac494b9e736bc95!2z0KTQo9Cb0JvQldCg0JXQnSwg0L3QsNGD0YfQvdC-LdC_0YDQvtC40LfQstC-0LTRgdGC0LLQtdC90L3QvtC1INC-0LHRitC10LTQuNC90LXQvdC40LU!5e0!3m2!1sru!2sru!4v1641906649031!5m2!1sru!2sru"
            /*width="800" height="600" style="border:0;" allowFullScreen="" loading="lazy"*//>
        </AspectRatio>
      </Box>
    </Grid>
  )
}

export default ContactForm
