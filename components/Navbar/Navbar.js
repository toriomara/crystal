import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import {ChevronDownIcon, ChevronUpIcon, HamburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from '../ui/theme-toggle-button'
import SearchBar from '../Search'
import Logo from '../ui/Logo'

const LinkItem = ({href, path, _target, children, ...props}) => {
  const active = path === href
  const inactiveColor = useColorModeValue('primary', 'primary')

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        fontSize={17}
        fontWeight={active ? 'bold' : undefined}
        color={active ? inactiveColor : 'black'}
        rounded={6}
        px={3}
        _focus='none'
        _target={_target}
        _hover={{
          textDecoration: 'none',
          color: 'red.600'
        }}
        {...props}

      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = (props) => {
  const {path} = props
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{backdropFilter: 'blur(10px)'}}
      zIndex={1}
      {...props}
    >
      <Container
        display='flex'
        justify='space-between'
        flexDirection='row'
        alignItems='center'
        maxW="8xl"
        wrap="wrap"
        p={2}
        px={{
          base: '4',
          md: '8',
        }}
      >
        <Box mr={2}>
          <Logo/>
        </Box>

        <Spacer/>

        <Flex>
          <Stack
            direction={{base: 'column', md: 'row'}}
            display={{base: 'none', xl: 'flex'}}
            width={{base: 'full', md: 'auto'}}
            flexGrow={1}
            mt={{base: 4, md: 0}}
            mr={12}
          >
            <LinkItem href="/" path={path} passHref>
              Главная
            </LinkItem>
            <Container alignSelf='center' variant='none'>
              <Menu isOpen={isOpen}>
                <MenuButton
                  border='0'
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                >
                  Продукция {isOpen ? <ChevronUpIcon/> : <ChevronDownIcon/>}
                </MenuButton>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <MenuItem>КОРУНД-Классик</MenuItem>
                  <MenuItem>КОРУНД-Фасад</MenuItem>
                  <MenuItem>КОРУНД-Антикор</MenuItem>
                  <MenuItem>КОРУНД-Зима</MenuItem>
                </MenuList>
              </Menu>
            </Container>
            <LinkItem href='/works' path={path}>
              Документация
            </LinkItem>
            <LinkItem href='/posts' path={path}>
              Дистрибьюция
            </LinkItem>
            <LinkItem href='/news' path={path}>
              Новости
            </LinkItem>
            <LinkItem href='/contacts' path={path}>
              Контакты
            </LinkItem>
          </Stack>

          <HStack display={{base: 'none', md: 'flex'}}>
            <SearchBar/>
            <Button as='a' href='tel:+78002347878' variant='none' _focus='none'>
              <span>8 800 234-78-78</span>
            </Button>
          </HStack>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon/>}
              colorScheme='black' variant='ghost'
            >
              Lang
            </MenuButton>
            <MenuList>
              <MenuItem>EN</MenuItem>
              <MenuItem>DE</MenuItem>
              <MenuItem>CZ</MenuItem>
              <MenuItem>SP</MenuItem>
              <MenuItem>AR</MenuItem>
            </MenuList>
          </Menu>

          <Flex
            align='right'
            alignSelf='center'
          >
            <ThemeToggleButton/>

            <Box
              display={{base: 'inline-block', xl: 'none'}}
              ml={2}
            >
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon/>}
                  variant='none'
                  aria-label="Options"
                />
                <MenuList>
                  <Button variant='none'>
                    <a href='tel:+78002347878'>8 800 234-78-78</a>
                  </Button>
                  <NextLink href='/' passHref>
                    <MenuItem as={Link}>Главная</MenuItem>
                  </NextLink>
                  <NextLink href='/production' passHref>
                    <MenuItem as={Link}>Продукция</MenuItem>
                  </NextLink>
                  <NextLink href='/posts' passHref>
                    <MenuItem as={Link}>Документация</MenuItem>
                  </NextLink>
                  <NextLink href='/posts' passHref>
                    <MenuItem as={Link}>Дистрибьюция</MenuItem>
                  </NextLink>
                  <NextLink href='/news' passHref>
                    <MenuItem as={Link}>Новости</MenuItem>
                  </NextLink>
                  <NextLink href='/contacts' passHref>
                    <MenuItem as={Link}>Контакты</MenuItem>
                  </NextLink>

                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
