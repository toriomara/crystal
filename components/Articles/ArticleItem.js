import Link from 'next/link'
//import Image from 'next/image'
import {Heading, Text} from '@chakra-ui/react'
import {Image} from '@chakra-ui/react'

const ArticleItem = ({article}) => {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <a>
        <Heading variant='h3'>{article.title}</Heading>
        <Image
          src={article.image}
          alt={article.name}
          //boxSize='200px'
          //objectFit='cover'
          layout='responsive'
        />
        <Text>{article.excerpt}</Text>
      </a>
    </Link>
  )
}

export default ArticleItem
