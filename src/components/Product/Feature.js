import {
  Box,
  Container,
  Text,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { products } from '../../data/productsData';

const FeatureItem = ({ children }) => {
  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.300');
  const fontColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.700');

  const MotionBox = motion(Box);

  return (
    <MotionBox
      color={fontColor}
      border={1}
      borderStyle='solid'
      borderColor={borderColor}
      rounded={4}
      p={4}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </MotionBox>
  );
};

export const Feature = ({ name, temperature, volume, packaging, color }) => {
  const MyHeading = motion(Heading);
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(4, 1fr)',
      }}
      gap={{ base: '4', sm: '6', md: '6' }}
      my={10}
    >
      <FeatureItem>
        <Stat>
          <StatLabel fontSize={16}>Температурный диапазон</StatLabel>
          <StatNumber>
            <AnimatePresence exitBeforeEnter>
              <MyHeading
                key={name}
                variant='h4'
                lineHeight='1.8'
                fontWeight='600'
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                }}
                exit={{ opacity: 0 }}
              >
                {temperature}
              </MyHeading>
            </AnimatePresence>
          </StatNumber>
        </Stat>
      </FeatureItem>
      <FeatureItem>
        <Stat>
          <StatLabel fontSize={18}>Объём</StatLabel>
          <StatNumber>
            <AnimatePresence exitBeforeEnter>
              <MyHeading
                key={name}
                variant='h4'
                lineHeight='1.8'
                fontWeight='600'
                initial='hidden'
                animate='visible'
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                      duration: 0.8,
                      ease: 'anticipate',
                    },
                  },
                }}
              >
                {volume}
              </MyHeading>
            </AnimatePresence>
          </StatNumber>
        </Stat>
      </FeatureItem>
      <FeatureItem>
        <Stat>
          <StatLabel fontSize={18}>Упаковка</StatLabel>
          <StatNumber>
            <AnimatePresence exitBeforeEnter>
              <MyHeading
                key={name}
                variant='h4'
                lineHeight='1.8'
                fontWeight='600'
                initial='hidden'
                animate='visible'
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.8,
                      ease: 'anticipate',
                    },
                  },
                }}
              >
                {packaging}
              </MyHeading>
            </AnimatePresence>
          </StatNumber>
        </Stat>
      </FeatureItem>
      <FeatureItem>
        <Stat>
          <StatLabel fontSize={18}>Цвет композиции</StatLabel>
          <StatNumber>
            <AnimatePresence exitBeforeEnter>
              <MyHeading
                key={name}
                variant='h4'
                lineHeight='1.8'
                fontWeight='600'
                initial='hidden'
                animate='visible'
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.8,
                      ease: 'anticipate',
                    },
                  },
                }}
              >
                {color}
              </MyHeading>
            </AnimatePresence>
          </StatNumber>
        </Stat>
      </FeatureItem>
    </Grid>
  );
};
