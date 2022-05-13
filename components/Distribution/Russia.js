import React, { useState } from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';
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
          <Tab label='Центральный федеральный округ' value={0} />
          <Tab label='Северо-Западный федеральный округ' value={1} />
          <Tab label='Приволжский федеральный округ' value={2} />
          <Tab label='Уральский федеральный округ' value={3} />
          <Tab label='Сибирский федеральный округ' value={4} />
          <Tab label='Дальневосточный федеральный округ' value={5} />
          <Tab label='Южный федеральный округ' value={6} />
          <Tab label='Северо-Кавказский федеральный округ' value={7} />
          <Tab label='Республика Крым' value={8} />
          <Tab label='Саратовская область' value={9} />
        </Tabs>
      </GridItem>

      <GridItem>
        <TabPanel value={activeTab} selectedIndex={0}>
          <Box>ООО ТОРГОВЫЙ ДОМ КОРУНД, ИП Чернышева Елена Владимировна</Box>
          <span>400002, г. Волгоград, ул. Слесарная, 103</span>
          <span>http://www.korundrf.ru</span>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <span>ООО ТОРГОВЫЙ ДОМ КОРУНД, ИП Чернышева Елена Владимировна</span>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <span>ООО ТОРГОВЫЙ ДОМ КОРУНД, ИП Чернышева Елена Владимировна</span>
        </TabPanel>
        
        <TabPanel value={activeTab} selectedIndex={9}>
          <h1>ЗАО «СЕРВИСИНВЕСТПРОЕКТ»</h1>
        </TabPanel>
      </GridItem>

      <GridItem>
        <TabPanel value={activeTab} selectedIndex={0}>
          <h1>Sony, Ltd</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <h1>Quad, Ltd</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1>Benq, Ltd</h1>
        </TabPanel>
      </GridItem>
    </Grid>
  );
};

export default Russia;
