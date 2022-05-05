import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Skeleton,
} from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);

const majorAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize='xl' fontWeight='600' lineHeight='1.2' pb={6}>
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

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

const About = () => {
  const MotionText = motion(Text);
  //const variant = useBreakpointValue({ base: 'outline', bsm: 'solid' });
  return (
    <MotionBox mt={14} initial='hidden' whileInView='visible'>
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
              variants={majorAnimation}
              custom={2}
              fontSize='46px'
              fontWeight='900'
              lineHeight='1.2'
            >
              КОРУНД<sup>®</sup> — <br />
              тонкий подход
              <br />к сохранению тепла
              <br />
            </MotionHeading>
            <MotionButton variants={majorAnimation} custom={4}>
              Подробнее
            </MotionButton>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <MotionText variants={majorAnimation} custom={4} fontSize={18}>
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
        <Feature
          heading='Высококачественное оборудование'
          text='Современное производство оснащенное оборудованием UJTZ-ETC и Netzsch, Германия'
        />
        <Feature
          heading='Система менеджмента качества'
          text='Система менеджмента качества компании сертифицирована на соответствие требованиям международного стандарта ISO 9001 : 2008'
        />
        <Feature
          heading='Учебный центр'
          text='С 2013 года для наших партнёров и потребителей продукции КОРУНД <sup>®</sup> работает учебный центр'
        />
        <Feature
          heading='Научно-технические разработки'
          text='"НПО ФУЛЛЕРЕН" активно взаимодействует с ВолГТУ и ВолГАСУ в области разработки новых составов теплоизоляционных покрытий, внедрения новых материалов и технологий'
        />
      </Grid>
      <Divider mt={12} mb={12} />
      <Text fontSize='24'>
        Мы высоко ценим устойчивые партнерские отношения с нашими потребителями
        на всей территории России и в других странах, а также гарантируем
        справедливую цену за продукт высочайшего качества
      </Text>
      <Heading variant='h2' display='flex' justifyContent='center' my={10}>
        Испытательная лаборатория
      </Heading>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: '1fr 2fr',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}
      >
        <GridItem>
          <Flex>
            <Image
              src='/images/misc/lab.webp'
              alt='Лаборатория'
              layout='fill'
              objectFit='cover'
              rounded={4}
              fallback={<Skeleton />}
            />
          </Flex>
        </GridItem>
        <GridItem>
          {sentences.map((s, i) => (
            <MotionText
              key={s.id}
              initial={{
                opacity: 0,
                translateX: -50,
                //translateY: -50,
              }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                duration: 0.8,
                delay: i * 0.6,
              }}
              viewport={{amount: 0.2}}
            >
              <Box paddingY={4} fontSize={18}>
                {s.text}
              </Box>
            </MotionText>
          ))}
        </GridItem>
      </Grid>
    </MotionBox>
  );
};

export default About;
