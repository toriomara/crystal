import React from 'react';
import {
  Button,
  Heading,
  Text,
  Box,
  Badge,
  Flex,
  VStack,
  Image,
  useColorModeValue,
  Grid,
  GridItem,
  Skeleton,
  SimpleGrid,
  Divider,
  AspectRatio,
} from '@chakra-ui/react';
import Link from 'next/link';
import { articles } from '../../../data/newsData';
import Meta from '../../../components/Meta';
import ShareBlock from '../../../components/ShareBlock/ShareBlock';
import { SearchBlock } from '../../../components/Search';
import RandomArticles from '../../../components/Articles/RandomArticles';

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
  const { id, date, title, body, badge, image, name, subtitle } = article;

  return (
    <Flex py={10} my={10}>
      <Meta title={title} />
      <Grid templateColumns='1fr 14fr 5fr' gap={6}>
        <GridItem justifyContent='center'>
          <ShareBlock article={article} wrap={Grid} gap={4} />
        </GridItem>
        <GridItem>
          <AspectRatio ratio={16 / 9} mb={8}>
            <Image
              src={image}
              alt={name}
              layout='fill'
              objectFit='cover'
              rounded={4}
              fallback={<Skeleton />}
            />
          </AspectRatio>
          <Flex gap={4}>
            <Text>{date}</Text>
            <Badge variant='outline' colorScheme='brand' alignSelf='center'>
              {badge}
            </Badge>
          </Flex>
          <Heading lineHeight='1.5' variant='articleTitle'>
            {title}
          </Heading>
          <Text fontWeight='700' py={2}>
            {subtitle}
          </Text>
          <Text py={4}>{body}</Text>
          <Flex gap={4}>
            <Button variant='primary'>
              <Link href='/news'>Назад</Link>
            </Button>
            <Button variant='primary'>
              <Link href="/article/[id]" as='/article/[id]'>Вперёд</Link>
            </Button>
          </Flex>
        </GridItem>
        <GridItem justifyContent='center'>
          <Grid>
            <SearchBlock size='md' />
            <Heading
              variant='h4'
              fontWeight={700}
              justifyItems='start'
              pt={8}
              pb={3}
            >
              Случайные новости
            </Heading>
            <RandomArticles />
            <RandomArticles />
            <RandomArticles />
          </Grid>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default article;
