import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, GridItem, Box, Button, VStack } from '@chakra-ui/react';
import { navItems } from '../../data/routeData';
//import { LinkItem } from '../Navbar/Navbar';
import { SimpleLink } from '../../styles/link';

const Wrapper = styled(Grid)`
  position: absolute;
  display: grid;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  margin: 0 !important;
  background: #d2202f;
  z-index: 10;
`;

const MotionWrapper = motion(Wrapper);

const BurgerMenu = ({ path }) => {
  //const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [menuState, setMenuState] = useState(false);
  const handleClick = () => {
    setMenuState({
      clicked: !menuState.clicked,
      menuHam: null,
    });
  };

  // // Don't scroll
  // useEffect(() => {
  //   if (setIsOpen) {
  //     document.body.style.overflow = 'hidden';
  //   }
  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [setIsOpen]);

  // // key "ESCAPE"
  // const closeOnEventEscapeKeyDown = (e) => {
  //   if ((e.charCode || e.keyCode) === 27) {
  //     setIsOpen(!setIsOpen);
  //   }
  // };

  // // CLEANER
  // useEffect(() => {
  //   document.body.addEventListener('keydown', closeOnEventEscapeKeyDown);
  //   return function cleanup() {
  //     document.body.removeEventListener('keydown', closeOnEventEscapeKeyDown);
  //   };
  // });

  return (
    <AnimatePresence>
      <MotionWrapper
        initial={{ height: 0 }}
        animate={{ height: '100vh', transition: '0.5s' }}
        exit={{ height: 0 }}
      >
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}
          p={4}
        >
          <GridItem colSpan={1}>
            <VStack>
              {navItems.map((navItem) => (
                <Box key={navItem.label}>
                  <SimpleLink href={navItem.href} path={path}>
                    {navItem.label}
                  </SimpleLink>
                </Box>
              ))}
              <Button onClick={handleClick}>x</Button>
            </VStack>
          </GridItem>
        </Grid>
      </MotionWrapper>
    </AnimatePresence>
  );
};

export default BurgerMenu;
