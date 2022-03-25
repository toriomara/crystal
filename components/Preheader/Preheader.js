import {
  Box,
  Button,
  CloseButton,
  Container,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { React, useState, useRef } from "react";
import { FiInfo } from "react-icons/fi";

export const Preheader = ({setIsPreheader}) => {

  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  const handleClick = () => {
    setIsPreheader(!setIsPreheader);
  };

  return (
    <Box as="section">
      <Box bg="brand.100" boxShadow={useColorModeValue("sm", "sm-dark")} p={2}>
        <Container
          position="relative"
          flexDirection="row"
          alignItems="center"
          maxW="8xl"
          color="white"
        >
          <CloseButton
            display={{
              sm: "none",
            }}
            position="absolute"
            right="2"
            top="2"
          />
          <Stack
            direction={{
              base: "column",
              sm: "row",
            }}
            justify="space-between"
            spacing={{
              base: "3",
              md: "2",
            }}
          >
            <Stack
              fontSize={15}
              spacing="4"
              direction={{
                base: "column",
                md: "row",
              }}
              align={{
                base: "start",
                md: "center",
              }}
            >
              {!isMobile && <Icon as={FiInfo} boxSize="6" />}
              <Stack
                direction={{
                  base: "column",
                  md: "row",
                }}
                spacing={{
                  base: "0.5",
                  md: "1.5",
                }}
                pe={{
                  base: "4",
                  sm: "0",
                }}
              >
                <Text fontWeight="medium">
                  We just launched our new product.
                </Text>
                <Text color="muted">Read our press release</Text>
              </Stack>
            </Stack>
            <Stack
              direction={{
                base: "column",
                sm: "row",
              }}
              spacing={{
                base: "3",
                sm: "2",
              }}
              align={{
                base: "stretch",
                sm: "center",
              }}
            >
              <Button variant="outlined" size="sm">
                Read more
              </Button>
              <CloseButton
                onClick={handleClick}
                display={{
                  base: "none",
                  sm: "inline-flex",
                }}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
