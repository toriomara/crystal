import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Skeleton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Meta from "../src/components/Meta";

const sentences = [
  {
    id: 1,
    text: 'Аналитический контроль качества продукции — одна из важнейших задач в развитии предприятия. Эту задачу решает наша испытательная лаборатория.',
  },
  {
    id: 2,
    text: 'Испытательная лаборатория была создана в 2012 году как структурное подразделение компании для выполнения работ по контролю и соблюдению качества выпускаемой продукции — материалов серии КОРУНД. Лаборатория укомплектована современным оборудованием, все сотрудники имеют высочайшую профессиональную подготовку, отличные теоретические знания и богатый практический опыт, необходимы для квалифицированного выполнения работ по контролю качества продукции.',
  },
  {
    id: 3,
    text: 'Основными задачами лаборатории "НПО ФУЛЛЕРЕН" является контроль качества входного сырья, ингридиентов, отбор проб и испытание готовой продукции.',
  },
  {
    id: 4,
    text: 'Приоритетная цель лаборатории — разработка новых наукоёмких материалов и улучшение потребительских свойств уже имеющейся продукции.',
  },
  {
    id: 5,
    text: 'Наши технические специалисты имеют широкий опыт разработки рецептур свехтонких теплоизоляций и их внедрения на производстве.',
  },
];

const features = [
  {
    id: 1,
    heading: 'Высококачественное оборудование',
    text: 'Современное производство оснащенное оборудованием UJTZ-ETC и Netzsch, Германия',
  },
  {
    id: 2,
    heading: 'Система менеджмента качества',
    text: 'Система менеджмента качества компании сертифицирована на соответствие требованиям международного стандарта ISO 9001 : 2008',
  },
  {
    id: 3,
    heading: 'Учебный центр',
    text: 'С 2013 года для наших партнёров и потребителей продукции КОРУНД <sup>®</sup> работает учебный центр',
  },
  {
    id: 4,
    heading: 'Научно-технические разработки',
    text: '"НПО ФУЛЛЕРЕН" активно взаимодействует с ВолГТУ и ВолГАСУ в области разработки новых составов теплоизоляционных покрытий, внедрения новых материалов и технологий',
  },
];

const leftAnimation = {
  hidden: { x: -100, opacity: 0 },
  animate: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const rightAnimation = {
  hidden: { x: 100, opacity: 0 },
  animate: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const headingAnimation = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  animate: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: custom * 0.3,
    },
  }),
};

const About = () => {
  const MotionBox = motion(Box);
  const MotionButton = motion(Button);
  const MotionText = motion(Text);
  const MotionFeature = motion(Box);
  const MotionHeading = motion(Heading);
  const MotionFlex = motion(Flex);
  return (
    <Box>
      <Meta title="About" />
      <Heading variant="pageTitle">О нас</Heading>
      <MotionBox
        mt={14}
        initial='hidden'
        whileInView='animate'
        viewport={{ once: true }}
      >
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems='flex-start' spacing='20px'>
              <MotionHeading
                variants={leftAnimation}
                custom={2}
                fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
                fontWeight='900'
                lineHeight='1.2'
              >
                КОРУНД<sup>®</sup> — <br />
                тонкий подход
                <br />к сохранению тепла
                <br />
              </MotionHeading>
              <MotionButton variants={leftAnimation} custom={4}>
                Подробнее
              </MotionButton>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <MotionText variants={rightAnimation} custom={4} fontSize={18}>
                С момента своего основания в 2007 году научно-производственное
                объединение &quot;ФУЛЛЕРЕН&quot; ориентировалось на создание и
                продвижение инновационных материалов и технологий в стриотельную
                отрасль, промышленность и ЖКХ
              </MotionText>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}
        >
          {features.map((f, i) => (
            <MotionFeature key={f.id} variants={leftAnimation} custom={i + 6}>
              <Heading
                variant='h3'
                fontSize='xl'
                fontWeight='600'
                lineHeight='1.2'
                pb={6}
              >
                {f.heading}
              </Heading>
              <Text>{f.text}</Text>
            </MotionFeature>
          ))}
        </Grid>
        <Divider my={6} />

        <MotionHeading
          variant='h2'
          display='flex'
          justifyContent='center'
          my={6}
          variants={headingAnimation}
          custom={12}
        >
          Испытательная лаборатория
        </MotionHeading>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: '1fr 2fr',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}
        >
          <GridItem>
            <MotionFlex variants={leftAnimation} custom={10}>
              <Image
                src='/images/misc/lab.webp'
                alt='Лаборатория'
                layout='fill'
                objectFit='cover'
                rounded={4}
                fallback={<Skeleton />}
              />
            </MotionFlex>
          </GridItem>
          <GridItem>
            {sentences.map((s, i) => (
              <MotionText key={s.id} variants={rightAnimation} custom={i + 12}>
                <Box paddingY={4} fontSize={18}>
                  {s.text}
                </Box>
              </MotionText>
            ))}
          </GridItem>
        </Grid>
      </MotionBox>
    </Box>
  );
};

export default About;
