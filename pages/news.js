import React from 'react'
import {Heading} from '@chakra-ui/react'
import ArticleList from '../components/Articles/ArticlesList'
import {server} from '../config'
//https://www.youtube.com/watch?v=mTz0GXj8NN0

export default function News({articles}) {
  return (
    <div>
      <Heading variant='page-title'>
        Новости
      </Heading>
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

