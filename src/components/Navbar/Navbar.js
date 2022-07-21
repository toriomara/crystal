import React, { useState } from 'react';
import NextLink from 'next/link';
import {
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
  Divider,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import ThemeToggleButton from '../../utils/ThemeToggleButton';
import SearchBar, { SearchBlock } from '../Search';
import Logo from '../ui/Logo';
import { Lang } from './Lang';
import { motion } from 'framer-motion';
import { navItems } from '../../data/routeData';
import Phone from './Phone';

import { Preheader } from '../Preheader/Preheader';
import Scrolly from '../../utils/Scrolly';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export const LinkItem = ({ href, path, children, ...props }) => {
  const active = path === href;
  return (
    <NextLink href={href} passHref>
      <Link
        px={{ lg: '2', '2xl': '3' }}
        py={2}
        fontSize={16}
        rounded={4}
        whiteSpace='nowrap'
        fontWeight={active ? '500' : 'normal'}
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

export const Navbar = ({ path, props }) => {
  //const { isOpen, onToggle, onClose } = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // Mobile Chakra
  const [isVisible, setIsVisible] = useState(false);
  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  const [isPreheader, setIsPreheader] = useState(true);
  const handleClick = () => {
    setIsPreheader(!isPreheader);
  };

  const [isMobile, setIsMobile] = useState(false);
  const closeMobile = () => {
    setIsMobile(!isMobile);
  };

  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.200');

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
                <Phone />
              </Flex>
              <Divider
                display={{ base: 'none', md: 'flex' }}
                orientation='vertical'
                height='50%'
              />
              <Flex display={{ base: 'none', md: 'flex' }}>
                <SearchBar
                  display={{ base: 'none', sm: 'flex' }}
                  px={{
                    md: 'none',
                    sm: '1',
                    md: '2',
                  }}
                />
              </Flex>
              <Divider
                display={{ base: 'none', sm: 'flex' }}
                orientation='vertical'
                height='50%'
              />
              <Lang display={{ base: 'none', sm: 'flex' }} />
              <Divider
                display={{ base: 'none', sm: 'flex' }}
                orientation='vertical'
                height='50%'
              />
              <Flex display={{ base: 'none', sm: 'flex' }}>
                <ThemeToggleButton display={{ base: 'none' }} />
              </Flex>
              <Divider
                display={{ base: 'none', sm: 'flex', xl: 'none' }}
                orientation='vertical'
                height='50%'
              />
              <Flex>
                <IconButton
                  ref={btnRef}
                  onClick={onOpen}
                  variant='none'
                  display={{ base: 'flex', xl: 'none' }}
                >
                  <HamburgerIcon />
                </IconButton>
              </Flex>
            </HStack>
          </MotionFlex>
          <Collapse in={isOpen} animateOpacity>
            {/* <MobileNav isVisible={isVisible} /> */}
          </Collapse>
        </Container>
        {/* <Scrolly /> */}
      </Box>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement='top'
        //finalFocusRef={btnRef}
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent bg={useColorModeValue('white', 'gray.800')}>
          <DrawerHeader
            display='flex'
            alignItems='center'
            justifyContent='space-between'
          >
            <Logo />
            <Spacer/>
            <Button as='a' href='tel:+78002347878' variant='none'>
              <span>8 800 234-78-78</span>
            </Button>
            <ThemeToggleButton />
            <IconButton variant='none'>
              <CloseIcon onClick={onClose} />
            </IconButton>
          </DrawerHeader>

          <DrawerBody>
            <SearchBlock />
            <Stack>
              <Flex display={{ base: 'flex' }}></Flex>
              {navItems.map((navItem) => (
                <MobileNavItem
                  key={navItem.label}
                  onClose={onClose}
                  {...navItem}
                />
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const DesktopNav = ({ href, path, ...props }) => {
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
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover placement='bottom-start' trigger='hover'>
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
          </Popover>
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
      <Stack direction='row' align='center'>
        <Box>
          <Text
            transition='all .3s ease'
            _groupHover={{ color: 'brand.50' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize='sm'>{childLabel}</Text>
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

// const MobileNav = ({ onClose }) => {
//   return (
//     <Stack p={4} bg={useColorModeValue('white', 'gray.800')}>
//       <Flex display={{ base: 'flex' }}>
//         <SearchBar />
//         <ThemeToggleButton />
//         <Button as='a' href='tel:+78002347878' variant='none'>
//           <span>8 800 234-78-78</span>
//         </Button>
//       </Flex>
//       {navItems.map((navItem) => (
//         <MobileNavItem key={navItem.label} onClose={onClose} {...navItem} />
//       ))}
//     </Stack>
//   );
// };

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={LinkItem}
        href={href ?? '#'}
        justify='space-between'
        align='center'
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
            transition='all .25s ease-in-out'
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
