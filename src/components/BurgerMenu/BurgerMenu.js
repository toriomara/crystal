import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Grid,
  GridItem,
  Box,
  VStack,
  IconButton,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { navItems} from '../../data/routeData'
import { SimpleLink } from '../../styles/link';
import SearchBar from '../Search';
import Logo from '../ui/Logo';
import { FaTimes } from 'react-icons/fa';
import ThemeToggleButton from '../../utils/ThemeToggleButton';
import { Lang } from '../Navbar/Lang';
import Phone from '../Navbar/Phone';
//import { LinkItem } from '../Navbar/Navbar';

const MotionWrapper = styled(motion.div)`
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100%;
  width: 100%;
  margin: 0 !important;
  background-color: #d2202f;
  z-index: 9;
`;

const BurgerMenu = ({ handleMenu, path }) => {
  const menuSide = useColorModeValue('brand.50', 'brand.700');

  const [menuState, setMenuState] = useState(false);

  // Don't scroll
  useEffect(() => {
    if (handleMenu) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [handleMenu]);

  // key "ESCAPE"
  const closeOnEventEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      handleMenu(!setMenuState);
    }
  };

  // CLEANER
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEventEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEventEscapeKeyDown);
    };
  });

  return (
    <AnimatePresence>
      <MotionWrapper
        initial={{ height: 0 }}
        animate={{ y: ['-100vh', '0vh'], transition: 2 }}
        exit={{ y: ['0vh', '-100vh'], transition: 2 }}
        transition={{ type: 'tween', duration: 2, stiffness: 100 }}
      >
        <Grid
          templateColumns={{
            base: '1fr',
            sm: '2fr 6fr',
          }}
          templateRows={{
            base: '1fr 9fr',
            sm: '1fr',
          }}
          gap={4}
        >
          <GridItem
            colSpan={1}
            rowSpan={1}
            display={{ base: 'grid', sm: 'grid' }}
            justifyContent='center'
            alignContent='start'
            bgColor='#F2F2F2'
            p={{
              base: '5',
              sm: '5',
              md: '5',
            }}
          >
            <Flex
              onClick={handleMenu}
              justifySelf='center'
              alignItems='center'
              justifyContent='center'
            >
              <Logo />
            </Flex>
            <Phone color='brand.700' />
          </GridItem>

          <GridItem colSpan={1} rowSpan={1} bgColor={menuSide}>
            <Grid
              templateColumns={{
                base: 'fit-content(15%) fit-content(85%)',
                sm: '2fr 6fr',
              }}
              templateRows={{
                base: '1fr 2fr',
              }}
              gap={4}
            >
              <GridItem
                colSpan={1}
                rowSpan={1}
                display={{ base: 'grid', sm: 'grid' }}
                gridAutoColumns='minmax(80px, auto)'
                justifyContent={{ base: 'start', sm: 'center' }}
                alignContent='start'
                gap={4}
                p={{
                  base: '4',
                  sm: '4',
                  md: '8',
                }}
              >
                <IconButton onClick={handleMenu}>
                  <FaTimes />
                </IconButton>
                <IconButton>
                  <ThemeToggleButton />
                </IconButton>
                <IconButton>
                  <SearchBar />
                </IconButton>
                <IconButton>
                  <Lang />
                </IconButton>
              </GridItem>
              <GridItem
                display={{ base: 'flex', sm: 'grid' }}
                justifyContent='start'
                colSpan={1}
                rowSpan={1}
                placeItems='start'
                p={{
                  base: '4',
                  sm: '4',
                  md: '4',
                }}
                //pl={0}
              >
                <VStack>
                  <Box>
                    {navItems.map((navItem) => (
                      <Box
                        key={navItem.label}
                        onClick={handleMenu}
                        color='whiteAlpha.800'
                        fontWeight='700'
                        fontSize={{
                          base: 'md',
                          sm: '1xl',
                          md: '5xl',
                          lg: '5xl',
                        }}
                      >
                        <SimpleLink href={navItem.href} path={path}>
                          {navItem.label}
                        </SimpleLink>
                      </Box>
                    ))}
                  </Box>
                </VStack>
              </GridItem>
              <GridItem
                colSpan={2}
                rowSpan={1}
                display='grid'
                justifyContent='end'
                p={{
                  base: '4',
                  sm: '4',
                  md: '4',
                }}
              >
                <VStack>
                  <Box>
                    {navItems.map(
                      (navItem) =>
                        navItem.children &&
                        navItem.children.map((child) => (
                          <Box
                            key={child.label}
                            onClick={handleMenu}
                            color='whiteAlpha.800'
                            lineHeight='2.5'
                            fontWeight='500'
                            fontSize={{
                              base: 'md',
                              sm: 'xl',
                              md: '2xl',
                            }}
                          >
                            <SimpleLink href={child.href} path={path}>
                              {child.label}
                            </SimpleLink>
                          </Box>
                        ))
                    )}
                  </Box>
                </VStack>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </MotionWrapper>
    </AnimatePresence>
  );
};

export default BurgerMenu;
