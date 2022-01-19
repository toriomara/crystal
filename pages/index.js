import Head from 'next/head'
import Image from 'next/image'
import Main from "../layouts/main";
import {Box, Container} from "@chakra-ui/react";
import {motion} from "framer-motion";
import CallToActionWithIllustration from "../components/CTA/CTA";
import CallToActionWithVideo from "../components/CTA/CTA2";


export default function Home() {
  return (
      <Box
        maxW='xxl'
      >
        <CallToActionWithIllustration/>
        <CallToActionWithVideo/>
      </Box>
  )
}
