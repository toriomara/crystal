import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Grid,
  GridItem,
  Box,
  Button,
  VStack,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { navItems } from '../../data/routeData';
//import { LinkItem } from '../Navbar/Navbar';
import { SimpleLink } from '../../styles/link';
import SearchBar from '../Search';
import Logo from '../ui/Logo';
import { FaTimes } from 'react-icons/fa';

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
            md: 'repeat(2, 1fr)',
          }}
          gap={4}
          //p={4}
        >
          <GridItem
            templateRows={{
              base: 'repeat(1, 2fr)',
            }}
            bg='white'
          >
            <SearchBar />
            <Logo />
          </GridItem>
          <GridItem colSpan={1}>
            <VStack>
              <Box>
                {navItems.map((navItem) => (
                  <Box
                    key={navItem.label}
                    onClick={handleMenu}
                    fontSize={['26', 'md', '4lg', '5xl']}
                    fontWeight='700'
                  >
                    <SimpleLink href={navItem.href} path={path}>
                      {navItem.label}
                    </SimpleLink>
                  </Box>
                ))}
              </Box>
              <IconButton onClick={handleMenu}><FaTimes/></IconButton>
            </VStack>
          </GridItem>
        </Grid>
      </MotionWrapper>
    </AnimatePresence>
  );
};

export default BurgerMenu;
