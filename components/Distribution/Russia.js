import React, { useState } from 'react';
import {
  Grid,
  GridItem,
  Box,
  Link,
  AspectRatio,
  Skeleton,
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

const distributors = [
  {
    id: 1,
    region: 'Центральный федеральный округ',
    value: 0,
    titles: [
      { id: 1, title: 'ООО "ТОРГОВЫЙ ДОМ КОРУНД"' },
      { id: 1, title: 'ИП Чернышева Елена Владимировна' },
    ],
    address: '400002, г. Волгоград, ул. Слесарная, 103',
    phones: [
      { id: 1, phone: '+7 (8442) 46-95-86' },
      { id: 2, phone: '+7 (8442) 50-40-76' },
      { id: 3, phone: '+7 (988) 988-51-11' },
    ],
    fax: '+7 (8442) 41-93-08',
    email: 'korundrf@mail.ru',
    site: 'http://www.korundrf.ru',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.234596913487!2d44.45576431566748!3d48.662755979268795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41053328ce7302d7%3A0x81cd421ef1a31168!2z0KHQu9C10YHQsNGA0L3QsNGPINGD0LsuLCAxMDMsINCS0L7Qu9Cz0L7Qs9GA0LDQtCwg0JLQvtC70LPQvtCz0YDQsNC00YHQutCw0Y8g0L7QsdC7LiwgNDAwMDE5!5e0!3m2!1sru!2sru!4v1652446259289!5m2!1sru!2sru',
  },
  {
    id: 2,
    region: 'Северо-Западный федеральный округ',
    value: 1,
    titles: [
      { id: 1, title: 'ООО "ТОРГОВЫЙ ДОМ КОРУНД"' },
      { id: 1, title: 'ИП Чернышева Елена Владимировна' },
    ],
    address: '400002, г. Волгоград, ул. Слесарная, 103',
    phones: [
      { id: 1, phone: '+7 (8442) 46-95-86' },
      { id: 2, phone: '+7 (8442) 50-40-76' },
      { id: 3, phone: '+7 (988) 988-51-11' },
    ],
    fax: '+7 (8442) 41-93-08',
    email: 'korundrf@mail.ru',
    site: 'http://www.korundrf.ru',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.234596913487!2d44.45576431566748!3d48.662755979268795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41053328ce7302d7%3A0x81cd421ef1a31168!2z0KHQu9C10YHQsNGA0L3QsNGPINGD0LsuLCAxMDMsINCS0L7Qu9Cz0L7Qs9GA0LDQtCwg0JLQvtC70LPQvtCz0YDQsNC00YHQutCw0Y8g0L7QsdC7LiwgNDAwMDE5!5e0!3m2!1sru!2sru!4v1652446259289!5m2!1sru!2sru',
  },
  {
    id: 3,
    region: 'Приволжский федеральный округ',
    value: 2,
    titles: [
      { id: 1, title: 'ООО "ТОРГОВЫЙ ДОМ КОРУНД"' },
      { id: 1, title: 'ИП Чернышева Елена Владимировна' },
    ],
    address: '400002, г. Волгоград, ул. Слесарная, 103',
    phones: [
      { id: 1, phone: '+7 (8442) 46-95-86' },
      { id: 2, phone: '+7 (8442) 50-40-76' },
      { id: 3, phone: '+7 (988) 988-51-11' },
    ],
    fax: '+7 (8442) 41-93-08',
    email: 'korundrf@mail.ru',
    site: 'http://www.korundrf.ru',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.234596913487!2d44.45576431566748!3d48.662755979268795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41053328ce7302d7%3A0x81cd421ef1a31168!2z0KHQu9C10YHQsNGA0L3QsNGPINGD0LsuLCAxMDMsINCS0L7Qu9Cz0L7Qs9GA0LDQtCwg0JLQvtC70LPQvtCz0YDQsNC00YHQutCw0Y8g0L7QsdC7LiwgNDAwMDE5!5e0!3m2!1sru!2sru!4v1652446259289!5m2!1sru!2sru',
  },
  {
    id: 4,
    region: 'Южный федеральный округ',
    value: 3,
    titles: [{ id: 1, title: 'ООО "Торговый Дом КОРУНД ЮФО"' }],
    address:
      '400081, г. Волгоград, ул. имени маршала Рокоссовского, д. 32а, офис 305',
    phones: [
      { id: 1, phone: '+7 (927) 510-40-11' },
      { id: 2, phone: '+7 (927) 510-40-88' },
    ],
    fax: '',
    email: 'korund_ufo@mail.ru',
    site: 'http://korund-ufo.ru',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.3049881404645!2d44.50413901584977!3d48.71876371848144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411acb3cee7517d5%3A0x3221e9eeda371eb5!2z0YPQuy4g0LjQvNC10L3QuCDQnNCw0YDRiNCw0LvQsCDQoNC-0LrQvtGB0YHQvtCy0YHQutC-0LPQviwgMzLQkCwg0JLQvtC70LPQvtCz0YDQsNC0LCDQktC-0LvQs9C-0LPRgNCw0LTRgdC60LDRjyDQvtCx0LsuLCA0MDAwODc!5e0!3m2!1sru!2sru!4v1652446763762!5m2!1sru!2sru',
  },
  {
    id: 5,
    region: 'Уральский федеральный округ',
    value: 4,
    titles: [
      { id: 1, title: 'ООО "ТОРГОВЫЙ ДОМ КОРУНД"' },
      { id: 1, title: 'ИП Чернышева Елена Владимировна' },
    ],
    address: '400002, г. Волгоград, ул. Слесарная, 103',
    phones: [
      { id: 1, phone: '+7 (8442) 46-95-86' },
      { id: 2, phone: '+7 (8442) 50-40-76' },
      { id: 3, phone: '+7 (988) 988-51-11' },
    ],
    fax: '+7 (8442) 41-93-08',
    email: 'korundrf@mail.ru',
    site: 'http://www.korundrf.ru',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.234596913487!2d44.45576431566748!3d48.662755979268795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41053328ce7302d7%3A0x81cd421ef1a31168!2z0KHQu9C10YHQsNGA0L3QsNGPINGD0LsuLCAxMDMsINCS0L7Qu9Cz0L7Qs9GA0LDQtCwg0JLQvtC70LPQvtCz0YDQsNC00YHQutCw0Y8g0L7QsdC7LiwgNDAwMDE5!5e0!3m2!1sru!2sru!4v1652446259289!5m2!1sru!2sru',
  },
  {
    id: 6,
    region: 'Сибирский федеральный округ',
    value: 5,
    titles: [
      { id: 1, title: 'ООО "ТОРГОВЫЙ ДОМ КОРУНД"' },
      { id: 1, title: 'ИП Чернышева Елена Владимировна' },
    ],
    address: '400002, г. Волгоград, ул. Слесарная, 103',
    phones: [
      { id: 1, phone: '+7 (8442) 46-95-86' },
      { id: 2, phone: '+7 (8442) 50-40-76' },
      { id: 3, phone: '+7 (988) 988-51-11' },
    ],
    fax: '+7 (8442) 41-93-08',
    email: 'korundrf@mail.ru',
    site: 'http://www.korundrf.ru',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.234596913487!2d44.45576431566748!3d48.662755979268795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41053328ce7302d7%3A0x81cd421ef1a31168!2z0KHQu9C10YHQsNGA0L3QsNGPINGD0LsuLCAxMDMsINCS0L7Qu9Cz0L7Qs9GA0LDQtCwg0JLQvtC70LPQvtCz0YDQsNC00YHQutCw0Y8g0L7QsdC7LiwgNDAwMDE5!5e0!3m2!1sru!2sru!4v1652446259289!5m2!1sru!2sru',
  },
  {
    id: 7,
    region: 'Дальневосточный федеральный округ',
    value: 6,
    titles: [
      { id: 1, title: 'ООО "ТОРГОВЫЙ ДОМ КОРУНД"' },
      { id: 1, title: 'ИП Чернышева Елена Владимировна' },
    ],
    address: '400002, г. Волгоград, ул. Слесарная, 103',
    phones: [
      { id: 1, phone: '+7 (8442) 46-95-86' },
      { id: 2, phone: '+7 (8442) 50-40-76' },
      { id: 3, phone: '+7 (988) 988-51-11' },
    ],
    fax: '+7 (8442) 41-93-08',
    email: 'korundrf@mail.ru',
    site: 'http://www.korundrf.ru',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.234596913487!2d44.45576431566748!3d48.662755979268795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41053328ce7302d7%3A0x81cd421ef1a31168!2z0KHQu9C10YHQsNGA0L3QsNGPINGD0LsuLCAxMDMsINCS0L7Qu9Cz0L7Qs9GA0LDQtCwg0JLQvtC70LPQvtCz0YDQsNC00YHQutCw0Y8g0L7QsdC7LiwgNDAwMDE5!5e0!3m2!1sru!2sru!4v1652446259289!5m2!1sru!2sru',
  },
  {
    id: 8,
    region: 'Северо-Кавказский федеральный округ',
    value: 7,
    titles: [{ id: 1, title: 'ООО "Торговый Дом КОРУНД ЮФО"' }],
    address:
      '400081, г. Волгоград, ул. имени маршала Рокоссовского, д. 32а, офис 305',
    phones: [
      { id: 1, phone: '+7 (927) 510-40-11' },
      { id: 2, phone: '+7 (927) 510-40-88' },
    ],
    fax: '',
    email: 'korund_ufo@mail.ru',
    site: 'http://korund-ufo.ru',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.3049881404645!2d44.50413901584977!3d48.71876371848144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411acb3cee7517d5%3A0x3221e9eeda371eb5!2z0YPQuy4g0LjQvNC10L3QuCDQnNCw0YDRiNCw0LvQsCDQoNC-0LrQvtGB0YHQvtCy0YHQutC-0LPQviwgMzLQkCwg0JLQvtC70LPQvtCz0YDQsNC0LCDQktC-0LvQs9C-0LPRgNCw0LTRgdC60LDRjyDQvtCx0LsuLCA0MDAwODc!5e0!3m2!1sru!2sru!4v1652446763762!5m2!1sru!2sru',
  },
  {
    id: 9,
    region: 'Саратовская область',
    value: 8,
    titles: [{ id: 1, title: 'ЗАО "СЕРВИСИНВЕСТПРОЕКТ"' }],
    address: 'г. Саратов, ул. Танкистов, 84А',
    phones: [
      { id: 1, phone: '+7 (8452) 74-42-47' },
      { id: 2, phone: '+7 (905) 384-71-77' },
    ],
    fax: '+7 (8442) 41-93-08',
    email: 'mail@sar-polymer.ru',
    site: 'sar-polymer.ru',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.860189148749!2d46.02334541592679!3d51.57079651388668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c89a2eeeccc7%3A0x5f23fb309774646b!2z0YPQuy4g0KLQsNC90LrQuNGB0YLQvtCyLCA4NNCQLCDQodCw0YDQsNGC0L7Qsiwg0KHQsNGA0LDRgtC-0LLRgdC60LDRjyDQvtCx0LsuLCA0MTAwMDA!5e0!3m2!1sru!2sru!4v1652446675894!5m2!1sru!2sru',
  },
  {
    id: 10,
    region: 'Республика Крым',
    value: 9,
    titles: [{ id: 1, title: 'ООО "Торговый Дом КОРУНД ЮФО"' }],
    address:
      '400081, г. Волгоград, ул. имени маршала Рокоссовского, д. 32а, офис 305',
    phones: [
      { id: 1, phone: '+7 (927) 510-40-11' },
      { id: 2, phone: '+7 (927) 510-40-88' },
    ],
    fax: '',
    email: 'korund_ufo@mail.ru',
    site: 'http://korund-ufo.ru',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.3049881404645!2d44.50413901584977!3d48.71876371848144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411acb3cee7517d5%3A0x3221e9eeda371eb5!2z0YPQuy4g0LjQvNC10L3QuCDQnNCw0YDRiNCw0LvQsCDQoNC-0LrQvtGB0YHQvtCy0YHQutC-0LPQviwgMzLQkCwg0JLQvtC70LPQvtCz0YDQsNC0LCDQktC-0LvQs9C-0LPRgNCw0LTRgdC60LDRjyDQvtCx0LsuLCA0MDAwODc!5e0!3m2!1sru!2sru!4v1652446763762!5m2!1sru!2sru',
  },
];

const Russia = () => {
  const [activeTab, setIsActiveTab] = useState(0);
  const handleChange = (e, value) => {
    setIsActiveTab(value);
  };
  return (
    <Grid
      templateColumns={{
        base: '2fr 7fr 4fr',
      }}
      gap={18}
      py={12}
    >
      <GridItem>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          {distributors.map((d, value) => (
            <Tab key={d.id} label={d.region} value={value} />
          ))}
        </Tabs>
      </GridItem>

      <GridItem>
        {distributors.map((d, value) => (
          <TabPanel key={d.id} value={activeTab} selectedIndex={value}>
            <iframe
              fallback={<Skeleton />}
              src={d.map}
              width='100%'
              height='350%'
            />
          </TabPanel>
        ))}
      </GridItem>

      <GridItem>
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
            <Box paddingBottom={6}>
              {d.phones.map((p) => (
                <MovingLink key={p} href='tel:{p.phone}'>
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
              <MovingLink href='mailto:{d.email}'>
                <IconItem>
                  <FaEnvelope fill='brand.200' />
                </IconItem>
                {d.email}
              </MovingLink>
            </Box>
            <Box paddingBottom={6}>
              <MovingLink href={d.site}>
                <IconItem>
                  <ImSphere fill='brand.200' />
                </IconItem>
                {d.site}
              </MovingLink>
            </Box>
          </TabPanel>
        ))}
      </GridItem>
    </Grid>
  );
};

export default Russia;
