import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  StackDivider,
  Tag,
  Icon,
  Text,
  colorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Logo from '../ui/Logo';
import styled from '@emotion/styled';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaViber,
  FaYoutube,
} from 'react-icons/fa';
import MapModal from '../Modal/MapModal';
import Subscribe from '../Subscribe/Subscribe';
import { useState } from 'react';
import { RiWhatsappFill } from 'react-icons/ri';
import { SiInstagram } from 'react-icons/si';
import { motion } from 'framer-motion';
import { MovingLink, SimpleLink, IconItem } from '../../styles/link';

const FooterHeading = ({ children }) => (
  <Heading
    fontFamily='Montserrat'
    mb={3}
    color={useColorModeValue('gray.600', 'gray.100')}
    fontSize='sm'
    fontWeight='semibold'
    textTransform='uppercase'
    letterSpacing='wider'
  >
    {children}
  </Heading>
);

const MyIconButton = styled(IconButton)`
  top: 0;
  display: inline-flex;
  font-size: 20px;
  color: ${(p) =>
    useColorModeValue(
      p.hover ? 'brand.50' : 'brand.200',
      p.hover ? '#00BBFF' : '#E2E8F0'
    )};

  &:hover {
    font-weight: 500;
    transition: 200ms ease-in;
    top: -6px;
  }
`;

const footerAnimation = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: 0.8,
  },
};

const footerIcons = [
  {
    id: 1,
    icon: RiWhatsappFill,
    href: 'https://wa.me/79173381186',
    'aria-label': 'Whatsapp',
  },
  {
    id: 2,
    icon: FaViber,
    href: 'viber://chat?number=%2B79173381186',
    'aria-label': 'Viber',
  },
  {
    id: 3,
    icon: SiInstagram,
    href: 'https://www.instagram.com/factory_korund/',
    'aria-label': 'Instagram',
  },
  {
    id: 4,
    icon: FaYoutube,
    href: 'https://www.youtube.com/channel/UCB1Pu92nRaimLhW0yj0-0vQ',
    'aria-label': 'Youtube',
  },
  {
    id: 5,
    icon: FaTwitter,
    href: 'https://twitter.com/Korund34',
    'aria-label': 'Twitter',
  },
  {
    id: 6,
    icon: FaFacebookSquare,
    href: 'https://www.facebook.com/factorykorund',
    'aria-label': 'Facebook',
  },
];

export const Footer = () => {
  const bgColor = useColorModeValue('#F2F2F2', 'whiteAlpha.100');
  //const iconColor = useColorModeValue('brand.50', 'brand.200');
  const MotionContainer = motion(Container);

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      pt={5}
      role='contentinfo'
      w='100%'
      bg={bgColor}
      color={useColorModeValue('gray.700', 'gray.200')}
      fontSize='15px'
      fontWeight={500}
    >
      <MotionContainer
        display='flex'
        flexDirection='row'
        alignItems='center'
        as={Stack}
        maxW='8xl'
        px={6}
        pt={6}
        pb={4}
        initial='hidden'
        whileInView='animate'
        viewport={{ amount: 0.4, once: true }}
        variants={{
          hidden: {
            y: 0,
            opacity: 0,
          },
          animate: {
            y: 0,
            opacity: 1,
            transition: { delay: 0.4 },
          },
        }}
      >
        <Stack divider={<StackDivider />}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10} pb={4}>
            <Box align={'flex-start'}>
              <Logo />
              <Box marginTop={2}>
                Производство сверхтонких теплоизоляционных материалов нового
                поколения
              </Box>
            </Box>

            <Stack align={'flex-start'}>
              <FooterHeading>Информация</FooterHeading>
              <MovingLink href='/about'>О нас</MovingLink>
              <MovingLink href='/news'>Новости</MovingLink>
              <MovingLink href='production'>Продукция</MovingLink>
              <MovingLink href='/documentation'>Документация</MovingLink>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <MovingLink href='/distribution'>
                  Дистрибьюция
                  <sup>
                    <Tag
                      py='1px'
                      px='3px'
                      ml={2}
                      size='xsm'
                      bg='brand.50'
                      color='white'
                      fontSize={10}
                      rounded={2}
                    >
                      New
                    </Tag>
                  </sup>
                </MovingLink>
              </Stack>
            </Stack>

            <Stack align='flex-start'>
              <FooterHeading>Контакты</FooterHeading>

              <MovingLink href='#'>
                <IconItem fill='brand.200'>
                  <FaMapMarkerAlt fill='brand.200' />
                </IconItem>
                <span onClick={handleClick}>
                  400066, Россия, <br />
                  г. Волгоград, ул. имени маршала Чуйкова, д. 33
                </span>
              </MovingLink>

              {isOpen && <MapModal setIsOpen={setIsOpen} />}

              <MovingLink href='mailto:mail@korund34.ru'>
                <IconItem fill='brand.200'>
                  <FaEnvelope fill='brand.200' />
                </IconItem>
                mail@korund34.ru
              </MovingLink>
              <MovingLink href='tel:+7844238-44-66'>
                <IconItem fill='brand.200'>
                  <FaPhone fill='brand.200' />
                </IconItem>
                +7 (8442) 38-44-66 (факс)
              </MovingLink>
              <MovingLink href='tel:+78442504012'>
                +7 (8442) 50-40-12
              </MovingLink>
              <MovingLink href='tel:+78442504013'>
                +7 (8442) 50-40-13
              </MovingLink>
              <MovingLink href='tel:+78442504031'>
                +7 (8442) 50-40-31
              </MovingLink>
              <MovingLink href='tel:+78442504042'>
                +7 (8442) 50-40-42
              </MovingLink>
              <MovingLink href='tel:+78442504082'>
                +7 (8442) 50-40-82
              </MovingLink>
            </Stack>

            <Stack align='flex-start'>
              <chakra.form onSubmit={(e) => e.preventDefault()}>
                <FooterHeading>Подпишитесь на рассылку</FooterHeading>
                <Stack spacing='4'>
                  <Text>
                    Мы присылаем одно письмо в неделю <br />и не рассылаем спам
                  </Text>
                  {/* <Input
                    bg={useColorModeValue("white", "inherit")}
                    placeholder="Введите ваш электронный адрес"
                    type="email"
                    flexShrink={1}
                    required
                    _placeholder={{
                      opacity: 1,
                      color: useColorModeValue("gray.500", "whiteAlpha.700"),
                    }}
                  /> */}
                  <Button
                    onClick={handleClick}
                    type='submit'
                    variant='primary'
                    flexShrink={1}
                    width={{
                      base: 'full',
                      md: 'auto',
                    }}
                  >
                    Подписаться
                  </Button>
                  {/* {isOpen && <Modal setIsOpen />} */}
                </Stack>
              </chakra.form>
            </Stack>
          </SimpleGrid>

          {/*==============================SECOND FLOOR==============================*/}

          <Box>
            <Stack
              direction={{ base: 'column-reverse', md: 'row' }}
              justifyContent='space-between'
              alignItems='center'
            >
              <Text fontSize='sm' textAlign='center'>
                &copy; {new Date().getFullYear()}, «НПО ФУЛЛЕРЕН». Все права
                защищены
              </Text>

              <Flex>
                {footerIcons.map((i) => (
                  <MyIconButton
                    props
                    key={i.id}
                    variant='ghost'
                    target='_blank'
                    as='a'
                    href={i.href}
                    aria-label={i['aria-label']}
                    _hover={{
                      //color: colorMode === 'light' ? 'brand.200' : 'brand.50',
                     // color: useColorModeValue('brand.50', 'brand.200'),
                    }}
                  >
                    <Icon as={i.icon} variant='ghost'></Icon>
                  </MyIconButton>
                ))}
              </Flex>
            </Stack>
          </Box>
        </Stack>
      </MotionContainer>
    </Box>
  );
};
