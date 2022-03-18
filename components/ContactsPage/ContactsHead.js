import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Heading,
  Box,
  Divider,
  useColorModeValue,
  //useColorMode
} from "@chakra-ui/react";
import { SimpleLink } from "../../styles/link";

export const ContactsHead = () => {
  //const { toggleColorMode } = useColorMode()
  const textColor = useColorModeValue("black", "gray.200");

  return (
    <Box mt={6} color={textColor}>
      <Heading as="h1" variant="h1" mb={6}>
        Контактная информация
      </Heading>
      <Heading variant="h2" mb={3}>
        Волгоград
      </Heading>
      <Heading variant="h3" mb={3}>
        <SimpleLink href="tel:+7844238-44-66">+7 (8442) 38-44-66</SimpleLink>
      </Heading>
      <Heading variant="h4" mb={3}>
        <SimpleLink href="mailto:mail@korund34.ru">mail@korund34.ru</SimpleLink>
      </Heading>
      <Heading variant="h6" mb={3}>
        400131, г. Волгоград, ул. имени маршала Чуйкова, 33
      </Heading>
      <Heading variant="h7" mb={8} lineHeight={1.5}>
        График работы
        <br /> ПН-ПТ (10.00 - 18.00)
      </Heading>
      <Divider />
      <Table
        variant="simple"
        size="md"
        fontFamily="Jost"
        colorScheme={useColorModeValue("gray", "gray.800")}
      >
        <TableCaption></TableCaption>
        <Thead>
          <Tr>
            <Th fontFamily="Jost" px={0} width="25%" color={textColor}>
              Директор
            </Th>
            <Td lineHeight={1.7} px={0} textAlign="right">
              <SimpleLink href="tel:+7844250-40-42">
                +7 (8442) 50-40-42
              </SimpleLink>
              <br />
              <SimpleLink href="mailto:chief@korund34.ru">
                chief@korund34.ru
              </SimpleLink>
            </Td>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th lineHeight={1.7} fontFamily="Jost" px={0} color={textColor}>
              Заместитель директора по техническим, производственныи и
              технологическим вопросам
            </Th>
            <Td textAlign="right" px={0}>
              <SimpleLink href="tel:+7844250-40-82">
                +7 (8442) 50-40-82
              </SimpleLink>
            </Td>
          </Tr>
          <Tr>
            <Th lineHeight={1.7} fontFamily="Jost" px={0} color={textColor}>
              Отдел внешней экономической деятельности
            </Th>
            <Td lineHeight={1.7} textAlign="right" px={0}>
              <SimpleLink href="tel:+7844250-40-31">
                +7 (8442) 50-40-31
              </SimpleLink>
              <br />
              <SimpleLink href="mailto:export@korund34.ru">
                export@korund34.ru
              </SimpleLink>
            </Td>
          </Tr>
          <Tr>
            <Th lineHeight={1.7} fontFamily="Jost" px={0} color={textColor}>
              Снабжение
            </Th>
            <Td lineHeight={1.7} textAlign="right" px={0}>
              <SimpleLink href="tel:+7844250-40-13">
                +7 (8442) 50-40-13
              </SimpleLink>
              <br />
              <SimpleLink href="mailto:tech@korund34.ru">
                tech@korund34.ru
              </SimpleLink>
            </Td>
          </Tr>
          <Tr>
            <Th lineHeight={1.7} fontFamily="Jost" px={0} color={textColor}>
              Бухгалтерия
            </Th>
            <Td lineHeight={1.7} textAlign="right" px={0}>
              <SimpleLink href="tel:+7844250-40-12">
                +7 (8442) 50-40-12
              </SimpleLink>
              <br />
              <SimpleLink href="mailto:count@korund34.ru">
                count@korund34.ru
              </SimpleLink>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
