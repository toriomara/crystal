import React, { useState } from 'react';
import NextLink from 'next/link';
import {
  Grid,
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  Link,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Icon,
  Spacer,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import ThemeToggleButton from '../ui/theme-toggle-button';
import SearchBar from '../Search';
import Logo from '../ui/Logo';
import { Lang } from './Lang';
import { Preheader } from '../Preheader/Preheader';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Scrolly from '../ui/Scrolly';

const LinkItem = ({ href, path, children, ...props }) => {
  const active = path === href;
  return (
    <NextLink href={href} passHref>
      <Link
        p={3}
        fontSize={16}
        rounded={4}
        whiteSpace='nowrap'
        fontWeight={active ? 'bold' : 'normal'}
        color={useColorModeValue(
          active ? 'brand.50' : 'black',
          active ? 'brand.200' : 'gray.200'
        )}
        _hover={{
          backgroundColor: useColorModeValue('red.600', 'brand.200'),
          color: useColorModeValue('white', 'black'),
        }}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const MotionFlex = motion(Flex);
const MyPopover = styled(Popover)`
  position: absolute;
  display: flex;
`;

export const Navbar = (props) => {
  const { path } = props;
  const { isOpen, onToggle, onClose } = useDisclosure();

  const [isPreheader, setIsPreheader] = useState(true);
  const handleClick = () => {
    setIsPreheader(!isPreheader);
  };

  const [isMobile, setIsMobile] = useState(false);
  const closeMobile = () => {
    setIsMobile(!isMobile);
  };

  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.200');

  ///////////////////////
  const [isHam, setIsHam] = useState(false);
  ///////////////////////

  return (
    <>
      {/* {isPreheader && <Preheader setIsPreheader={setIsPreheader} />} */}
      <Box
        as='nav'
        position='fixed'
        w='100%'
        justify='center'
        bg={useColorModeValue('#ffffff40', '#20202380')}
        css={{ backdropFilter: 'blur(10px)' }}
        zIndex='2'
        borderBottom={1}
        borderStyle='solid'
        borderBottomColor={borderColor}
        {...props}
      >
        <Container
          flexDirection='row'
          alignItems='center'
          maxW='8xl'
          wrap='nowrap'
          py={2}
          px={{
            base: '4',
            md: '4',
          }}
        >
          <MotionFlex
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            minHeight={{ base: '40px', md: '50px' }}
          >
            <HStack>
              <Logo />
            </HStack>

            <Spacer />
            <DesktopNav href path={path} />
            <Spacer />

            <HStack>
              <Flex display={{ base: 'none', sm: 'flex' }}>
                <SearchBar />
              </Flex>
              <Flex display={{ base: 'none', sm: 'flex' }}>
                <Button as='a' href='tel:+7 800 2347878' variant='none'>
                  <span>+7 800 234-78-78</span>
                </Button>
              </Flex>
              <Lang />
              <Flex display={{ base: 'none', sm: 'flex' }}>
                <ThemeToggleButton display={{ base: 'none' }} />
              </Flex>
              <IconButton
                display={{ base: 'inline-block', xl: 'none' }}
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant='ghost'
                aria-label='Toggle Navigation'
              />
            </HStack>
          </MotionFlex>
          <Collapse in={isOpen} animateOpacity>
            <MobileNav onClose={onClose} />
          </Collapse>
        </Container>
        <Scrolly />
      </Box>
    </>
  );
};

const DesktopNav = ({ href, path, ...props }) => {
  // const linkColor = useColorModeValue('gray.600', 'gray.200');
  // const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <HStack
      direction={{ base: 'column', md: 'row' }}
      display={{ base: 'none', xl: 'flex' }}
      width={{ base: 'full', md: 'auto' }}
      mt={{ base: 4, md: 0 }}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <MyPopover placement='bottom-start' trigger='hover'>
            <PopoverTrigger>
              <LinkItem href={navItem.href} path={path}>
                {navItem.label}
              </LinkItem>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                //border={0}
                boxShadow='xl'
                bg={popoverContentBgColor}
                p={4}
                rounded='xl'
                minW='sm'
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopChildNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </MyPopover>
        </Box>
      ))}
    </HStack>
  );
};

const DesktopChildNav = ({ label, href, childLabel }) => {
  return (
    <LinkItem
      href={href}
      role='group'
      display='block'
      p={2}
      rounded='md'
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'brand.50' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{childLabel}</Text>
        </Box>
        <Flex
          transition='all .3s ease'
          transform='translateX(-10px)'
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify='flex-end'
          align='center'
          flex={1}
        >
          <Icon color={'brand.50'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </LinkItem>
  );
};

const MobileNav = ({ onClose }) => {
  return (
    <Stack p={4} bg={useColorModeValue('white', 'gray.800')}>
      <Flex display={{ base: 'flex' }}>
        <SearchBar />
        <ThemeToggleButton />
        <Button as='a' href='tel:+78002347878' variant='none'>
          <span>8 800 234-78-78</span>
        </Button>
      </Flex>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} onClose={onClose} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={LinkItem}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle='solid'
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align='start'
        >
          {children &&
            children.map((child) => (
              <LinkItem key={child.label} py={2} href={child.href}>
                {child.label}
              </LinkItem>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Главная',
    href: '/',
  },
  {
    label: 'Продукция',
    href: '/КОРУНД-Классик',
    children: [
      {
        label: 'КОРУНД-Классик',
        childLabel: 'Для крыши, стен, пола, фасада',
        href: '/КОРУНД-Классик',
      },
      {
        label: 'КОРУНД-Фасад',
        childLabel: 'Устраняет промерзания',
        href: '/КОРУНД-Фасад',
      },
      {
        label: 'КОРУНД-Антикор',
        childLabel: 'Для металлически поверхностей',
        href: '/КОРУНД-Антикор',
      },
      {
        label: 'КОРУНД-Зима',
        childLabel: 'Для применения в зимой',
        href: '/КОРУНД-Зима',
      },
    ],
  },
  {
    label: 'Документация',
    href: '/documentation',
    children: [
      {
        label: 'Техническая документация',
        childLabel: 'Характеристика, презентации и пр.',
        href: '/documentation',
      },
      {
        label: 'Уставные документы',
        childLabel: 'Устав, лицензия, патенты и пр.',
        href: '/documentation',
      },
    ],
  },
  {
    label: 'Новости',
    href: '/news',
  },
  {
    label: 'Дистрибьюция',
    href: '/distribution',
  },
  {
    label: 'О нас',
    href: '/about',
  },
  {
    label: 'Контакты',
    href: '/contacts',
  },
];
