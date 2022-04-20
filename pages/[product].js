import {
  Flex,
  Box,
  Grid,
  GridItem,
  Heading,
  VStack,
  HStack,
  Text,
  Divider,
  Container,
} from '@chakra-ui/react';
import { products } from '../data/productsData';
import ProductBar from '../components/ProductBar';
import Image from 'next/image';
import { Feature } from '../components/Product/Feature';
import Carousel from '../components/HomePage/Carousel';
import Meta from '../components/Meta';

export const getStaticProps = async ({ params }) => {
  const product = products.find((product) => product.name === params.product);

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { product: product.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

const Product = ({ product }) => {
  const { name, fullDesc, image, temperature, volume, packaging, more } =
    product;

  return (
    <Box mt={14}>
      <Meta title='Production' />
      <Heading variant='pageTitle'>Продукция</Heading>

      {/* <Flex
        py={[0, 10, 20]}
        direction={{ base: 'column-reverse', md: 'row' }}
        spacing={4}
      >
        <VStack p={2} w='full' h='full' verticalAlign='center'>
          <Image src={image} alt={image} />
          <Carousel /> 
        </VStack>
        <VStack p={4}>
          <Heading variant='h2' justifyItems='center'>
            {name}
          </Heading>
          <Text>{fullDesc}</Text>
        </VStack>
        <VStack p={4}>
          <ProductBar />
        </VStack>
      </Flex> */}

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(7, 7fr)',
        }}
        gap={8}
      >
        <GridItem
          colSpan={{ base: 7, sm: 3, md: 1, lg: 2 }}
          order={{ base: 2, sm: 1, md: 1 }}
          alignSelf='center'
          placeSelf='center'
        >
          <Image src={image} alt={image} />
        </GridItem>
        <GridItem
          colSpan={{ base: 7, sm: 3, md: 1, lg: 4 }}
          order={{ base: 2, sm: 1, md: 2 }}
        >
          <Heading variant='h2' justifyItems='center' mb={6}>
            {name}
          </Heading>
          <Text>{fullDesc}</Text>
        </GridItem>
        <GridItem
          colSpan={{ base: 7, sm: 3, md: 0, lg: 1 }}
          order={{ base: 1, sm: 1, md: 3 }}
        >
          <ProductBar />
        </GridItem>
      </Grid>

      <Feature
        temperature={temperature}
        volume={volume}
        packaging={packaging}
        more={more}
      />
    </Box>
  );
};

export default Product;
