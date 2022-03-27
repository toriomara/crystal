import {
  Box,
  Stack,
  Text,
  Flex,
  useColorModeValue as mode,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";

export const Feature = (props) => {
  const { title, children, icon } = props;
  const positionEl = useBreakpointValue({ base: "center", md: "start" });
  return (
    <Stack
      spacing={{
        base: "3",
        md: "6",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
    >
      <Flex fontSize="6xl" justify={positionEl}>
        {icon}
      </Flex>
      <Stack spacing="1">
        <Flex justify={positionEl}>
          <Text fontWeight="extrabold" fontSize="lg">
            {title}
          </Text>
        </Flex>
        <Flex color={mode("gray.600", "gray.400")} justify={positionEl}>
          {children}
        </Flex>
      </Stack>
    </Stack>
  );
};
