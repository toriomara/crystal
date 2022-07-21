import {
  Heading,
  SimpleGrid,
  Box,
  Stack,
  Text,
  Flex,
  Icon,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import {
  FcClock,
  FcDisclaimer,
  FcBiomass,
  FcRules,
  FcFlashOff,
  FcDam,
} from 'react-icons/fc';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

const benefits = [
  {
    id: 1,
    title: 'Экологичность',
    icon: FcBiomass,
    content: 'Материал полностью безопасен и имеет экомаркировку',
  },
  {
    id: 2,
    title: 'Простота применения',
    icon: FcRules,
    content:
      'Наносится как краска: работа с материалом не требует специальных навыков',
  },
  {
    id: 3,
    title: 'Долговечность',
    icon: FcClock,
    content: 'Срок службы более 15 лет',
  },
  {
    id: 4,
    title: 'Отпугивает вредителей',
    icon: FcDisclaimer,
    content: 'Отпугивает насекомых и грызунов',
  },
  {
    id: 5,
    title: 'Диэлектрик',
    icon: FcFlashOff,
    content: 'Препятствует горению',
  },
  {
    id: 6,
    title: 'Защита от конденсата',
    icon: FcDam,
    content:
      'Высокая паропроницаемость материала и, как следствие, защита от грибка и плесени',
  },
];

const majorAnimation = {
  hidden: { x: -100, opacity: 0 },
  animate: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const headingAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};

export const Benefits = () => {
  const MotionBox = motion(Box);
  const MotionHeading = motion(Heading);
  const MotionFeature = motion(Box);
  const MotionSimpleGrid = motion(SimpleGrid);

  useEffect(() => {
    majorAnimation, headingAnimation;
  }, []);

  return (
    <MotionBox my='10'>
      <MotionHeading
        display='flex'
        justifyContent='center'
        fontWeight='700'
        pb={10}
        fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
        initial='hidden'
        whileInView='animate'
        viewport={{ amount: 0.6, once: true }}
        variants={headingAnimation}
      >
        Преимущества
      </MotionHeading>
      <MotionSimpleGrid
        columns={{ base: 1, sm: 2, xl: 3 }}
        spacingX='10'
        spacingY={{ base: '8', md: '14' }}
        initial='hidden'
        whileInView='animate'
        viewport={{ amount: 0.8, once: true }}
      >
        {benefits.map((b, i) => (
          <MotionFeature
            key={b.id}
            variants={majorAnimation}
            custom={i + 1}
            whileHover={{ scale: 1.1 }}
          >
            <Stack
              spacing={{ base: '3', md: '6' }}
              direction={{ base: 'column', md: 'row' }}
            >
              <Flex
                fontSize='6xl'
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                <Icon as={b.icon} />
              </Flex>
              <Stack spacing='1'>
                <Flex justify={{ base: 'center', md: 'flex-start' }}>
                  <Text fontWeight='700' fontSize='lg'>
                    {b.title}
                  </Text>
                </Flex>
                <Flex
                  color={mode('gray.700', 'gray.300')}
                  justify={{ base: 'center', md: 'flex-start' }}
                  textAlign={{ base: 'center', md: 'start' }}
                  px={{ base: '30px', md: 0 }}
                >
                  {b.content}
                </Flex>
              </Stack>
            </Stack>
          </MotionFeature>
        ))}
      </MotionSimpleGrid>
    </MotionBox>
  );
};

const Feature = (props) => {
  const { title, children, icon } = props;
  return (
    <Stack
      spacing={{ base: '3', md: '6' }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex
        fontSize='6xl'
        justifyContent={{ base: 'center', md: 'flex-start' }}
      >
        {icon}
      </Flex>
      <Stack spacing='1'>
        <Flex justify={{ base: 'center', md: 'flex-start' }}>
          <Text fontWeight='700' fontSize='lg'>
            {title}
          </Text>
        </Flex>
        <Flex
          color={mode('gray.600', 'gray.400')}
          justify={{ base: 'center', md: 'flex-start' }}
        >
          {children}
        </Flex>
      </Stack>
    </Stack>
  );
};
