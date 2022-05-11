import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  VStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const Russia = () => {
  return (
    <Tabs variant='soft'>
      <Grid
        templateColumns={{
          base: 'repeat(3, 1fr)',
        }}
      >
        <TabList>
          <GridItem>
            <VStack>
              <Tab>Саратов</Tab>
              <Tab>Волгоград</Tab>
              <Tab display='flex' justify='start' alignItems='start'>
                ЮФО
              </Tab>
            </VStack>
          </GridItem>
        </TabList>

        <TabPanels>
          <GridItem>
            <TabPanel>Саратовский дистрибьютор</TabPanel>
            <TabPanel>Волгоградский дистрибьютор</TabPanel>
            <TabPanel>Дистрибьютор ЮФО</TabPanel>
          </GridItem>
        </TabPanels>
      </Grid>
    </Tabs>
  );
};

export default Russia;
