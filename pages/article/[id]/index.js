import React from 'react'
import {server} from '../../../config'
import {Button, Heading, Text} from '@chakra-ui/react'
import Link from 'next/link'
import axios from 'axios'

const article = ({article}) => {

  return (
    <>
      <Heading variant={4}>
        {article.title}
      </Heading>
      <Text>
        {article.body}
      </Text>
      <Button variant='primary'>
        <Link href='/news'>Go Back</Link>
      </Button>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await axios.get(`${server}/api/articles/${context.params.id}`)
  const article = await res.data

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await axios.get(`${server}/api/articles`)
  const articles = await res.data
  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return {
    paths,
    fallback: false
  }
}

export default article
