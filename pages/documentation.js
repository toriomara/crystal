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
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

const Documentation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <motion.div drag='x' dragConstraints={{ left: -100, right: 100 }}>
        <Heading variant='pageTitle'>Documentation</Heading>
      </motion.div>
      <Button onClick={handleClick}>Open</Button>
      <IconButton
        color='red'
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
          <motion.div
            variants={variants}
            initial='closed'
            animate={isOpen ? 'open' : 'closed'}
          >
            <Grid bg='red' h='80vh' w='80vw'>
              <Heading>HOME</Heading>
              <Heading>ABOUT US</Heading>
              <Heading>CONTACTS</Heading>
            </Grid>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Documentation;
