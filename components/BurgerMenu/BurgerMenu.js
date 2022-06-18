import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Grid,
  GridItem,
  Box,
  HStack,
  Button,
  VStack,
  IconButton,
  Link,
  Flex,
} from '@chakra-ui/react';
import { navItems } from '../../data/routeData';
//import { LinkItem } from '../Navbar/Navbar';
import { SimpleLink } from '../../styles/link';
import SearchBar from '../Search';
import Logo from '../ui/Logo';
import { FaTimes } from 'react-icons/fa';
import ThemeToggleButton from '../ui/ThemeToggleButton';
import { Lang } from '../Navbar/Lang';

const Wrapper = styled.div`
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100%;
  width: 100%;
  margin: 0 !important;
  background: #d2202f;
  z-index: 9;
`;

const MotionWrapper = motion(Wrapper);

const BurgerMenu = ({ handleMenu, path }) => {
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
        animate={{ height: '100vh', transition: '0.3s' }}
        exit={{ height: 0 }}
      >
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(1, 2fr 4fr)',
          }}
          templateRows={{
            base: 'repeat(1, 2fr 12fr)',
            md: 'repeat(1, 1fr)',
          }}
          gap={4}
        >
          <GridItem
            bg='whiteAlpha.800'
            colSpan={1}
            //bg='white'
            p={{
              base: '2',
              sm: '3',
              md: '4',
            }}
          >
            <HStack justifyContent='center'>
              <Flex onClick={handleMenu}>
                <Logo />
              </Flex>
              <SearchBar color='gray.700' />
              <Lang color='gray.700' />
              <Button
                as='a'
                href='tel:+7 800 2347878'
                variant='none'
                color='gray.700'
                px={{
                  base: 'none',
                  sm: '1',
                  md: '2',
                }}
              >
                <span>+7 800 234-78-78</span>
              </Button>
            </HStack>
          </GridItem>

          <GridItem colSpan={1}>
            <VStack>
              <Box>
                {navItems.map((navItem) => (
                  <Box
                    key={navItem.label}
                    onClick={handleMenu}
                    fontSize={{
                      base: '3xl',
                      sm: '4xl',
                      md: '5xl',
                      lg: '5xl',
                    }}
                    fontWeight='700'
                    color='whiteAlpha.800'
                  >
                    <SimpleLink href={navItem.href} path={path}>
                      {navItem.label}
                    </SimpleLink>
                  </Box>
                ))}
              </Box>
              <IconButton onClick={handleMenu}>
                <FaTimes />
              </IconButton>
            </VStack>
          </GridItem>
        </Grid>
      </MotionWrapper>
    </AnimatePresence>
  );
};

export default BurgerMenu;
