import React from 'react'
import {
  Box,
  Button,
  Flex, Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/react'
import {PhoneIcon} from '@chakra-ui/icons'
import {FaEnvelope, FaUser} from 'react-icons/fa'

export const ContactRequest = () => {

  let [value, setValue] = React.useState('')
  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  return (
    <Box backgroundColor='#EDF2F7' my={4} rounded={4}>
      <Heading
        variant='h3'
        align='center' py={6}
      >
        Задайте вопрос
      </Heading>
      <SimpleGrid
        templateColumns='1fr 1fr'
        gridGap={4}
      >
        <Box p={6} alignSelf='center' fontSize={22}>
          Заполните форму и мы свяжемся с вами в течении пяти минут
        </Box>
        <Flex p={6}  justify='center'>
          <Stack spacing={3} px={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<FaUser/>}
              />
              <Input w='100%' type='text' placeholder='Имя' backgroundColor='white'/>
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<PhoneIcon/>}
              />
              <Input type='tel' placeholder='Номер телефона' backgroundColor='white'/>
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<FaEnvelope/>}
              />
              <Input type='email' placeholder='Email' backgroundColor='white'/>
            </InputGroup>
          </Stack>

          <Stack spacing={3}>
            <Textarea
              value={value}
              onChange={handleInputChange}
              placeholder='Ваш вопрос'
              backgroundColor='white'
            />
            <Button variant='primary' size='md'>
              Отправить
            </Button>
          </Stack>
        </Flex>
      </SimpleGrid>
    </Box>
  )
}