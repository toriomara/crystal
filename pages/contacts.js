import React from 'react'
import {
  AspectRatio,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import {Contacts2} from '../components/ContactsPage/Contacts2'
import {AirnbnbCard} from '../components/airnbnb'

const Contacts = () => {
  return (
    <Box maxW='8xl'>
      <Contacts2/>
      <Text textAlign="center" py={6} px={6} fontSize='lg'>
        Мы открыты для переговоров по созданию территориальных сетей сбыта, по предоставлению статуса дилера или
        дистрибьютора. Данные статусы дают массу преимуществ, как в ценовой политике, так и в понимании ситуации с
        территориальным эксклюзивом.
      </Text>
      <Box>
        <Heading as='h2' textAlign="center" justifyContent='center' py={6} px={6}>
          Наш адрес
        </Heading>
      </Box>
      <Divider/>
      <SimpleGrid
        my={4}
        spacing={6}
        justifyContent='center'
        direction={['row', 'column', 'column', 'column']}
        templateColumns={{
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)'
        }}
      >
        <Box
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow='md'
          rounded='lg'
          p={4}
          align={'center'}
          border={'1px solid #EDF2F7'}
          _hover={{
            boxShadow: '2xl',
            border: '1px solid transparent',
            transition: 'all 0.5s ease-out'
          }}
        >
          <Avatar
            size={'xl'}
            src={
              'https://scontent-hel3-1.xx.fbcdn.net/v/t1.6435-9/98161205_100270371715449_560252722549358592_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kkugkQCxWucAX8lomv0&_nc_ht=scontent-hel3-1.xx&oh=00_AT8iGDUY-QCZNnfF7tuz-nbirn2wamKIZxSNWociGs8eMw&oe=620AC414'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize='2xl'>
            Отдел внешней экономической деятельности
          </Heading>
          <Text fontWeight={600} color={'gray.600'} my={4}>
            export@korund34.ru
          </Text>
          <Text
            textAlign='center'
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Здесь должен или может быть какой-то текст, объясняющий специфику подразделения
          </Text>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              +7 (8442) 50-40-31
            </Badge>
          </Stack>

          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              variant='secondary'>
              Написать
            </Button>
            <Button
              variant='primary'>
              Позвонить
            </Button>
          </Stack>
        </Box>

        <Box
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow='md'
          rounded='lg'
          p={4}
          align={'center'}
          border={'1px solid #EDF2F7'}
          _hover={{
            boxShadow: '2xl',
            border: '1px solid transparent',
            transition: 'all 0.5s ease-out'
          }}
        >
          <Avatar
            size='xl'
            src={
              'http://www.mcicon.com/wp-content/uploads/2021/01/Science_Chemistry_1-copy-9.jpg'
            }
            alt='Avatar Alt'
            mb={4}
            pos='relative'
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize='2xl'>
            Производственный отдел
          </Heading>
          <Text fontWeight={600} color='gray.600' my={4}>
            produce@korund34.ru
          </Text>
          <Text
            textAlign='center'
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Здесь должен или может быть какой-то текст, объясняющий специфику подразделения
          </Text>

          <Stack align='center' justify='center' direction='row' mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight='400'>
              #smth
            </Badge>
          </Stack>

          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              variant='secondary'>
              Написать
            </Button>
            <Button
              variant='primary'>
              Позвонить
            </Button>
          </Stack>
        </Box>
        <Box
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow='md'
          rounded='lg'
          p={4}
          align={'center'}
          border={'1px solid #EDF2F7'}
          _hover={{
            boxShadow: '2xl',
            border: '1px solid transparent',
            transition: 'all 0.5s ease-out'
          }}
        >
          <Avatar
            size={'xl'}
            src={
              'data:image/png;base64,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'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize='2xl'>
            Технический отдел
          </Heading>
          <Text fontWeight={600} color={'gray.600'} my={4}>
            tech@korund34.ru
          </Text>
          <Text
            textAlign='center'
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Здесь должен или может быть какой-то текст, объясняющий специфику подразделения
          </Text>

          <Stack align='center' justify='center' direction='row' mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #SMTH
            </Badge>
          </Stack>

          <Stack mt={8} direction='row' spacing={4}>
            <Button
              flex={1}
              variant='secondary'>
              Написать
            </Button>
            <Button
              variant='primary'>
              Позвонить
            </Button>
          </Stack>
        </Box>

        <Box
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow='md'
          rounded='lg'
          p={4}
          align={'center'}
          border={'1px solid #EDF2F7'}
          _hover={{
            boxShadow: '2xl',
            border: '1px solid transparent',
            transition: 'all 0.5s ease-out'
          }}
        >
          <Avatar
            size={'xl'}
            src={
              'https://img.myloview.ru/posters/logistics-icon-thin-linear-logistics-outline-icon-isolated-on-white-background-line-vector-logistics-sign-symbol-for-web-and-mobile-700-255777524.jpg'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'}>
            Отдел материально-технического обеспечения/оснащения
          </Heading>
          <Text fontWeight={600} color={'gray.600'} my={4}>
            export@korund34.ru
          </Text>
          <Text
            textAlign='center'
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Здесь должен или может быть какой-то текст, объясняющий специфику подразделения
          </Text>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #SMTH
            </Badge>
          </Stack>

          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              variant='secondary'>
              Написать
            </Button>
            <Button
              variant='primary'>
              Позвонить
            </Button>
          </Stack>
        </Box>
      </SimpleGrid>
      <Divider my={10}/>
      <Box marginTop={4}>
        <AspectRatio marginTop={4} ratio={16 / 9}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2213.8748382895697!2d44.52841130989059!3d48.710150039659084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411acb2d69616541%3A0x7ac494b9e736bc95!2z0KTQo9Cb0JvQldCg0JXQnSwg0L3QsNGD0YfQvdC-LdC_0YDQvtC40LfQstC-0LTRgdGC0LLQtdC90L3QvtC1INC-0LHRitC10LTQuNC90LXQvdC40LU!5e0!3m2!1sru!2sru!4v1641906649031!5m2!1sru!2sru"
            /*width="800" height="600" style="border:0;" allowFullScreen="" loading="lazy"*//>
        </AspectRatio>
      </Box>
      <Divider my={10}/>
      <Divider my={10}/>
      <AirnbnbCard/>
    </Box>

  )
}

export default Contacts