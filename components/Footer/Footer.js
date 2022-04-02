import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../ui/Logo";
import styled from "@emotion/styled";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaViber,
  FaYoutube,
} from "react-icons/fa";
import MapModal from "../Modal/MapModal";
import Subscribe from "../Subscribe/Subscribe";
import { useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";

const LinkItem = ({ href, children }) => (
  <Link
    href={href}
    display="inline-flex"
    lineHeight="1.3"
    textDecoration="none"
    transition=".3s ease"
    color={useColorModeValue("gray.600", "gray.300")}
    position="relative"
    left={0}
    _hover={{
      fontWeight: "500",
      transition: "200ms ease-in",
      left: "6px",
      color: "red.600",
    }}
  >
    {children}
  </Link>
);

export const IconItem = styled(Link)`
  margin-top: 2px;
  display: inline-flex;
  color: #4a5568;
  padding: 0 8px 0 0;
`;

const FooterHeading = ({ children }) => (
  <Heading
    fontFamily="Montserrat"
    mb={3}
    color={useColorModeValue("gray.600", "gray.100")}
    fontSize="sm"
    fontWeight="semibold"
    textTransform="uppercase"
    letterSpacing="wider"
  >
    {children}
  </Heading>
);

const MyIconButton = styled(IconButton)`
  // Not IMPORTANT!!!
  top: 0;
  display: inline-flex;

  &:hover {
    font-weight: 500;
    transition: 200ms ease-in;
    top: -6px;
  }
`;

export const Footer = () => {
  const bgColor = useColorModeValue("gray.100", "whiteAlpha.100");

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      pt={5}
      role="contentinfo"
      w="100%"
      bg={bgColor}
      color={useColorModeValue("gray.700", "gray.200")}
      fontSize="15px"
      fontWeight={500}
    >
      <Container
        display="flex"
        flexDirection="row"
        alignItems="center"
        as={Stack}
        maxW="8xl"
        px={6}
        pt={6}
        pb={4}
      >
        <Stack divider={<StackDivider />}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10} pb={4}>
            <Box align={"flex-start"}>
              <Logo />
              <Box marginTop={2}>
                Производство сверхтонких теплоизоляционных материалов нового
                поколения
              </Box>
            </Box>

            <Stack align={"flex-start"}>
              <FooterHeading>Информация</FooterHeading>
              <LinkItem href="/about">О нас</LinkItem>
              <LinkItem>Новости</LinkItem>
              <LinkItem>Продукция</LinkItem>
              <LinkItem>Документация</LinkItem>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <LinkItem href="/distribution">
                  Дистрибьюция
                  <sup>
                    <Tag
                      py="1px"
                      px='3px'
                      ml={2}
                      size="xsm"
                      bg="brand.50"
                      color="white"
                      fontSize={10}
                      rounded={2}
                    >
                      New
                    </Tag>
                  </sup>
                </LinkItem>
              </Stack>
            </Stack>

            <Stack align="flex-start">
              <FooterHeading>Контакты</FooterHeading>

              <LinkItem>
                <IconItem fill="brand.400">
                  <FaMapMarkerAlt fill="brand.400" />
                </IconItem>
                <span onClick={handleClick}>
                  400019, Россия, <br />
                  г. Волгоград, ул. имени маршала Чуйкова, д. 33
                </span>
              </LinkItem>

              {isOpen && <MapModal setIsOpen={setIsOpen} />}

              <LinkItem href="mailto:mail@korund34.ru">
                <IconItem fill="brand.400">
                  <FaEnvelope fill="brand.400" />
                </IconItem>
                mail@korund34.ru
              </LinkItem>
              <LinkItem href="tel:+7844238-44-66">
                <IconItem fill="brand.400">
                  <FaPhone fill="brand.400" />
                </IconItem>
                +7 (8442) 38-44-66 (факс)
              </LinkItem>

              <LinkItem href="tel:+78442504012">+7 (8442) 50-40-12</LinkItem>

              <LinkItem href="tel:+78442504013">+7 (8442) 50-40-13</LinkItem>

              <LinkItem href="tel:+78442504031">+7 (8442) 50-40-31</LinkItem>

              <LinkItem href="tel:+78442504042">+7 (8442) 50-40-42</LinkItem>

              <LinkItem href="tel:+78442504082">+7 (8442) 50-40-82</LinkItem>

              <LinkItem></LinkItem>
            </Stack>

            <Stack align="flex-start">
              <chakra.form onSubmit={(e) => e.preventDefault()}>
                <FooterHeading>Подпишитесь на рассылку</FooterHeading>
                <Stack spacing="4">
                  <Text>
                    Мы присылаем одно письмо в неделю <br />и не рассылаем спам
                  </Text>
                  {/* <Input
                    bg={useColorModeValue("white", "inherit")}
                    placeholder="Введите ваш электронный адрес"
                    type="email"
                    flexShrink={1}
                    required
                    _placeholder={{
                      opacity: 1,
                      color: useColorModeValue("gray.500", "whiteAlpha.700"),
                    }}
                  /> */}
                  <Button
                    onClick={handleClick}
                    type="submit"
                    variant="primary"
                    flexShrink={1}
                    width={{
                      base: "full",
                      md: "auto",
                    }}
                  >
                    Подписаться
                  </Button>
                  {/* {isOpen && <Modal setIsOpen />} */}
                </Stack>
              </chakra.form>
            </Stack>
          </SimpleGrid>

          {/*==============================SECOND FLOOR==============================*/}

          <Box>
            <Stack
              direction={{ base: "column-reverse", md: "row" }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize={"sm"} textAlign={"center"}>
                &copy; {new Date().getFullYear()}, «НПО ФУЛЛЕРЕН». Все права
                защищены
              </Text>

              <Flex>
                <MyIconButton
                  variant="ghost"
                  as="a"
                  href="https://wa.me/79173381186"
                  target="_blank"
                  aria-label="Whatsapp"
                  color="#43d854"
                  icon={<RiWhatsappFill fontSize="20px" />}
                />
                <MyIconButton
                  variant="ghost"
                  as="a"
                  href="viber://chat?number=%2B79173381186"
                  target="_blank"
                  aria-label="Viber"
                  color="#665CAC"
                  icon={<FaViber fontSize="20px" />}
                />
                <MyIconButton
                  variant="ghost"
                  as="a"
                  href="https://www.instagram.com/factory_korund/"
                  target="_blank"
                  aria-label="Instagram"
                  color="#8a3ab9"
                  icon={<SiInstagram fontSize="20px" />}
                />
                <MyIconButton
                  variant="ghost"
                  as="a"
                  href="https://www.youtube.com/channel/UCB1Pu92nRaimLhW0yj0-0vQ"
                  target="_blank"
                  aria-label="LinkedIn"
                  color="#c4302b"
                  icon={<FaYoutube fontSize="20px" />}
                />
                <MyIconButton
                  variant="ghost"
                  as="a"
                  href="https://twitter.com/Korund34"
                  target="_blank"
                  aria-label="Twitter"
                  color="#1DA1F2"
                  icon={<FaTwitter fontSize="20px" />}
                />
                <MyIconButton
                  variant="ghost"
                  as="a"
                  href="https://www.facebook.com/factorykorund"
                  target="_blank"
                  aria-label="Facebook"
                  color="#3b5998"
                  icon={<FaFacebookSquare fontSize="20px" />}
                />
              </Flex>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
