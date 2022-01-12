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
  FaFacebookSquare, FaInstagramSquare,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaViber,
  FaWhatsappSquare,
  FaYoutube
} from 'react-icons/fa'
import Modal from '../Modal/Modal'
import {useRef, useState} from 'react'
import useClickOutside from '../../utils/useClickOutside'

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

const PhoneItem = styled.a`
  position: relative;
  left: 0;

  :hover {
    font-weight: 500;
    transition: 200ms ease-in;
    left: 6px;
    color: #C53030
  }
`

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

  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }



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

              <LinkItem>
                <IconItem>
                  <FaMapMarkerAlt fontSize="16px"/>
                </IconItem>
                <span onClick={handleClick}>
                400019, Россия, <br/>г. Волгоград,
                ул. имени маршала Чуйкова, д. 33
                </span>
              </LinkItem>

              {isOpen && <Modal setIsOpen={setIsOpen}/>}


              <PhoneItem href='mailto:mail@korund34.ru'>
                <IconItem>
                  <FaEnvelope fontSize="16px"/>
                </IconItem>
                mail@korund34.ru
              </PhoneItem>
              <PhoneItem href='tel:+7844238-44-66'>
                <IconItem>
                  <FaPhone fontSize="16px"/>
                </IconItem>
                +7 (8442) 38-44-66 (факс)
              </PhoneItem>
              <PhoneItem href='tel:+78442504012'>
                +7 (8442) 50-40-12
              </PhoneItem>
              <PhoneItem href='tel:+78442504013'>
                +7 (8442) 50-40-13
              </PhoneItem>
              <PhoneItem href='tel:+78442504042'>
                +7 (8442) 50-40-42
              </PhoneItem>
              <PhoneItem href='tel:+78442504082'>
                +7 (8442) 50-40-82
              </PhoneItem>
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
                    placeholder="Введите ваш электронный адрес"
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
                    Подписаться
                  </Button>
                </Stack>
              </chakra.form>
            </Stack>

          </SimpleGrid>


          {/*==============================SECOND FLOOR==============================*/}


          <Box>
            <Stack
              direction={{base: 'column-reverse', md: 'row'}}
              justifyContent='space-between'
              alignItems='center'
            >
              <Text fontSize={'sm'} textAlign={'center'}>
                &copy; {new Date().getFullYear()}, «НПО ФУЛЛЕРЕН». Все права защищены
              </Text>

              <ButtonGroup variant='ghost'>
                <IconButton
                  as='a'
                  href='https://wa.me/79173381186'
                  color='#43d854'
                  aria-label='Whatsapp'
                  icon={<FaWhatsappSquare fontSize='20px'/>}
                />
                <IconButton
                  as='a'
                  href='viber://chat?number=%2B79173381186'
                  aria-label='Viber'
                  color='#665CAC'
                  icon={<FaViber fontSize='20px'/>}
                />
                <IconButton
                  as='a'
                  href='https://www.instagram.com/factory_korund/'
                  target='_blank'
                  aria-label='Instagram'
                  color='#8a3ab9'
                  icon={<FaInstagramSquare fontSize='20px'/>}
                />
                <IconButton
                  as='a'
                  href='https://www.youtube.com/channel/UCB1Pu92nRaimLhW0yj0-0vQ'
                  target='_blank'
                  aria-label='LinkedIn'
                  color='#c4302b'
                  icon={<FaYoutube fontSize='20px'/>}
                />
                <IconButton
                  as='a'
                  href='https://twitter.com/Korund34'
                  target='_blank'
                  aria-label='Twitter'
                  color='#1DA1F2'
                  icon={<FaTwitter fontSize='20px'/>}
                />
                <IconButton
                  as='a'
                  href='https://www.facebook.com/factorykorund'
                  target='_blank'
                  aria-label='Facebook'
                  color='#3b5998'
                  icon={<FaFacebookSquare fontSize='20px'/>}
                />
              </ButtonGroup>
            </Stack>
          </Box>

        </Stack>
      </Container>
    </Box>
  )
}