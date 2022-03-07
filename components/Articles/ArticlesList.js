import React from 'react'
import {Box, color, Grid, GridItem, Heading, Text} from '@chakra-ui/react'
import ArticleItem from './ArticleItem'

const ArticleList = ({articles}) => {
  return (
    <div>
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        {articles.map(article =>
          <GridItem
            key={article.id}
            p={6}
            w='100%'
            border='2px solid #EDF2F7'
            rounded={4}
            _hover={{
              color: 'blue.500'
            }}
          >
            <ArticleItem article={article}/>
          </GridItem>
        )
        }
      </Grid>
    </div>
  )
}

export default ArticleList