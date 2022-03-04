import Link from 'next/link'
import {Heading, Text} from '@chakra-ui/react'

const ArticleItem = ({article}) => {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <a>
        <Heading variant='h3'>{article.title}</Heading>
        <Text>{article.excerpt}</Text>
      </a>
    </Link>
  )
}

export default ArticleItem
