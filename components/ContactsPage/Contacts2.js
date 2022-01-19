import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption, Heading, Box, Text, Divider,
} from '@chakra-ui/react'
import {Head} from "next/document";

export const Contacts2 = () => {
  return (
    <Box mt={6}>
      <Heading as='h1' variant='h1' mb={1}>
        Контактная информация
      </Heading>
      <Heading variant='h2' mb={2}>
        Волгоград
      </Heading>
      <Heading variant='h3' mb={2}>
        +7 (8442) 38-44-66
      </Heading>
      <Text fontSize={18} mb={8}>
        400131, г. Волгоград, ул. имени маршала Чуйкова, 33
      </Text>
      <Divider/>
      <Table variant='simple' size='md' fontFamily='Jost'>
        <TableCaption>8 800 234 78 78 (на территории России звонок бесплатный)</TableCaption>
        <Thead>
          <Tr lineHeight={1.5}>
            <Th fontFamily='Jost' px={0} width='25%'>Директор</Th>
            <Td lineHeight={1.5} px={0} textAlign='right'>+7 (8442) 50-40-42<br/>chief@korund34.ru</Td>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th lineHeight={1.5} fontFamily='Jost' px={0}>Заместитель директора по техническим, производственныи и технологическим вопросам</Th>
            <Td textAlign='right' px={0}>+7 (8442) 50-40-82</Td>
          </Tr>
          <Tr>
            <Th lineHeight={1.5} fontFamily='Jost' px={0}>Отдел внешней экономической деятельности</Th>
            <Td textAlign='right' px={0}>+7 (8442) 50-40-31<br/>export@korund34.ru</Td>
          </Tr>
          <Tr>
            <Th lineHeight={1.5} fontFamily='Jost' px={0}>Производственный отдел</Th>
            <Td textAlign='right' px={0}>+7 (8442) 50-40-82<br/>produce@korund34.ru</Td>
          </Tr>
          <Tr>
            <Th lineHeight={1.5} fontFamily='Jost' px={0}>Технический отдел</Th>
            <Td textAlign='right' px={0}>+7 (8442) 50-40-42<br/>tech@korund34.ru</Td>
          </Tr>
          <Tr>
            <Th lineHeight={1.5} fontFamily='Jost' px={0}>Снабжение</Th>
            <Td textAlign='right' px={0}>+7 (8442) 50-40-13<br/>tech@korund34.ru</Td>
          </Tr>
          <Tr>
            <Th lineHeight={1.5} fontFamily='Jost' px={0}>Бухгалтерия</Th>
            <Td textAlign='right' px={0}>+7 (8442) 50-40-13<br/>count@korund34.ru</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

