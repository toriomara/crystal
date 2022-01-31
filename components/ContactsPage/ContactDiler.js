import React from 'react'
import {Box, Button, Flex, Heading, SimpleGrid, Text} from '@chakra-ui/react'
import {FaRegHandshake} from 'react-icons/fa'

export const ContactDiler = () => {
  return (
    <Box my={4}>
      <Heading variant='h3' align='center' my={4}>
        Как стать дилером КОРУНД<sup>®</sup>
      </Heading>
      <SimpleGrid
        gridGap={4}
        gridTemplateColumns={{
          sm: 'repeat(1, 1fr)',
          md: '8fr 2fr',
        }}
      >
        <Flex
          align='center'
        >
          <Text fontSize='lg'>
            Мы открыты для переговоров по предоставлению статуса дилера или
            дистрибьютора. Эти статусы дают преимущества в ценовой политике и в понимании ситуации с
            территориальным эксклюзивом.
            Заполните небольшую анкету и мы сделаем вам оптимальное предложение.
            {/*Ответьте, пожалуйста на несколько вопросов и мы подберём условия для взаимовыгодного сотрудничества.*/}
          </Text>
        </Flex>
        <Flex
          align='center'
          justifyContent='center'
        >
          <Button variant='primary'>
            Стать дилером
          </Button>
        </Flex>
      </SimpleGrid>
    </Box>

  )
}

