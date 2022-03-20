import {
  Box,
  Container,
  Text,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
} from "@chakra-ui/react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import styled from "@emotion/styled";
import { useState } from "react";

const FeatureItem = ({ children }) => {
  return (
    <Box border="1px solid black" rounded={4} fontSize="30px" p={4}>
      {children}
    </Box>
  );
};

const MyHeading = motion(Heading);

export const Features = ({ name, temperature, volume, packaging, more }) => {

  // const [isClick, setIsClick] = useState(false);

  // useEffect(() => {
  //   function onClick() {}

  //   return () => {
  //     second;
  //   };
  // }, [FeatureItem]);

  return (
    <Flex
      spacing={4}
      //templateColumns="repeat(4, 1fr)"
      //justifyContent="space-between"
      gap={4}
    >
      <FeatureItem>
        <Stat>
          <StatLabel fontSize={18}>Температурный диапазон</StatLabel>
          <StatNumber>
            <AnimatePresence exitBeforeEnter>
              <MyHeading
                variant="h3"
                key={name}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                }}
                exit={{ opacity: 0 }}
              >
                {temperature}
              </MyHeading>
            </AnimatePresence>
          </StatNumber>
        </Stat>
      </FeatureItem>
      <FeatureItem>
        <Stat>
          <StatLabel fontSize={18}>Объём</StatLabel>
          <StatNumber>
            <AnimatePresence exitBeforeEnter>
              <MyHeading
                variant="h3"
                key={name}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                      duration: 0.8,
                      ease: "anticipate",
                    },
                  },
                }}
              >
                {volume}
              </MyHeading>
            </AnimatePresence>
          </StatNumber>
        </Stat>
      </FeatureItem>
      <FeatureItem>
        <Stat>
          <StatLabel fontSize={18}>Упаковка</StatLabel>
          <StatNumber>
            <AnimatePresence exitBeforeEnter>
              <MyHeading
                variant="h3"
                key={name}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.8,
                      ease: "anticipate",
                    },
                  },
                }}
              >
                {packaging}
              </MyHeading>
            </AnimatePresence>
          </StatNumber>
        </Stat>
      </FeatureItem>
      <FeatureItem>
        <Stat>
          <StatLabel fontSize={18}>Ещё один параметр</StatLabel>
          <StatNumber>
            <AnimatePresence exitBeforeEnter>
              <MyHeading
                variant="h3"
                key={name}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.8,
                      ease: "anticipate",
                    },
                  },
                }}
              >
                {more}
              </MyHeading>
            </AnimatePresence>
          </StatNumber>
        </Stat>
      </FeatureItem>
    </Flex>
  );
};
