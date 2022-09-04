import { Box, Link } from '@chakra-ui/react';
import { articles } from '../../data/newsData';

const RandomArticles = () => {
  const rnd = Math.ceil(Math.random() * articles.length);

  const title = articles.find(findRnd).title;
  function findRnd(article) {
    return article.id == rnd;
  }

  return (
    <Box>
      <Link href=''>{title}</Link>
    </Box>
  );
};

export default RandomArticles;
