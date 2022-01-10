import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Container,
  Heading,
  IconButton,
  Input,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Logo from '../Logo'
import styled from '@emotion/styled'
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaMapMarkerAlt,
  FaMobile,
  FaPhone,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

const Description = styled.div`
  margin-top: 10px;
`

const LinkItem = ({children}) => (
  <Link
    display='inline-flex'
    lineHeight='1.4'
    //white-space=nowrap;
    textDecoration='none'
    transition='.3s ease'
    color={useColorModeValue('gray.600', 'gray.300')}
    position={"relative"}
    left={0}

    _hover={{
      fontWeight: '500',
      transition: '200ms ease-in',
      left: '6px',
      color: 'red.600'
    }}
  >
    {children}
  </Link>
)

const IconItem = styled(Link)`
  display: inline-flex;
  color: #4A5568;
  padding: 0 6px 0 0;
`

const FooterHeading = ({children}) => (
  <Heading
    fontFamily='Montserrat'
    as="h4"
    mb="4"
    color={useColorModeValue('gray.600', 'gray.300')}
    fontSize="sm"
    fontWeight="semibold"
    textTransform="uppercase"
    letterSpacing="wider"
  >
    {children}
  </Heading>
)

export const Footer = () => {
  return (
    <Box
      role="contentinfo"
      w="100%"
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        display='flex'
        flexDirection='row'
        alignItems='center'
        as={Stack}
        maxW='8xl'
        px={8}
        pt={8}
        pb={4}
      >

        <Stack divider={<StackDivider/>}>

          <SimpleGrid
            columns={{base: 1, sm: 2, md: 4}}
            spacing={10}
            pb={4}
          >

            <Stack align={'flex-start'}>
              <Logo/>
              <Description>Производство сверхтонких теплоизоляционных материалов нового поколения</Description>
            </Stack>

            <Stack align={'flex-start'}>
              <FooterHeading>Информация</FooterHeading>
              <LinkItem>О нас</LinkItem>
              <LinkItem>Новости</LinkItem>
              <LinkItem>Продукция</LinkItem>
              <LinkItem>Документация</LinkItem>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <LinkItem href={'#'}>Дистрибьюция</LinkItem>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('red.600', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
            </Stack>

            <Stack align={'flex-start'}>
              <FooterHeading>Контакты</FooterHeading>
              <LinkItem href="#">
                <IconItem>
                  <FaMapMarkerAlt fontSize="16px"/>
                </IconItem>
                400019, Россия, <br/>г. Волгоград,
                ул. Слесарная, 103
              </LinkItem>
              <LinkItem href="#">
                <IconItem>
                  <FaEnvelope fontSize="16px"/>
                </IconItem>
                korund@korund.ru
              </LinkItem>
              <LinkItem href="#">
                <IconItem>
                  <FaMobile fontSize="16px"/>
                </IconItem>
                +7 988 988 51 11
              </LinkItem>
              <LinkItem href="#">
                <IconItem>
                  <FaPhone fontSize="16px"/>
                </IconItem>
                +7 (8442) 46-95-86
              </LinkItem>
              <LinkItem pl='22px' href="#">
                +7 (8442) 46-95-86
              </LinkItem>
              <LinkItem pl='22px' href="#">
                +7 (8442) 46-95-86
              </LinkItem>
            </Stack>

            <Stack align={'flex-start'}>
              <chakra.form onSubmit={(e) => e.preventDefault()}>
                <FooterHeading>Подпишитесь на рассылку</FooterHeading>
                <Stack
                  spacing="4"
                >
                  <Text>Мы присылаем одно письмо в неделю</Text>
                  <Input
                    bg={useColorModeValue('white', 'inherit')}
                    placeholder="Enter your email"
                    type="email"
                    required
                    focusBorderColor={useColorModeValue('blue.500', 'blue.300')}
                    _placeholder={{
                      opacity: 1,
                      color: useColorModeValue('gray.500', 'whiteAlpha.700'),
                    }}
                  />
                  <Button
                    type="submit"
                    color='white'
                    bgColor="gray.600"
                    flexShrink={0}
                    width={{
                      base: 'full',
                      md: 'auto',
                    }}
                    _hover={{
                      bgColor: "gray.500"
                    }}
                  >
                    Subscribe
                  </Button>
                </Stack>
              </chakra.form>
            </Stack>

          </SimpleGrid>


          {/*==============================SECOND FLOOR==============================*/}


          <Box>
            <Stack
              direction={{base: 'column-reverse', md: 'row'}}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize={'sm'} textAlign={'center'}>
                &copy; {new Date().getFullYear()} НПО «Фулерен». Все права защищены
              </Text>

              <ButtonGroup variant="ghost" color="gray.600">
                <IconButton as="a" href="#" aria-label="GitHub" icon={<FaInstagram fontSize="20px"/>}/>
                <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaYoutube fontSize="20px"/>}/>
                <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px"/>}/>
                <IconButton as="a" href="#" aria-label="Twitter" icon={<FaFacebookSquare fontSize="20px"/>}/>
              </ButtonGroup>
            </Stack>
          </Box>

        </Stack>
      </Container>
    </Box>
  )
}