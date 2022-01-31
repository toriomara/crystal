import React from 'react'
import {Box, Flex, Heading, HStack, SimpleGrid, Spacer, Stack} from '@chakra-ui/react'

const ContactForm = () => {
  return (
    <SimpleGrid
      my={4}
      spacing={6}
      justifyContent='center'
      direction={['row', 'column', 'column', 'column']}
      templateColumns={{
        sm: 'repeat(2, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(2, 1fr)',
        xl: 'repeat(2, 1fr)'
      }}
    >
      <Box border='1px solid #EDF2F7' rounded={4}>
        <Heading variant='h3' align='center' py={4}>Свяжитесь с нами</Heading>

      </Box>

      <Box border='1px solid #EDF2F7' rounded={4}>
        <Heading variant='h3'align='center' py={4}>Задайте вопрос</Heading>
      </Box>
    </SimpleGrid>
  )
}

export default ContactForm
