import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Russia from './Russia';
import World from './World';
import { Grid, GridItem, Box, useColorModeValue } from '@chakra-ui/react';
import { Tabs, Tab, TabPanel } from './Tabs';

const MotionWrapper = motion(Box);

const DistributionTable = () => {
  const [activeTab, setIsActiveTab] = useState(0);
  const handleChange = (e, value) => {
    setIsActiveTab(value);
  };

  const bgWrapper = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')

  return (
    <MotionWrapper
      templateRows={{
        base: 'repeat(1fr, 10fr)',
      }}
      gap={4}
      bg={bgWrapper}
      rounded={4}
      px={6}
    >
      <Grid>
        <GridItem py={1}>
          <Tabs selectedTab={activeTab} onChange={handleChange}>
            <Tab label='Россия' value={0} />
            <Tab label='Мир' value={1} />
          </Tabs>
        </GridItem>
        <GridItem>
          <TabPanel value={activeTab} selectedIndex={0}>
            <Russia />
          </TabPanel>
          <TabPanel value={activeTab} selectedIndex={1}>
            <World />
          </TabPanel>
        </GridItem>
      </Grid>
    </MotionWrapper>
  );
};

export default DistributionTable;
