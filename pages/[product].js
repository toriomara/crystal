import {
  Flex,
  Grid,
  GridItem,
  Heading,
  VStack,
  HStack,
  Text,
  Container,
} from "@chakra-ui/react";
import { products } from "../data/productsData";
import ProductBar from "../components/ProductBar";
import Image from "next/image";
import { Features } from "../components/Product/Features";
import Carousel from "../components/HomePage/Carousel";

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
    <Container maxW="container.xl" p={0}>
      <Flex
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
        spacing={4}
      >
        <VStack p={2} w="full" h="full" verticalAlign="center">
          <Image src={image} />
          {/* <Carousel /> */}
        </VStack>
        <VStack p={4}>
          <Heading variant="h2" justifyItems="center">
            {name}
          </Heading>
          <Text>{fullDesc}</Text>
        </VStack>
        <VStack p={4}>
          <ProductBar />
        </VStack>
        
      </Flex>
      <HStack w='100%'>
          <Features
            temperature={temperature}
            volume={volume}
            packaging={packaging}
            more={more}
          />
        </HStack>
    </Container>
  );
};

export default Product;
