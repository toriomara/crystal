import React from 'react'
import {Heading} from '@chakra-ui/react'
import ArticleList from '../components/Articles/ArticlesList'
import {server} from '../config'
import Meta from '../components/Meta'
import axios from 'axios'
import {articles} from '../data/newsData'
//https://www.youtube.com/watch?v=mTz0GXj8NN0

export default function News({articles}) {
  return (
    <div>
      <Meta title='News'/>
      <Heading variant='page-title'>
        Новости
      </Heading>
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  /*const res = await axios.get(`${server}/api/articles`)
  const articles = await res.data*/

  return {
    props: {
      articles
    }
  }
}

