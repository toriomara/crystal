import React, { useState } from 'react';
import {
  Grid,
  GridItem,
  Box,
  Link,
  AspectRatio,
  Skeleton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { Tabs, Tab, TabPanel } from './RegionTabs';
import { SimpleLink, MovingLink, IconItem } from '../../styles/link';

import {
  FaEnvelope,
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaViber,
  FaYoutube,
} from 'react-icons/fa';
import { ImSphere } from 'react-icons/im';
import { FaFax } from 'react-icons/fa';

const distributors = [
  {
    id: 1,
    region: 'Республика Беларусь',
    value: 0,
    titles: [{ id: 1, title: 'ЧПТУП "АТРИОТЕХ"' }],
    address:
      '223053, Республика Беларусь, Минская обл., Минский р-н., Боровлянский с/с, д. Боровляны, ул. 40-лет Победы, 27/1-6',
    legalAddress: '',
    phones: [{ id: 1, phone: '+375 44 751 99 70' }],
    fax: '',
    emails: [{ id: 1, email: '7519970@mail.ru' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.1014681470733!2d27.67667631599497!3d53.987071334225405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc8fbdc864961%3A0xa34f1b7cf614ed5f!2z0YPQuy4gNDAg0LvQtdGCINCf0L7QsdC10LTRiyAyNy8xLCDQkdC-0YDQvtCy0LvRj9C90YsgMjIzMDUzLCDQkdC10LvQsNGA0YPRgdGM!5e1!3m2!1sru!2sru!4v1653143456882!5m2!1sru!2sru',
  },
  {
    id: 2,
    region: 'Украина',
    value: 1,
    titles: [{ id: 1, title: 'ООО "Торговый Дом ГЕРМЕТИК-УНИВЕРСАЛ"' }],
    address: '49000, Украина, г. Днепропетровск, ул. Воронежская, 17',
    legalAddress:
      '49000, Украина, г. Днепропетровск, ул. Запорожское шоссе, 60/117',
    phones: [
      { id: 1, phone: '+38 099 905-98-60' },
      { id: 2, phone: '+38 067 563-09-90' },
      { id: 3, phone: '+38 056 785-32-21' },
      { id: 4, phone: '+38 056 785-56-21' },
    ],
    fax: '',
    emails: [{ id: 1, email: 't.d.germetik@mail.ru' }],
    site: 'www.germetik-universal.com',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.079486641366!2d35.07387411584477!3d48.52220583227213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d958f0d7e41907%3A0x5b9ba4fe941294a2!2z0YPQuy4g0JLQvtGA0L7QvdC10LbRgdC60LDRjywgMTcsINCU0L3QtdC_0YAsINCU0L3QtdC_0YDQvtC_0LXRgtGA0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgNDkwMDA!5e1!3m2!1sru!2sru!4v1653145787132!5m2!1sru!2sru',
  },
  {
    id: 3,
    region: 'Республика Казахстан',
    value: 2,
    titles: [{ id: 1, title: 'ТОО "БАЛКАН КОРУНД"' }],
    address: 'г.Алматы, мкр.Алмагуль, дом 3А',
    legalAddress: '',
    phones: [{ id: 1, phone: '+7(727)378-37-75' }],
    fax: '+7(727)378-37-74',
    emails: [{ id: 1, email: 'startnovo@mail.ru' }],
    site: 'http://www.v-in.kz',
    map: '',
  },
  {
    id: 4,
    region: 'The Sultanate Of Oman',
    value: 3,
    titles: [{ id: 1, title: '"ALNAJA`A TRADING AND CONTRACTING LLC"' }],
    address: 'Muscat, P.O. Box 3172 Post Code: 112',
    legalAddress: '',
    phones: [{ id: 1, phone: '+00968 24703018' }],
    fax: '',
    emails: [
      { id: 1, email: 'nkakf@hotmail.com' },
      { id: 2, email: 'alnaja.t.c@gmail.com' },
    ],
    site: 'http://www.v-in.kz',
    map: '',
  },
];

const World = () => {
  const [activeTab, setIsActiveTab] = useState(0);
  const handleChange = (e, value) => {
    setIsActiveTab(value);
  };
  return (
    <Grid
      templateRows={{
        base: 'repeat(2, auto)',
        lg: 'repeat(2, auto)',
        xl: '1fr',
      }}
      templateColumns={{
        base: 'repeat(2, 1fr)',
        lg: 'repeat(2, 1fr)',
        xl: '3fr 9fr 6fr',
      }}
      gap={{ base: 8, md: '6' }}
      py={12}
    >
      <GridItem
        rowSpan={{ base: '1', lg: '1', xl: '1' }}
        colSpan={{ base: '1', lg: '1', xl: '1' }}
        order={{ base: '1', xl: '1' }}
        paddingRight={{ base: '16', sm: '10', md: '0' }}
      >
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          {distributors.map((d, value) => (
            <Tab key={d.id} label={d.region} value={value} />
          ))}
        </Tabs>
      </GridItem>

      <GridItem
        rowSpan={{
          base: '1',
          lg: '1',
          xl: '1',
        }}
        colSpan={{
          base: '2',
          lg: '2',
          xl: '1',
        }}
        order={{ base: '3', xl: '2' }}
      >
        {distributors.map((d, value) => (
          <TabPanel key={d.id} value={activeTab} selectedIndex={value}>
            <Box border='1px solid #EDF2F7' rounded={4}>
              <AspectRatio ratio={9 / 9} borderRadius={4}>
                <iframe fallback={<Skeleton />} src={d.map} />
              </AspectRatio>
            </Box>
          </TabPanel>
        ))}
      </GridItem>

      <GridItem
        rowSpan={{ base: '1', xl: '1' }}
        colSpan={{ base: '1', xl: '1' }}
        order={{ base: '2', xl: '2' }}
      >
        {distributors.map((d, value) => (
          <TabPanel key={d.id} value={activeTab} selectedIndex={value}>
            <Box paddingBottom={6}>
              {d.titles.map((t) => (
                <Box key={t}>{t.title}</Box>
              ))}
            </Box>
            <Box paddingBottom={6}>
              <IconItem fill='brand.200'>
                <FaMapMarkerAlt fill='brand.200' />
              </IconItem>
              {d.address}
            </Box>
            {d.legalAddress && (
              <Box paddingBottom={6}>
                <IconItem fill='brand.200'>
                  <FaMapMarkerAlt fill='brand.200' />
                </IconItem>
                Юридический адрес:&nbsp;
                {d.legalAddress}
              </Box>
            )}
            <Box paddingBottom={6}>
              {d.phones.map((p) => (
                <MovingLink key={p} href={'tel:' + p.phone}>
                  <Box py={0.45}>
                    <IconItem>
                      <FaPhone fill='brand.200' />
                    </IconItem>
                    {p.phone}
                  </Box>
                </MovingLink>
              ))}
            </Box>
            <Box paddingBottom={6}>
              {d.emails.map((e) => (
                <MovingLink key={e} href={'mailto:' + e.email}>
                  <IconItem>
                    <FaEnvelope fill='brand.200' />
                  </IconItem>
                  {e.email}
                </MovingLink>
              ))}
            </Box>
            {d.fax && (
              <Box paddingBottom={6}>
                <IconItem>
                  <FaFax fill='brand.200' />
                </IconItem>
                {d.fax}
              </Box>
            )}
            {d.site && (
              <Box paddingBottom={6}>
                <MovingLink href={d.site}>
                  <IconItem>
                    <ImSphere fill='brand.200' />
                  </IconItem>
                  {d.site}
                </MovingLink>
              </Box>
            )}
          </TabPanel>
        ))}
      </GridItem>
    </Grid>
  );
};

export default World;
