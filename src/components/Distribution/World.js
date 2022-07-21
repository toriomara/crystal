import React, { useState } from 'react';
import {
  Grid,
  GridItem,
  Box,
  Link,
  AspectRatio,
  Skeleton,
  useColorModeValue,
} from '@chakra-ui/react';
import { Tabs, Tab, TabPanel } from './RegionTabs';
import { MovingLink, IconItem } from '../../styles/link';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { ImSphere } from 'react-icons/im';
import { FaFax } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';

const distributors = [
  {
    id: 1,
    region: 'Республика Беларусь',
    value: 0,
    title: 'ЧПТУП "АТРИОТЕХ"',
    address:
      '223053, Республика Беларусь, Минская обл., Минский р-н., Боровлянский с/с, д. Боровляны, ул. 40-лет Победы, 27/1-6',
    legalAddress: '',
    manager: 'Макавчик Е.С.',
    phones: [{ id: 1, phone: '+375 44 751 99 70' }],
    fax: '',
    emails: [{ id: 1, email: '7519970@mail.ru' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2345.8846611920535!2d27.676676315994968!3d53.98707133422538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc8fbdc864961%3A0xa34f1b7cf614ed5f!2z0YPQuy4gNDAg0LvQtdGCINCf0L7QsdC10LTRiyAyNy8xLCDQkdC-0YDQvtCy0LvRj9C90YsgMjIzMDUzLCDQkdC10LvQsNGA0YPRgdGM!5e0!3m2!1sru!2sru!4v1653159155953!5m2!1sru!2sru',
  },
  {
    id: 2,
    region: 'Украина',
    value: 1,
    title: 'ООО "Торговый Дом ГЕРМЕТИК-УНИВЕРСАЛ"',
    address: '49000, Украина, г. Днепропетровск, ул. Воронежская, 17',
    legalAddress:
      '49000, Украина, г. Днепропетровск, ул. Запорожское шоссе, 60/117',
    manager: '',
    phones: [
      { id: 1, phone: '+38 099 905-98-60' },
      { id: 2, phone: '+38 067 563-09-90' },
      { id: 3, phone: '+38 056 785-32-21' },
      { id: 4, phone: '+38 056 785-56-21' },
    ],
    fax: '',
    emails: [{ id: 1, email: 't.d.germetik@mail.ru' }],
    site: 'www.germetik-universal.com',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.5752889440464!2d35.07387411584478!3d48.52220583227212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d958f0d7e41907%3A0x5b9ba4fe941294a2!2z0YPQuy4g0JLQvtGA0L7QvdC10LbRgdC60LDRjywgMTcsINCU0L3QtdC_0YAsINCU0L3QtdC_0YDQvtC_0LXRgtGA0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgNDkwMDA!5e0!3m2!1sru!2sru!4v1653159207320!5m2!1sru!2sru',
  },
  {
    id: 3,
    region: 'Республика Казахстан',
    value: 2,
    title: 'ТОО "БАЛКАН КОРУНД"',
    address: 'Казахстан, г.Алматы, мкр.Алмагуль, дом 3А',
    legalAddress: '',
    manager: 'Толегенов Б.М.',
    phones: [{ id: 1, phone: '+7(727)378-37-75' }],
    fax: '+7(727)378-37-74',
    emails: [{ id: 1, email: 'startnovo@mail.ru' }],
    site: 'http://www.v-in.kz',
    map: '',
  },
  {
    id: 4,
    region: 'Оман',
    value: 3,
    title: '"ALNAJA`A TRADING AND CONTRACTING LLC"',
    address: 'Sultanate Of Oman, Muscat, P.O. Box 3172 Post Code: 112',
    legalAddress: '',
    manager: 'Mr. NAEL KAMEL AHMAD FARAJ',
    phones: [{ id: 1, phone: '+00968 24703018' }],
    fax: '',
    emails: [
      { id: 1, email: 'nkakf@hotmail.com' },
      { id: 2, email: 'alnaja.t.c@gmail.com' },
    ],
    site: 'http://www.v-in.kz',
    map: '',
  },
  {
    id: 5,
    region: 'Китай',
    value: 4,
    title: 'Liaoning Yijing Industrial Co, Ltd.',
    address: '24,Beisi Road, Heping Dist, Shenyang City, China',
    legalAddress: '',
    manager: 'He Quan Zhou',
    phones: [
      { id: 1, phone: '+86-24-2291-5389' },
      { id: 2, phone: '+86-24-2291-7089' },
    ],
    fax: '+86-24-2291-4389',
    emails: [{ id: 1, email: 'hechengxian2008@163.com' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.42268736518!2d123.40681131567995!3d41.79765397842322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5e2f87f582751597%3A0x59a2cd80d9f0afe6!2zQmVpIFNpIE1hIEx1LCBIZSBQaW5nIFF1LCBTaGVuIFlhbmcgU2hpLCBMaWFvIE5pbmcgU2hlbmcsINCa0LjRgtCw0Lk!5e0!3m2!1sru!2sru!4v1653152816721!5m2!1sru!2sru',
  },
  {
    id: 6,
    region: 'Хорватия',
    value: 5,
    title: 'DEALER "VIVO-GRAD" d.o.o. CROATIA',
    address: 'Dankovečka 7, 10 040 Zagreb, Hrvatska',
    legalAddress: '',
    manager: '',
    phones: [{ id: 1, phone: '+385(01)2993-558' }],
    fax: '+385(1)2989-329',
    emails: [{ id: 1, email: 'vivograd@gmail.com' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.991215662964!2d16.053736215775952!3d45.83145811688284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47667808b357c577%3A0xda2fea6b75595fc7!2zRGFua292ZcSNa2EgdWwuIDcsIDEwMDAwLCBaYWdyZWIsINCl0L7RgNCy0LDRgtC40Y8!5e0!3m2!1sru!2sru!4v1653153342810!5m2!1sru!2sru',
  },
  {
    id: 7,
    region: 'Сербия',
    value: 6,
    title: 'DEALER "VIVO-GRAD" d.o.o. CROATIA',
    address: 'Dankovečka 7, 10 040 Zagreb, Hrvatska',
    legalAddress: '',
    manager: '',
    phones: [{ id: 1, phone: '+385(01)2993-558' }],
    fax: '+385(1)2989-329',
    emails: [{ id: 1, email: 'vivograd@gmail.com' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.991215662964!2d16.053736215775952!3d45.83145811688284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47667808b357c577%3A0xda2fea6b75595fc7!2zRGFua292ZcSNa2EgdWwuIDcsIDEwMDAwLCBaYWdyZWIsINCl0L7RgNCy0LDRgtC40Y8!5e0!3m2!1sru!2sru!4v1653153342810!5m2!1sru!2sru',
  },
  {
    id: 8,
    region: 'Литва',
    value: 7,
    title: 'UAB "SIGMENTAS"',
    address: '',
    legalAddress: '',
    manager: '',
    phones: [{ id: 1, phone: '+370 670 588 77' }],
    fax: '',
    emails: [{ id: 1, email: 'sigmentas@gmail.com' }],
    site: '',
    map: '',
  },
  {
    id: 9,
    region: 'Эстония',
    value: 8,
    title: 'AS EVAS B&P',
    address: 'Põllu 6, Kohtla-Järve, Estonia, 30328 Reg.nr. 10128050',
    legalAddress: '',
    manager: '',
    phones: [
      { id: 1, phone: '+372 523 3140' },
      { id: 1, phone: '+372 552 7175' },
    ],
    fax: '+372 332 4058',
    emails: [{ id: 1, email: 'evas2@yandex.ru' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.4928649795136!2d27.26090181615654!3d59.39148921307904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46947a78418c659f%3A0xf99698bea339b864!2sEvas%20B%26P%20AS!5e0!3m2!1sru!2sru!4v1653154349395!5m2!1sru!2sru',
  },
  {
    id: 10,
    region: 'Германия',
    value: 9,
    title: 'Fa. Ballweg & Fromm',
    address: 'Einhard 10, 74722 Buchen, USt Id. DE297662054',
    legalAddress: '',
    manager: '',
    phones: [{ id: 1, phone: '+49 178 3394818' }],
    fax: '',
    emails: [{ id: 1, email: 'eugen.fromm@korund34.de' }],
    site: '',
    map: '',
  },
  {
    id: 11,
    region: 'Словения',
    value: 10,
    title: 'LOMBAR - storitve d.o.o.',
    address: 'Ulica Jožeta Jame 14, 1210 LJUBLJANA-ŠENTVID',
    legalAddress: '',
    manager: 'Nena Bizjak Lombar',
    phones: [{ id: 1, phone: '+386 (0)31 376 924' }],
    fax: '+386 (0)1 518 90 76',
    emails: [{ id: 1, email: 'jus@lombar.si' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.049105061124!2d14.476672215782305!3d46.08999859948803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477acd2f686f82fd%3A0x88089779cb96b3d2!2zVWxpY2EgSm_FvmV0YSBKYW1lIDE0LCAxMjEwIExqdWJsamFuYSAtIMWgZW50dmlkLCDQodC70L7QstC10L3QuNGP!5e0!3m2!1sru!2sru!4v1653158821761!5m2!1sru!2sru',
  },
  {
    id: 11,
    region: 'Туркмения',
    value: 10,
    title: 'UCD WORLDWIDE GROUP SDN.BHD',
    address:
      '№. 20A, Jalan BRP 1 / 2, Bukit Rahman Putra, 47000 Sungai Buloh, Selangor Darul Ehsan, Malaysia',
    legalAddress: '',
    manager: 'Елена Федорова',
    phones: [
      { id: 1, phone: '+60132388367' },
      { id: 1, phone: '+79149654263' },
    ],
    fax: '',
    emails: [
      { id: 1, email: 'liqeramin@yahoo.com' },
      { id: 1, email: 'info@korund.com.my' },
    ],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.5541668293426!2d101.55841811525208!3d3.211065053663157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4572ed0bb291%3A0xbf6174639561d3f8!2sDM%20Corporate%20Holding!5e0!3m2!1sru!2sru!4v1653159809413!5m2!1sru!2sru',
  },
  {
    id: 12,
    region: 'Малайзия',
    value: 11,
    title: 'UCD WORLDWIDE GROUP SDN.BHD',
    address:
      '№. 20A, Jalan BRP 1 / 2, Bukit Rahman Putra, 47000 Sungai Buloh, Selangor Darul Ehsan, Malaysia',
    legalAddress: '',
    manager: 'Елена Федорова',
    phones: [
      { id: 1, phone: '+60132388367' },
      { id: 1, phone: '+79149654263' },
    ],
    fax: '',
    emails: [
      { id: 1, email: 'liqeramin@yahoo.com' },
      { id: 1, email: 'info@korund.com.my' },
    ],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.5541668293426!2d101.55841811525208!3d3.211065053663157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4572ed0bb291%3A0xbf6174639561d3f8!2sDM%20Corporate%20Holding!5e0!3m2!1sru!2sru!4v1653159809413!5m2!1sru!2sru',
  },
  {
    id: 13,
    region: 'Сингапур',
    value: 12,
    title: 'UCD WORLDWIDE GROUP SDN.BHD',
    address:
      '№. 20A, Jalan BRP 1 / 2, Bukit Rahman Putra, 47000 Sungai Buloh, Selangor Darul Ehsan, Malaysia',
    legalAddress: '',
    manager: 'Елена Федорова',
    phones: [
      { id: 1, phone: '+60132388367' },
      { id: 1, phone: '+79149654263' },
    ],
    fax: '',
    emails: [
      { id: 1, email: 'liqeramin@yahoo.com' },
      { id: 1, email: 'info@korund.com.my' },
    ],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.5541668293426!2d101.55841811525208!3d3.211065053663157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4572ed0bb291%3A0xbf6174639561d3f8!2sDM%20Corporate%20Holding!5e0!3m2!1sru!2sru!4v1653159809413!5m2!1sru!2sru',
  },
  {
    id: 14,
    region: 'Таиланд',
    value: 13,
    title: 'UCD WORLDWIDE GROUP SDN.BHD',
    address:
      '№. 20A, Jalan BRP 1 / 2, Bukit Rahman Putra, 47000 Sungai Buloh, Selangor Darul Ehsan, Malaysia',
    legalAddress: '',
    manager: 'Елена Федорова',
    phones: [
      { id: 1, phone: '+60132388367' },
      { id: 1, phone: '+79149654263' },
    ],
    fax: '',
    emails: [
      { id: 1, email: 'liqeramin@yahoo.com' },
      { id: 1, email: 'info@korund.com.my' },
    ],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.5541668293426!2d101.55841811525208!3d3.211065053663157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4572ed0bb291%3A0xbf6174639561d3f8!2sDM%20Corporate%20Holding!5e0!3m2!1sru!2sru!4v1653159809413!5m2!1sru!2sru',
  },
  {
    id: 15,
    region: 'Индонезия',
    value: 14,
    title: 'UCD WORLDWIDE GROUP SDN.BHD',
    address:
      '№. 20A, Jalan BRP 1 / 2, Bukit Rahman Putra, 47000 Sungai Buloh, Selangor Darul Ehsan, Malaysia',
    legalAddress: '',
    manager: 'Елена Федорова',
    phones: [
      { id: 1, phone: '+60132388367' },
      { id: 1, phone: '+79149654263' },
    ],
    fax: '',
    emails: [
      { id: 1, email: 'liqeramin@yahoo.com' },
      { id: 1, email: 'info@korund.com.my' },
    ],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.5541668293426!2d101.55841811525208!3d3.211065053663157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4572ed0bb291%3A0xbf6174639561d3f8!2sDM%20Corporate%20Holding!5e0!3m2!1sru!2sru!4v1653159809413!5m2!1sru!2sru',
  },
  {
    id: 16,
    region: 'Корея',
    value: 15,
    title: 'KORUND KOREA ENG Co., Ltd.',
    address: 'ilsan-ro 636beon-gil, Ilsanseo-gu, Goyang-si, Gyeonggi-do, KOREA',
    legalAddress: '',
    manager: '',
    phones: [{ id: 1, phone: '+82-31-915-5535' }],
    fax: '',
    emails: [{ id: 1, email: 'korund@korundkorea.kr' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1578.7722986155388!2d126.75783315825869!3d37.68340731764676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c8f9297858583%3A0xba9e48135ad4c9cd!2zSWxzYW4tcm8gNjM2YmVvbi1naWwsIElsc2Fuc2VvLWd1LCBHb3lhbmctc2ksIEd5ZW9uZ2dpLWRvLCDQrtC20L3QsNGPINCa0L7RgNC10Y8!5e0!3m2!1sru!2sru!4v1653223017464!5m2!1sru!2sru',
  },
  {
    id: 17,
    region: 'Польша',
    value: 16,
    title: 'AG Trading',
    address: 'ul.Wyzwolenia 367A, 43-300 Bielsko-Biała, Poland',
    legalAddress: '',
    manager: 'Олег Беляков',
    phones: [{ id: 1, phone: '+48 668 389 001' }],
    fax: '+48 33 816 81 01',
    emails: [{ id: 1, email: 'o.beliakov@gmai.com' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.52580454647!2d19.095461715879875!3d49.85136693822983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471698b7f54dbf53%3A0x60a4cb7a5823b24a!2zV3l6d29sZW5pYSAzNjdBLCA0My0zMDAgQmllbHNrby1CaWHFgmEsINCf0L7Qu9GM0YjQsA!5e0!3m2!1sru!2sru!4v1653223428614!5m2!1sru!2sru',
  },
  {
    id: 18,
    region: 'Германия',
    value: 17,
    title: 'AB stav GmbH',
    address: '',
    legalAddress: '',
    manager: '',
    phones: [{ id: 1, phone: '+49 8976773283' }],
    fax: '+49 8976773284',
    emails: [{ id: 1, email: 'hutnikjana@gmail.com' }],
    site: '',
    map: '',
  },
  {
    id: 19,
    region: 'Чехия',
    value: 18,
    title: '"H-CREDIT" s.r.o.',
    address: 'Na Pankraci 30, 140 00 Praha 4',
    legalAddress: '',
    manager: '',
    phones: [
      { id: 1, phone: '+420 261210708' },
      { id: 1, phone: '+420 602245689' },
    ],
    fax: '+420 261210605',
    emails: [{ id: 1, email: 'hcredit@iol.cz' }],
    site: 'www.izolacekorund.cz',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.4378484591766!2d14.427484515885496!3d50.05936122334785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b946551072743%3A0xd3f5e46beb1edc74!2zTmEgUGFua3LDoWNpIDMwLCAxNDAgMDAgUHJhaGEgNC1OdXNsZSwg0KfQtdGF0LjRjw!5e0!3m2!1sru!2sru!4v1653224254035!5m2!1sru!2sru',
  },
  {
    id: 20,
    region: 'Словакия',
    value: 19,
    title: '"H-CREDIT" s.r.o.',
    address: 'Na Pankraci 30, 140 00 Praha 4',
    legalAddress: '',
    manager: '',
    phones: [
      { id: 1, phone: '+420 261210708' },
      { id: 1, phone: '+420 602245689' },
    ],
    fax: '+420 261210605',
    emails: [{ id: 1, email: 'hcredit@iol.cz' }],
    site: 'www.izolacekorund.cz',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.4378484591766!2d14.427484515885496!3d50.05936122334785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b946551072743%3A0xd3f5e46beb1edc74!2zTmEgUGFua3LDoWNpIDMwLCAxNDAgMDAgUHJhaGEgNC1OdXNsZSwg0KfQtdGF0LjRjw!5e0!3m2!1sru!2sru!4v1653224254035!5m2!1sru!2sru',
  },
  {
    id: 21,
    region: 'Австрия',
    value: 20,
    title: '"H-CREDIT" s.r.o.',
    address: 'Na Pankraci 30, 140 00 Praha 4',
    legalAddress: '',
    manager: '',
    phones: [
      { id: 1, phone: '+420 261210708' },
      { id: 1, phone: '+420 602245689' },
    ],
    fax: '+420 261210605',
    emails: [{ id: 1, email: 'hcredit@iol.cz' }],
    site: 'www.izolacekorund.cz',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.4378484591766!2d14.427484515885496!3d50.05936122334785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b946551072743%3A0xd3f5e46beb1edc74!2zTmEgUGFua3LDoWNpIDMwLCAxNDAgMDAgUHJhaGEgNC1OdXNsZSwg0KfQtdGF0LjRjw!5e0!3m2!1sru!2sru!4v1653224254035!5m2!1sru!2sru',
  },
  {
    id: 22,
    region: 'Монголия',
    value: 21,
    title: 'ООО "САН" Офис',
    address: '',
    legalAddress: '',
    manager: '',
    phones: [
      { id: 1, phone: '+(976)70 11 21 46' },
      { id: 1, phone: '+(976)99 06 83 35' },
    ],
    fax: '+(976)11 32 79 89',
    emails: [{ id: 1, email: 'bayansan@korund.mn' }],
    site: 'www.korund.mn',
    map: '',
  },
  {
    id: 23,
    region: 'Швеция',
    value: 22,
    title: '"COLOTERM" SWEDEN',
    address: 'Hökenbergs Gränd 3, 732 30 Arboga, Sweden',
    legalAddress: '',
    manager: 'Владимир Гусаков',
    phones: [{ id: 1, phone: '+46 (0)704438239' }],
    fax: '+46 (0)581 621040',
    emails: [{ id: 1, email: 'coloterm@outlook.com' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.289221394693!2d15.841287316156636!3d59.39488701280646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c279bd7607f47%3A0x9a027ce41937fddc!2zSMO2a2VuYmVyZ3MgZ3LDpG5kIDMsIDczMiAzMCBBcmJvZ2EsINCo0LLQtdGG0LjRjw!5e0!3m2!1sru!2sru!4v1653225183073!5m2!1sru!2sru',
  },
  {
    id: 24,
    region: 'Эстония',
    value: 23,
    title: 'Knowmen Ltd',
    address: 'Akadeemia tee 21/4-308, Tallinn, Estonia',
    legalAddress: '',
    manager: 'Jaak Lokk',
    phones: [{ id: 1, phone: '+372 6454140' }],
    fax: '',
    emails: [{ id: 1, email: 'knowmen.jaak@gmail.com' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.1004590243383!2d24.656346116156698!3d59.398036412553694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469295ac1e0b1245%3A0xbf3fe8caccfcf2f9!2zQWthZGVlbWlhIHRlZSAyMS80LCAxMjYxOCBUYWxsaW5uLCDQrdGB0YLQvtC90LjRjw!5e0!3m2!1sru!2sru!4v1653228565499!5m2!1sru!2sru',
  },
  {
    id: 25,
    region: 'Латвия',
    value: 24,
    title: 'Knowmen Ltd',
    address: 'Akadeemia tee 21/4-308, Tallinn, Estonia',
    legalAddress: '',
    manager: 'Jaak Lokk',
    phones: [{ id: 1, phone: '+372 6454140' }],
    fax: '',
    emails: [{ id: 1, email: 'knowmen.jaak@gmail.com' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.1004590243383!2d24.656346116156698!3d59.398036412553694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469295ac1e0b1245%3A0xbf3fe8caccfcf2f9!2zQWthZGVlbWlhIHRlZSAyMS80LCAxMjYxOCBUYWxsaW5uLCDQrdGB0YLQvtC90LjRjw!5e0!3m2!1sru!2sru!4v1653228565499!5m2!1sru!2sru',
  },
  {
    id: 26,
    region: 'Литва',
    value: 25,
    title: 'Knowmen Ltd',
    address: 'Akadeemia tee 21/4-308, Tallinn, Estonia',
    legalAddress: '',
    manager: 'Jaak Lokk',
    phones: [{ id: 1, phone: '+372 6454140' }],
    fax: '',
    emails: [{ id: 1, email: 'knowmen.jaak@gmail.com' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.1004590243383!2d24.656346116156698!3d59.398036412553694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469295ac1e0b1245%3A0xbf3fe8caccfcf2f9!2zQWthZGVlbWlhIHRlZSAyMS80LCAxMjYxOCBUYWxsaW5uLCDQrdGB0YLQvtC90LjRjw!5e0!3m2!1sru!2sru!4v1653228565499!5m2!1sru!2sru',
  },
  {
    id: 27,
    region: 'Финляндия',
    value: 26,
    title: 'Knowmen Ltd',
    address: 'Akadeemia tee 21/4-308, Tallinn, Estonia',
    legalAddress: '',
    manager: 'Jaak Lokk',
    phones: [{ id: 1, phone: '+372 6454140' }],
    fax: '',
    emails: [{ id: 1, email: 'knowmen.jaak@gmail.com' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.1004590243383!2d24.656346116156698!3d59.398036412553694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469295ac1e0b1245%3A0xbf3fe8caccfcf2f9!2zQWthZGVlbWlhIHRlZSAyMS80LCAxMjYxOCBUYWxsaW5uLCDQrdGB0YLQvtC90LjRjw!5e0!3m2!1sru!2sru!4v1653228565499!5m2!1sru!2sru',
  },
  {
    id: 28,
    region: 'Швеция',
    value: 27,
    title: 'Knowmen Ltd',
    address: 'Akadeemia tee 21/4-308, Tallinn, Estonia',
    legalAddress: '',
    manager: 'Jaak Lokk',
    phones: [{ id: 1, phone: '+372 6454140' }],
    fax: '',
    emails: [{ id: 1, email: 'knowmen.jaak@gmail.com' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.1004590243383!2d24.656346116156698!3d59.398036412553694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469295ac1e0b1245%3A0xbf3fe8caccfcf2f9!2zQWthZGVlbWlhIHRlZSAyMS80LCAxMjYxOCBUYWxsaW5uLCDQrdGB0YLQvtC90LjRjw!5e0!3m2!1sru!2sru!4v1653228565499!5m2!1sru!2sru',
  },
  {
    id: 29,
    region: 'Дания',
    value: 28,
    title: 'Knowmen Ltd',
    address: 'Akadeemia tee 21/4-308, Tallinn, Estonia',
    legalAddress: '',
    manager: 'Jaak Lokk',
    phones: [{ id: 1, phone: '+372 6454140' }],
    fax: '',
    emails: [{ id: 1, email: 'knowmen.jaak@gmail.com' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.1004590243383!2d24.656346116156698!3d59.398036412553694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469295ac1e0b1245%3A0xbf3fe8caccfcf2f9!2zQWthZGVlbWlhIHRlZSAyMS80LCAxMjYxOCBUYWxsaW5uLCDQrdGB0YLQvtC90LjRjw!5e0!3m2!1sru!2sru!4v1653228565499!5m2!1sru!2sru',
  },
  {
    id: 30,
    region: 'Норвегия',
    value: 29,
    title: 'Knowmen Ltd',
    address: 'Akadeemia tee 21/4-308, Tallinn, Estonia',
    legalAddress: '',
    manager: 'Jaak Lokk',
    phones: [{ id: 1, phone: '+372 6454140' }],
    fax: '',
    emails: [{ id: 1, email: 'knowmen.jaak@gmail.com' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.1004590243383!2d24.656346116156698!3d59.398036412553694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469295ac1e0b1245%3A0xbf3fe8caccfcf2f9!2zQWthZGVlbWlhIHRlZSAyMS80LCAxMjYxOCBUYWxsaW5uLCDQrdGB0YLQvtC90LjRjw!5e0!3m2!1sru!2sru!4v1653228565499!5m2!1sru!2sru',
  },
  {
    id: 31,
    region: 'Ирландия',
    value: 30,
    title: 'Knowmen Ltd',
    address: 'Akadeemia tee 21/4-308, Tallinn, Estonia',
    legalAddress: '',
    manager: 'Jaak Lokk',
    phones: [{ id: 1, phone: '+372 6454140' }],
    fax: '',
    emails: [{ id: 1, email: 'knowmen.jaak@gmail.com' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.1004590243383!2d24.656346116156698!3d59.398036412553694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469295ac1e0b1245%3A0xbf3fe8caccfcf2f9!2zQWthZGVlbWlhIHRlZSAyMS80LCAxMjYxOCBUYWxsaW5uLCDQrdGB0YLQvtC90LjRjw!5e0!3m2!1sru!2sru!4v1653228565499!5m2!1sru!2sru',
  },
  {
    id: 32,
    region: 'Великобритания',
    value: 31,
    title: 'Knowmen Ltd',
    address: 'Akadeemia tee 21/4-308, Tallinn, Estonia',
    legalAddress: '',
    manager: 'Jaak Lokk',
    phones: [{ id: 1, phone: '+372 6454140' }],
    fax: '',
    emails: [{ id: 1, email: 'knowmen.jaak@gmail.com' }],
    site: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.1004590243383!2d24.656346116156698!3d59.398036412553694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469295ac1e0b1245%3A0xbf3fe8caccfcf2f9!2zQWthZGVlbWlhIHRlZSAyMS80LCAxMjYxOCBUYWxsaW5uLCDQrdGB0YLQvtC90LjRjw!5e0!3m2!1sru!2sru!4v1653228565499!5m2!1sru!2sru',
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
              <Box>{d.title}</Box>
            </Box>
            {d.address && (
              <Box paddingBottom={6}>
                <IconItem fill='brand.200'>
                  <FaMapMarkerAlt fill='brand.200' />
                </IconItem>
                {d.address}
              </Box>
            )}
            {d.legalAddress && (
              <Box paddingBottom={6}>
                <IconItem fill='brand.200'>
                  <FaMapMarkerAlt fill='brand.200' />
                </IconItem>
                Юридический адрес:&nbsp;
                {d.legalAddress}
              </Box>
            )}
            {d.manager && (
              <Box paddingBottom={6}>
                <IconItem fill='brand.200'>
                  <IoMdPerson fill='brand.200' />
                </IconItem>
                {d.manager}
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
