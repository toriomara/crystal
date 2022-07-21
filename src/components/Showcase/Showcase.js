import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { SimpleLink } from '../../styles/link';

export const Showcase = () => {
  const fontSize = useBreakpointValue({ base: 'lg', lg: '2xl' });
  return (
    <Stack
      direction={{ base: 'column-reverse', lg: 'row' }}
      spacing={{ base: '0', lg: '20' }}
    >
      <Box
        width={{ lg: 'sm' }}
        bg={{
          //base: useColorModeValue('whiteAlpha.700', 'blackAlpha.800'),
          lg: 'transparent',
        }}
        mx={{ base: '6', md: '8', lg: '0' }}
        px={{ base: '6', md: '8', lg: '0' }}
        py={{ base: '6', md: '8', lg: '12' }}
      >
        <Stack spacing={{ base: '4', lg: '4' }}>
          <Stack spacing={{ base: '2', lg: '4' }}>
            <Heading
              size={fontSize}
              color={useColorModeValue('red.500', 'brand.50')}
            >
              Доставка
            </Heading>
            <Heading size='xl' fontWeight='normal'>
              Корунд шагает по планете!
            </Heading>
          </Stack>
          <Button
            href='/distribution'
            variant='secondary'
            color={useColorModeValue('white', 'white')}
            fontSize='18px'
          >
            <a>Дистрибьюция</a>
          </Button>
        </Stack>
      </Box>
      <Flex flex='1' overflow='hidden'>
        <Image
          src='/images/misc/korund-car.webp'
          alt='Korund delivery'
          rounded={4}
          placeholder='blur'
          maxH='450px'
          minW='300px'
          objectFit='cover'
          flex='1'
        />
      </Flex>
    </Stack>
  );
};
