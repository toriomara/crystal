import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption, Heading, Box, Text, Divider, Link,
} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import styled from "@emotion/styled";

const Item = styled.a`
  position: relative;

  ::after {
    display: inline-block;
    position: absolute;
    content: '';
    width: 100%;
    left: 0;
    bottom: -4px;
    height: 3px;
    border-radius: 10%;
    background-color: #C53030;
    transition: opacity .2s ease-in-out, transform .2s ease-in-out;
    transform-origin: bottom;
    transform: scaleX(0);
  }

  :hover::after {
    transform: scaleX(1);
  }

  :hover {
    color: #C53030;
  }
`

export const ContactsHead = () => {
  return (
    <Box mt={6}>
      <Heading as='h1' variant='h1' mb={1}>
        Контактная информация
      </Heading>
      <Heading variant='h2' mb={3}>
        Волгоград
      </Heading>
      <Heading variant='h3' mb={3}>
        <Item href='tel:+7844238-44-66' textDecoration='none'>
            +7 (8442) 38-44-66
        </Item>
      </Heading>
      <Heading variant='h4' mb={3}>
        <Item href='mailto:mail@korund34.ru'>
          mail@korund34.ru
        </Item>
      </Heading>
      <Heading variant='h6' mb={3}>
        400131, г. Волгоград, ул. имени маршала Чуйкова, 33
      </Heading>
      <Heading variant='h7' mb={8}>
        График работы<br/> ПН-ПТ (10.00 - 18.00)
      </Heading>
      <Divider/>
      <Table variant='simple' size='md' fontFamily='Jost'>
        <TableCaption></TableCaption>
        <Thead>
          <Tr lineHeight={1.5}>
            <Th fontFamily='Jost' px={0} width='25%'>Директор</Th>
            <Td lineHeight={1.5} px={0} textAlign='right'>+7 (8442) 50-40-42<br/>chief@korund34.ru</Td>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th lineHeight={1.5} fontFamily='Jost' px={0}>Заместитель директора по техническим, производственныи и
              технологическим вопросам</Th>
            <Td textAlign='right' px={0}>+7 (8442) 50-40-82</Td>
          </Tr>
          <Tr>
            <Th lineHeight={1.5} fontFamily='Jost' px={0}>Отдел внешней экономической деятельности</Th>
            <Td textAlign='right' px={0}>+7 (8442) 50-40-31<br/>export@korund34.ru</Td>
          </Tr>
          {/*<Tr>
            <Th lineHeight={1.5} fontFamily='Jost' px={0}>Производственный отдел</Th>
            <Td textAlign='right' px={0}>+7 (8442) 50-40-82<br/>produce@korund34.ru</Td>
          </Tr>
          <Tr>
            <Th lineHeight={1.5} fontFamily='Jost' px={0}>Технический отдел</Th>
            <Td textAlign='right' px={0}>+7 (8442) 50-40-42<br/>tech@korund34.ru</Td>
          </Tr>*/}
          <Tr>
            <Th lineHeight={1.5} fontFamily='Jost' px={0}>Снабжение</Th>
            <Td textAlign='right' px={0}>+7 (8442) 50-40-13<br/>tech@korund34.ru</Td>
          </Tr>
          <Tr>
            <Th lineHeight={1.5} fontFamily='Jost' px={0}>Бухгалтерия</Th>
            <Td textAlign='right' px={0}>+7 (8442) 50-40-12<br/>count@korund34.ru</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

