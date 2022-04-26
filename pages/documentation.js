import React, { useState } from 'react';
import {
  Heading,
  IconButton,
  Icon,
  CloseIcon,
  Button,
  HamburgerIcon,
  Flex,
  Grid,
  useBoolean,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

const variants = {
  hidden: { opacity: 0, y: '-100vh' },
  visible: {
    opacity: 1,
    y: '-80px',
    transition: {
      duration: '1s',
      type: 'spring',
      damping: 15,
      stiffness: 75,
      velocity: 1000,
    },
  },
  exit: {
    y: '-100vh',
    opacity: 0,
  },
};

function ToggleContent({ header, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)}>
      <motion.h2 layout>{header}</motion.h2>
      {isOpen ? content : null}
    </motion.div>
  );
}

const Documentation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
        <Heading variant='pageTitle'>Documentation</Heading>
      </motion.div>

      <ToggleContent header='Hello' content='World'/>

      <Icon
        fontSize={25}
        cursor='pointer'
        onClick={handleClick}
        as={isOpen ? AiOutlineClose : FaBars}
        variant='ghost'
      />
      {setIsOpen && (
        <AnimatePresence>
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
        </AnimatePresence>
      )}
    </div>
  );
};

export default Documentation;
