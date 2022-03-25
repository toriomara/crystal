import Link from "next/link";
//import Image from 'next/image'
import { Heading, Text, Box, Flex, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const ArticleItem = ({ article }) => {
  return (
    <Flex>
      <VStack spacing={3} alignItems="flex-start">
        <Box>
        <Link href="/article/[id]" as={`/article/${article.id}`}>
          <a>
            <Heading variant="h3">{article.title}</Heading>
            <Image src={article.image} alt={article.name} layout="responsive" />
            <Text>{article.excerpt}</Text>
            </a>
        </Link>
        </Box>
      </VStack>
    </Flex>
  );
};

export default ArticleItem;
