import React from "react";
import {
  Button,
  Heading,
  Text,
  Box,
  Badge,
  Flex,
  VStack,
  useColorModeValue,
  Grid,
  GridItem,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import { articles } from "../../../data/newsData";
import Meta from "../../../components/Meta";
import ShareBlock from "../../../components/ShareBlock/ShareBlock";
import { SearchBlock } from "../../../components/Search";

export const getStaticProps = async ({ params }) => {
  const article = articles.find((article) => article.id === params.id);
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

const article = ({ article }) => {
  const { id, date, title, body, badge, image, name } = article;

  return (
    <Flex py={10} my={10}>
      <Meta title={title} />
      <Grid templateColumns="1fr 10fr 4fr" gap={6}>
        <GridItem  justifyContent='center'>
          <ShareBlock article={article} wrap={Grid} gap={4} />
        </GridItem>
        <GridItem>
          <Badge variant="outline" colorScheme="brand">
            {badge}
          </Badge>
          <Heading lineHeight="1.5" variant="sectionTitle">
            {title}
          </Heading>
          <Text>{date}</Text>
          <Text py={4}>{body}</Text>
          <Button variant="primary">
            <Link href="/news">Назад</Link>
          </Button>
        </GridItem>
        <GridItem justifyContent="center">
          <VStack>
            <SearchBlock size='sm'/>
          </VStack>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default article;
