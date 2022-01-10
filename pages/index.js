import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from "../layouts/main";
import {Container} from "@chakra-ui/react";
import {motion} from "framer-motion";
import CallToActionWithIllustration from "../components/CTA";


export default function Home() {
  return (
      <Container
        maxW='xxl'
      >
        <CallToActionWithIllustration/>
      </Container>
  )
}
