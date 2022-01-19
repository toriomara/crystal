import { Box, Heading, Text, Button } from '@chakra-ui/react';
import {ChakraNextLinkButton} from "../components/Button";

export default function NotFound() {
  return (
    <Box textAlign="center" py={150} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, red.400, red.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Страница не найдена
      </Text>
      <Text color={'gray.500'} mb={6}>
        Похоже, то что вы искали ещё не создано )
      </Text>

      <ChakraNextLinkButton
        href='/'
        variant='primary'
      >
        На главную
      </ChakraNextLinkButton>
    </Box>
  );
}