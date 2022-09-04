import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

const VideoBox = styled(Box)`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export default function CallToActionWithVideo() {
  return (
    <Box
      // maxW={'320px'}
      // w='full'
      bg={mode('white', 'gray.900')}
      boxShadow='2xl'
      rounded='lg'
      px={['20px', '100px']}
    >
      <Stack
        align='center'
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as='span'
              position='absolute'
              // _after DON'T WORK
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'brand.50',
                zIndex: -1,
              }}
            >
              Один слой —
            </Text>
            <br />
            <Text as='span' position='relative' color='brand.50'>
              15 см утеплителя!
            </Text>
          </Heading>
          <Text color={mode('gray.700', 'gray.300')} fontSize={18}>
            На российском рынке в настоящее время представлены жидкие
            керамические теплоизоляционные материалы, которые находят своего
            потребителя, благодаря широкой области применения и простоте
            использования при небольших затратах труда. Так как предлагаемые
            материалы в основном производятся за рубежом, они имеют высокую
            стоимость, что ограничивает возможность их массового использования в
            строительстве, энергетике, ЖКХ и т. д.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button variant='primary'>Подробнее</Button>
            <Button variant='secondary'>Как это работает</Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify='center'
          align='center'
          position='relative'
          w='full'
        >
          <VideoBox>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/M4ih84fmois'
              title="Korund's video"
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </VideoBox>
        </Flex>
      </Stack>
    </Box>
  );
}
