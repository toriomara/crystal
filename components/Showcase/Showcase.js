import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { SimpleLink } from "../../styles/link";

export const Showcase = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: "0",
      lg: "12",
    }}
    py={{
      base: "0",
      lg: "12",
    }}
  >
    <Stack
      direction={{
        base: "column-reverse",
        lg: "row",
      }}
      spacing={{
        base: "0",
        lg: "20",
      }}
    >
      <Box
        width={{
          lg: "sm",
        }}
        transform={{
          base: "translateY(-50%)",
          lg: "none",
        }}
        bg={{
          base: useColorModeValue("red.50", "gray.700"),
          lg: "transparent",
        }}
        mx={{
          base: "6",
          md: "8",
          lg: "0",
        }}
        px={{
          base: "6",
          md: "8",
          lg: "0",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            lg: "10",
          }}
        >
          <Stack
            spacing={{
              base: "2",
              lg: "4",
            }}
          >
            <Heading size="xl" color={useColorModeValue("red.500", "red.300")}>
              Обратите внимание
            </Heading>
            <Heading size="xl" fontWeight="normal">
              Корунд шагает по планете!
            </Heading>
          </Stack>
          <HStack spacing="3">
            <SimpleLink
              href="/distribution"
              color={useColorModeValue("red.500", "red.300")}
              fontWeight="bold"
              fontSize="50px"
            >
              Дилерская сеть
            </SimpleLink>
            <Icon
              color={useColorModeValue("red.500", "red.300")}
              as={FaArrowRight}
            />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src="/images/misc/korund-car-2014.jpg"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
      </Flex>
    </Stack>
  </Box>
);
