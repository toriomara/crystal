// import React from "react";
// import { Box, color, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
// import ArticleItem from "./ArticleItem";

// const ArticleList = ({ articles }) => {
//   return (
//     <Grid templateColumns="repeat(2, 1fr)" gap={6}>
//       {articles.map((article) => (
//         <GridItem
//           key={article.id}
//           p={6}
//           w="100%"
//           border="1px solid #EDF2F7"
//           rounded={4}
//           _hover={{
//             color: "brand.600",
//           }}
//         >
//           <ArticleItem article={article} />
//         </GridItem>
//       ))}
//     </Grid>
//   );
// };

// export default ArticleList;

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
  const bgColor = useColorModeValue("white", "#22272e");
  const borderChange = useColorModeValue('#E2E8F0', "#444c56")

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={10}
      mt={16}
      mx="auto"
    >
      {articles.map((article) => (
        <MotionGridItem
          bg={bgColor}
          whileHover={{
            position: "relative",
            zIndex: 1,
            scale: 1.08,
            transition: {
              duration: 0.4,
            },
          }}
          key={article.id}
          p={6}
          w="100%"
          border={1}
          borderStyle="solid"
          borderColor={borderChange}
          boxShadow="lg"
          rounded={10}
          _hover={{
            color: "brand.200",
          }}
        >
          <ArticleItem article={article} />
        </MotionGridItem>
      ))}
    </SimpleGrid>
  );
};

export default ArticleList;
