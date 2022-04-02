import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import useClickOutside from "../../utils/useClickOutside";
import React, { useEffect, useRef } from "react";

const DilerModal = ({ setModalActive }) => {
  const ref = useRef(null);
  useClickOutside(ref, () => setModalActive(!setModalActive));

  const handleClick = () => {
    setModalActive(!setModalActive);
  };

  // Don't scrollY
  useEffect(() => {
    if (setModalActive) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "-12px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [setModalActive]);


  // key "ESCAPE"
  const closeOnEventEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      setModalActive(!setModalActive);
    }
  };
  
  // CLEANER
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEventEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEventEscapeKeyDown);
    };
  });

  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const bgColor = useColorModeValue("white", "whiteAlpha.50");

  return (
    <Flex
      position="fixed"
      //top="0"
      right="0"
      bottom="0"
      left="0"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
      background="rgba(0, 0, 0, 0.45)"
      zIndex="1"
      backdropFilter="blur(5px)"
    >
      <Flex
        ref={ref}
        m={4}
        boxShadow="xl"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        rounded={4}
        bgColor={bgColor}
      >
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Подпишитесь!</Heading>
            <Text>If you already have an account, click here to log in.</Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="John" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Doe" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input placeholder="Blvd. Broken Dreams 21" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input placeholder="San Francisco" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select>
                  <option value="usa">United States of America</option>
                  <option value="uae">United Arab Emirates</option>
                  <option value="nmk">North Macedonia</option>
                  <option value="de">Germany</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <Checkbox defaultChecked>Ship to billing address</Checkbox>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <Button variant="primary" w="full">
                Place Order
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default DilerModal;
