import React, { useState } from 'react';
import {
  Grid,
  GridItem,
  Button,
  Heading,
  Box,
  Divider,
  HStack,
  Text,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Subscribe from '../components/Subscribe/Subscribe';
//import Modal from '../components/Modal';
import Meta from '../components/Meta';
import {} from '@chakra-ui/react';
import Russia from '../components/Distribution/Russia';
import World from '../components/Distribution/World';
import { Tabs, Tab, TabPanel} from '../components/Distribution/Tabs'
import styled from '@emotion/styled';

const MotionButton = motion(Button);

const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const TabPanelContainer = styled.div`
  height: 100vh;
`;

const Distribution = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [activeTab, setIsActiveTab] = useState(0);
  const handleChange = (e, value) => {
    setIsActiveTab(value);
  };

  return (
    <Box>
      <Meta title='Distribution' />
      <Heading variant='pageTitle'>Дистрибьюция</Heading>
      {/* <Grid
        templateRows={{
          base: 'repeat(1fr, 10fr)',
        }}
        gap={4}
      >
        <GridItem>
          <HStack selectedTab={avtiveTab} onChange={handleChange} spacing={4}>
            <Button label='Россия' value='0' px={20} />
            <Button label='Мир' value='0' px={20} />
          </HStack>
        </GridItem>
        <GridItem>
          <Russia />
          <World />
        </GridItem>
      </Grid> */}

      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label='Россия' value={0}></Tab>
          <Tab label='Мир' value={1}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          <h1>Tab 1</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <h1>Tab 2</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1>Tab 3</h1>
        </TabPanel>
      </TabPanelContainer>

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

      {/* <Stack spacing={4}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outlined</Button>
        <Button variant="azure">Azure</Button>
        <Modal />
      </Stack> */}

      <Text fontSize='18'>
        Мы высоко ценим устойчивые партнерские отношения с нашими потребителями
        на всей территории России и в других странах, а также гарантируем
        справедливую цену за продукт высочайшего качества
      </Text>
    </Box>
  );
};

export default Distribution;
