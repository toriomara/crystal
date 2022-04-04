import React from 'react'
import {Heading, Box} from '@chakra-ui/react'
import ArticleList from '../components/Articles/ArticlesList'
import Meta from '../components/Meta'
import {articles} from '../data/newsData'
//https://www.youtube.com/watch?v=mTz0GXj8NN0

export default function News({articles}) {
  return (
    <Box>
      <Meta title='News'/>
      <Heading variant='page-title'>
        Новости
      </Heading>
      <ArticleList articles={articles}/>
    </Box>
  )
}

export const getStaticProps = async () => {

  return {
    props: {
      articles
    }
  }
}

