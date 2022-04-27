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
        more={more}
      />
    </Box>
  );
};

export default Product;
