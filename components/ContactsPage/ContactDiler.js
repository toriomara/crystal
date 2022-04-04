import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Grid,
  SimpleGrid,
  GridItem,
  Center,
  Stack,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { SiTwitter, SiMessenger, SiTelegram, SiFacebook } from "react-icons/si";
import DilerModal from "../Subscribe/DilerModal";
import { useState} from 'react'

export const ContactDiler = () => {
  const bgColor = useColorModeValue("white", "whiteAlpha.100");
  const borderStyle = useColorModeValue("1px solid #EDF2F7", "none");
  const blockShadow = useColorModeValue("none", "xl");

  const [modalActive, setModalActive] = useState(false)
  const modalClick = () => {
    setModalActive(!modalActive)
  }

  return (
    <Flex
      maxW="7xl"
      py={{
        base: "4",
        lg: "12",
      }}
    >
      <Grid
        templateColumns="repeat(5, 5fr)"
        gap={8}
      >
        <GridItem colSpan={{base: 5, sm: 3, md: 4}}>
          <VStack
            p={8}
            spacing={4}
            rounded={4}
            border={borderStyle}
            bgColor={bgColor}
            boxShadow={blockShadow}
          >
            <Heading variant="h3" align="center">
              Как стать дилером КОРУНД<sup>®</sup>
            </Heading>
            <Text>
              Мы открыты для переговоров по предоставлению статуса дилера или
              дистрибьютора. Эти статусы дают преимущества в ценовой политике и
              в понимании ситуации с территориальным эксклюзивом. Заполните
              небольшую анкету и мы сделаем вам оптимальное предложение.
              <br />
              Ответьте, пожалуйста, на несколько вопросов и мы подберём условия
              для взаимовыгодного сотрудничества.
            </Text>
            <Flex align="center" justifyContent="center">
              <Button variant="primary" onClick={modalClick}>Стать дилером</Button>
            </Flex>
              {modalActive && <DilerModal setModalActive={setModalActive}/>}
          </VStack>
        </GridItem>

        <GridItem colSpan={{base: 5, sm: 2, md: 1}}>
          <VStack
            p={8}
            spacing={4}
            rounded={4}
            border={borderStyle}
            bgColor={bgColor}
            boxShadow={blockShadow}
            w="full"
            align={"center"}
          >
            <Heading variant="h3">Свяжитесь с нами</Heading>
            <Text>С удовольствием ответим на все Ваши вопросы</Text>

            {/* Facebook */}
            <Button
              variant="primary"
              w={"full"}
              colorScheme={"facebook"}
              leftIcon={<SiFacebook />}
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
          </VStack>
        </GridItem>
      </Grid>
    </Flex>
  );
};
