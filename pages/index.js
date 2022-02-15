import {Box, Container} from '@chakra-ui/react'
import CallToActionWithIllustration from '../components/HomePage/CTA'
import CallToActionWithVideo from '../components/HomePage/CTA2'
import Carousel from '../components/HomePage/Carousel'

export default function Home({articles}) {
  console.log(articles)
  return (
      <Box
        maxW='xxl'
      >
        <CallToActionWithIllustration/>
        <CallToActionWithVideo/>
        <Carousel/>
        {/*{articles.map(article => <h3 key={article.id}>{article.title}</h3>)}*/}
      </Box>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
