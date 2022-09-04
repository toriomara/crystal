import { Flex } from '@chakra-ui/react';
import Details from './details';
import Cart from './cart';

export const Subscribe = () => {
  return (
    <Flex
      h={{ base: 'auto', md: '100vh' }}
      py={[0, 10, 20]}
      direction={{ base: 'column-reverse', md: 'row' }}
    >
      <Details />
      <Cart />
    </Flex>
  );
};
