import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  useColorModeValue,
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
        <Text color={'gray.600'} fontSize={18}>
          На российском рынке в настоящее время представлены жидкие керамические
          теплоизоляционные материалы, которые находят своего потребителя,
          благодаря широкой области применения и простоте использования при
          небольших затратах труда. Так как предлагаемые материалы в основном
          производятся за рубежом, они имеют высокую стоимость, что ограничивает
          возможность их массового использования в строительстве, энергетике,
          ЖКХ и т. д.
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
        <Blob
          w='150%'
          h='150%'
          position='absolute'
          top='-20%'
          left={0}
          zIndex={-1}
          color={useColorModeValue('red.50', 'red.400')}
        />
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
  );
}

const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox='0 0 578 440'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z'
        fill='currentColor'
      />
    </Icon>
  );
};
