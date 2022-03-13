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
} from "@chakra-ui/react";

const FeatureItem = ({ children }) => {
  return (
    <Box border="1px solid black" rounded={4} fontSize="30px" p={4}>
      {children}
    </Box>
  );
};

export const Features = ({ temperature, volume, packaging, more }) => {
  return (
    <HStack w="100%">
      <FeatureItem>
        <Stat>
          <StatLabel>Collected Fees</StatLabel>
          <StatNumber>£0.00</StatNumber>
          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>
      </FeatureItem>
      <FeatureItem>
        <Text>Температурный диапазон</Text>
        {temperature}
      </FeatureItem>
      {/* <FeatureItem>
        <Text>Объём</Text>
        {volume}
      </FeatureItem> */}
      <FeatureItem>
        <Text>Упаковка</Text>
        {packaging}
      </FeatureItem>
      <FeatureItem>
        <Text>Ещё один параметр</Text>
        {more}
      </FeatureItem>
    </HStack>
  );
};
