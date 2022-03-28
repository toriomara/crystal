import {
  Box,
  Stack,
  Text,
  Flex,
  useColorModeValue as mode,
  useBreakpointValue,
} from "@chakra-ui/react";

export const Feature = (props) => {
  const { title, children, icon } = props;
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
      <Flex fontSize="6xl" justifyContent={{ base: "center", md: "flex-start" }}>
        {icon}
      </Flex>
      <Stack spacing="1">
        <Flex justify={{ base: "center", md: "flex-start" }}>
          <Text fontWeight="extrabold" fontSize="lg">
            {title}
          </Text>
        </Flex>
        <Flex color={mode("gray.600", "gray.400")} justify={{ base: "center", md: "flex-start" }}>
          {children}
        </Flex>
      </Stack>
    </Stack>
  );
};
