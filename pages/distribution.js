import React, { useState } from 'react';
import { Button, Heading, Box, Divider, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Subscribe from '../components/Subscribe/Subscribe';
import Meta from '../components/Meta';
import DistributionTable from '../components/Distribution/DistributionTable';

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

      <DistributionTable />

      <Divider my={4} />

      <MotionButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variant='outline'
        onClick={handleClick}
      >
        Modal
      </MotionButton>
      {isOpen && <Subscribe setIsOpen />}

      <Text fontSize='18'>
        Мы высоко ценим устойчивые партнерские отношения с нашими потребителями
        на всей территории России и в других странах, а также гарантируем
        справедливую цену за продукт высочайшего качества
      </Text>
    </Box>
  );
};

export default Distribution;
