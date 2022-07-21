//https://www.youtube.com/watch?v=mTz0GXj8NN0&t=2846s
import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import ArticleList from '../../src/components/Articles/ArticlesList';
import Meta from '../../src/components/Meta';
import { articles } from '../../src/data/newsData';

export default function News({ articles }) {
  return (
    <Box>
      <Meta title='News' />
      <Heading variant='pageTitle'>Новости</Heading>
      <ArticleList articles={articles} />
    </Box>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      articles,
    },
  };
};
