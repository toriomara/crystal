import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { products } from '../data/productsData';
import { ProductBar } from '../components/Product/ProductBar';
import { Feature } from '../components/Product/Feature';
import { Meta } from '../components/Meta';
import Carousel from '../components/HomePage/Carousel';

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
    paths: [],
    fallback: 'false',
  };
};

const Product = ({ product }) => {
  const {
    name,
    fullDesc,
    image,
    temperature,
    volume,
    packaging,
    color,
    productDesc,
  } = product;

  return (
    <Box>
      <Meta title='Production' />
      <Heading variant='pageTitle'>Продукция</Heading>
      <Box my={10}>{productDesc}</Box>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 2fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(7, 7fr)',
        }}
        gap={8}
      >
        <GridItem
          colSpan={{ base: 7, sm: 1, md: 1, lg: 2 }}
          order={{ base: 2, sm: 1, md: 1, lg: 1 }}
          alignSelf='center'
          placeSelf='center'
        >
          {/* <Carousel/> */}
          <Image src={image} alt={image} />
        </GridItem>
        <GridItem
          colSpan={{ base: 7, sm: 3, md: 2, lg: 4 }}
          order={{ base: 2, sm: 3, md: 3, lg: 2 }}
        >
          <Heading variant='h2' justifyItems='center' mb={6}>
            {name}
          </Heading>
          <Text>{fullDesc}</Text>
        </GridItem>
        <GridItem
          colSpan={{ base: 7, sm: 1, md: 1, lg: 1 }}
          order={{ base: 1, sm: 2, md: 2, lg: 3 }}
        >
          <ProductBar />
        </GridItem>
      </Grid>

      <Feature
        temperature={temperature}
        volume={volume}
        packaging={packaging}
        color={color}
      />
    </Box>
  );
};

export default Product;
