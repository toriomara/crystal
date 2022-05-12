import React, { useState } from 'react';
import { Text, Grid, GridItem, Box, Divider } from '@chakra-ui/react';
import { Tabs, Tab, TabPanel } from './RegionTabs';

const Russia = () => {
  const [activeTab, setIsActiveTab] = useState(0);
  const handleChange = (e, value) => {
    setIsActiveTab(value);
  };
  return (
    <Grid
      templateColumns={{
        base: '1fr 3fr 2fr',
      }}
      gap={4}
    >
      <GridItem>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label='Центральный Федеральный округ' value={0}/>
          <Tab label='Северо-западный Федеральный округ' value={1}/>
          <Tab label='Приволжский Федеральный округ' value={2}/>
          <Tab label='Уральский Федеральный округ' value={3}/>
          <Tab label='Сибирский Федеральный округ' value={4}/>
          <Tab label='Дальневосточный Федеральный округ' value={5}/>
          <Tab label='Южный Федеральный округ' value={6}/>
          <Tab label='Северо-Кавказский Федеральный округ' value={7}/>
          <Tab label='Республика Крым' value={8}/>
          <Tab label='Саратовская область' value={9}/>
        </Tabs>
      </GridItem>

      <GridItem>
        <TabPanel value={activeTab} selectedIndex={0}>
          <h1>Sony, LTD</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <h1>CompanyName, LTD</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1>Another Company</h1>
        </TabPanel>
      </GridItem>

      <GridItem>
        <TabPanel value={activeTab} selectedIndex={0}>
          <h1>Sony, LTD</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <h1>Quad, LTD</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1>Benq, LTD</h1>
        </TabPanel>
      </GridItem>
    </Grid>
  );
};

export default Russia;
