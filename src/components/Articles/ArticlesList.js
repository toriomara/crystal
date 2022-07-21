import { SimpleGrid, GridItem } from '@chakra-ui/react';
import ArticleItem from './ArticleItem';
import { motion } from 'framer-motion';

const ArticleList = ({ articles }) => {
  const MotionGridItem = motion(GridItem);
  const artVariants = {
    hidden: {
      opacity: 0,
      x: '-300px',
    },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
      }
    }),
  };
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, lg: 3 }}
      rowGap={8}
      columnGap={6}
      mt={6}
      mx='auto'
    >
      {articles.map((article, i) => (
        <MotionGridItem
          variants={artVariants}
          initial='hidden'
          animate='animate'
          custom={i}
          key={article.id}
          whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: 1.08,
            transition: {
              duration: 0.4,
            },
          }}
        >
          <ArticleItem article={article} />
        </MotionGridItem>
      ))}
    </SimpleGrid>
  );
};

export default ArticleList;
