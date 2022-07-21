import { Box, Heading, Text } from '@chakra-ui/react';
import { ChakraNextLinkButton } from '../src/components/ui/Button';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <Box textAlign='center' py={150} px={6}>
      <Heading
        display='inline-block'
        as='h2'
        size='2xl'
        bgGradient='linear(to-r, red.400, red.600)'
        backgroundClip='text'
      >
        404
      </Heading>
      <Text fontSize='18px' mt={3} mb={2}>
        Страница не найдена
      </Text>
      <Text color={'gray.500'} mb={6}>
        Похоже, то что вы искали ещё не создано )
      </Text>
      <Heading variant='h2'>
        Через 3 секунды вы будете перенаправлены на главную страницу
      </Heading>
      <br />
      <ChakraNextLinkButton href='/' variant='primary'>
        На главную
      </ChakraNextLinkButton>
    </Box>
  );
};

export default Error;
