import React from "react";
import {
  Box,
  color,
  Grid,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ArticleItem from "./ArticleItem";
import { motion } from "framer-motion";

const MotionGridItem = motion(GridItem);

const ArticleList = ({ articles }) => {
  const toggleColor = useColorModeValue('green', 'yellow')
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, lg: 3 }}
      rowGap={8}
      columnGap={6}
      mt={6}
      mx='auto'
    >
      {articles.map((article) => (
        <MotionGridItem
          key={article.id}
          _hover={{
            color: useColorModeValue("brand.100", "brand.200"),
          }}
          whileHover={{
            position: "relative",
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
