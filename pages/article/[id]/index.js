import React from 'react'
import {Button, Heading, Text} from '@chakra-ui/react'
import Link from 'next/link'
import {articles} from '../../../data/newsData'
import Meta from '../../../components/Meta'

export const getStaticProps = async ({params}) => {
  const article = articles.find(article => article.id === params.id)

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

export default article
