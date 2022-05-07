import React, { useState } from 'react';
import { Button, Heading, Box, Stack, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Subscribe from '../components/Subscribe/Subscribe';
import Modal from '../components/Modal';
import Meta from '../components/Meta';

const MotionButton = motion(Button);

const Distribution = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Meta title='Distribution' />
      <Heading variant='pageTitle'>Дистрибьюция</Heading>
      <Text fontSize='18'>
        Мы высоко ценим устойчивые партнерские отношения с нашими потребителями
        на всей территории России и в других странах, а также гарантируем
        справедливую цену за продукт высочайшего качества
      </Text>
      <MotionButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variant='outline'
        onClick={handleClick}
      >
        Modal
      </MotionButton>
      {isOpen && <Subscribe setIsOpen />}

      {/* <Stack spacing={4}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outlined</Button>
        <Button variant="azure">Azure</Button>
        <Modal />
      </Stack> */}
    </Box>
  );
};

export default Distribution;
