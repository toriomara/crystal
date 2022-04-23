import React, { useState } from 'react';
import {
  Heading,
  IconButton,
  CloseIcon,
  Button,
  HamburgerIcon,
  Flex,
  Grid,
  calc,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: '-100vh' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: '3s',
      type: 'spring',
      damping: 25,
      stiffness: 75,
      velocity: 1000,
    },
  },
  exit: {
    y: '-100vh',
    opacity: 0,
  },
};

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      {/* <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        open
      </motion.button>

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button onClick={handleClick}>Open</Button>
      </motion.button> */}

      <Button onClick={handleClick}>Open</Button>
      <IconButton
        onClick={handleClick}
        color='brand.200'
        //display={{ base: 'inline-block', xl: 'none' }}
        icon={HamburgerIcon}
        // icon={
        //   isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
        // }
        variant={'ghost'}
        aria-label={'Toggle Navigation'}
      />
      <AnimatePresence>
        {setIsOpen && (
          <motion.nav
            variants={variants}
            initial='hidden'
            animate={isOpen ? 'visible' : 'hidden'}
            exit='exit'
          >
            <Grid bg='red' h='80vh' w='50vw'>
              <Heading>HOME</Heading>
              <Heading>ABOUT US</Heading>
              <Heading>CONTACTS</Heading>
            </Grid>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hamburger;
