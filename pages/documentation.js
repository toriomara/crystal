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
import Hamburger from '../components/Hamburger/Hamburger'

const Documentation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <Heading variant='pageTitle'>Documentation</Heading>
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
      <Hamburger/>
      
    </div>
  );
};

export default Documentation;
