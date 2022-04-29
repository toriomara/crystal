import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { SimpleLink } from "../../styles/link";

export const Showcase = () => {
  const fontSize = useBreakpointValue({ base: "md", lg: "2xl" });
  return (
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
            base: "translateY(-35%)",
            lg: "none",
          }}
          bg={{
            base: useColorModeValue("red.50", "gray.800"),
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
              base: "4",
              lg: "4",
            }}
          >
            <Stack
              spacing={{
                base: "2",
                lg: "4",
              }}
            >
              <Heading
                size={fontSize}
                color={useColorModeValue("red.500", "brand.50")}
                fontFamily='Montserrat'
              >
                Доставка
              </Heading>
              <Heading size="xl" fontWeight="normal">
                Корунд шагает по планете!
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Button
                href="/distribution"
                variant='secondary'
                color={useColorModeValue("white", "white")}
                fontSize="18px"
              >
                Дилерская сеть
                {/* <Icon
                  color={useColorModeValue("red.500", "red.300")}
                  as={FaArrowRight}
                /> */}
              </Button>
            </HStack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src="/images/misc/korund-car.webp"
            alt="Lovely Image"
            //fallback={<Skeleton />}
            rounded={4}
            placeholder="blur"
            maxH="450px"
            minW="300px"
            objectFit="cover"
            flex="1"
          />
        </Flex>
      </Stack>
    </Box>
  );
};
