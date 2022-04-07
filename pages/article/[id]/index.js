import React from "react";
import {
  Button,
  Heading,
  Text,
  Box,
  Flex,
  VStack,
  useColorModeValue,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import { articles } from "../../../data/newsData";
import Meta from "../../../components/Meta";
import ShareBlock from "../../../components/ShareBlock/shareBlock";

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
  const { id, date, title, body, image, name } = article;

  return (
    <Box px={12} py={10} my={10}>
      <Meta title={title} />
      <Grid templateColumns="1fr 9fr">
        <GridItem>
          <ShareBlock article={article} wrap={Grid} gap={6} />
        </GridItem>
        <GridItem>
          <Heading variant="sectionTitle">{title}</Heading>
          <Text pb={4}>{body}</Text>
          <Button variant="primary">
            <Link href="/news">Назад</Link>
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default article;
