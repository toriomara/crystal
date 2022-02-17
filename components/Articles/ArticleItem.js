import React from 'react'
import Link from 'next/link'
import {color, Heading, Text} from "@chakra-ui/react";

const ArticleItem = ({article}) => {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <a>
        <Heading variant={4}>{article.title}</Heading>
        <Text>{article.excerpt}</Text>
      </a>
    </Link>
  )
}

export default ArticleItem
