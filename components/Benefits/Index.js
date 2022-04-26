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
import { motion } from 'framer-motion';

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

export const Benefits = () => {
  const MotionHeading = motion(Heading);
  const MotionFeature = motion.div;

  return (
    <Box>
      <MotionHeading
        py='10'
        display='flex'
        justifyContent='center'
        fontWeight={500}
        fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
        lineHeight='110%'
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.3,
            },
          },
        }}
      >
        Преимущества
      </MotionHeading>
      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          xl: 3,
        }}
        spacingX='10'
        spacingY={{
          base: '8',
          md: '14',
        }}
      >
        {benefits.map((benefit, i) => (
          <MotionFeature
            key={benefit.id}
            initial={{ opacity: 0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50 }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{type: "spring", stiffness: 300, duration: 0.4, delay: i * 0.4}}
            whileHover={{ scale: 1.2 }}
          >
            <Stack
              spacing={{
                base: '3',
                md: '6',
              }}
              direction={{
                base: 'column',
                md: 'row',
              }}
            >
              <Flex
                fontSize='6xl'
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                <Icon as={benefit.icon} />
              </Flex>
              <Stack spacing='1'>
                <Flex justify={{ base: 'center', md: 'flex-start' }}>
                  <Text fontWeight='extrabold' fontSize='lg'>
                    {benefit.title}
                  </Text>
                </Flex>
                <Flex
                  color={mode('gray.700', 'gray.300')}
                  justify={{ base: 'center', md: 'flex-start' }}
                  textAlign={{ base: 'center', md: 'start' }}
                  px={{ base: '30px', md: 0 }}
                >
                  {benefit.content}
                </Flex>
              </Stack>
            </Stack>
          </MotionFeature>
        ))}
      </SimpleGrid>
    </Box>
  );
};

const Feature = (props) => {
  const { title, children, icon } = props;
  return (
    <Stack
      spacing={{
        base: '3',
        md: '6',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
    >
      <Flex
        fontSize='6xl'
        justifyContent={{ base: 'center', md: 'flex-start' }}
      >
        {icon}
      </Flex>
      <Stack spacing='1'>
        <Flex justify={{ base: 'center', md: 'flex-start' }}>
          <Text fontWeight='extrabold' fontSize='lg'>
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
