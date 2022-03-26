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
import { Box, color, Grid, SimpleGrid, GridItem, Heading, Text } from "@chakra-ui/react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}
    spacing={10}
    mt={16}
    mx="auto">
      {articles.map((article) => (
        <GridItem
          key={article.id}
          p={6}
          w="100%"
          border="1px solid #EDF2F7"
          rounded={4}
          _hover={{
            color: "brand.600",
          }}
        >
          <ArticleItem article={article} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default ArticleList;