import React from 'react'
import {
  Box,
  Button,
  Flex, Grid, GridItem,
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
    <Grid
      backgroundColor='#EDF2F7'
      my={4}
      rounded={4}
      templateRows='1fr 2fr'
      templateColumns='1fr'
      px={10}
    >
      <GridItem
      rowSpan={1}>
        <Heading
          fontWeight={300}
          align='center' paddingTop={8}
          paddingBottom={4}
        >
          Задайте вопрос
        </Heading>
      </GridItem>
      <Grid
        templateColumns='repeat(3, 1fr)'
        gap={8}
        paddingTop={4}
        paddingBottom={10}
      >
        <GridItem display='grid'fontSize={30} fontWeight={300} justifySelf='center'>
          Заполните, пожалуйста, форму и мы свяжемся с вами в течение пяти минут
        </GridItem>
        <GridItem>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
              />
              <Input type='text' placeholder='Имя' backgroundColor='white'/>
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
              />
              <Input type='tel' placeholder='Номер телефона' backgroundColor='white'/>
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
              />
              <Input type='email' placeholder='Email' backgroundColor='white'/>
            </InputGroup>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack spacing={4}>
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
        </GridItem>

      </Grid>

      {/*<SimpleGrid
        templateColumns='1fr 1fr'
        gridGap={4}
      >
        <Flex p={6} justify='center' fontSize={22}>
          Заполните форму и мы свяжемся с вами в течении пяти минут
        </Flex>
        <Flex p={6} justify='center'>
          <Stack spacing={3} px={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<FaUser/>}
              />
              <Input type='text' placeholder='Имя' backgroundColor='white'/>
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
      </SimpleGrid>*/}
    </Grid>
  )
}