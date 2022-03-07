import React from 'react'
import {Button, Heading, Text} from '@chakra-ui/react'
import Link from 'next/link'
import {articles} from '../../../data/newsData'
import Meta from '../../../components/Meta'
import {server} from '../../../config'
import axios from 'axios'

const article = ({article}) => {

  return (
    <>
      <Meta title={article.title}/>
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
  const article = articles.find(a => a.id === context.params.id)

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return {
    paths,
    fallback: false
  }
}

export default article
