import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { products } from "../data/productsData";
import ProductBar from "../components/ProductBar";
import Image from "next/image";
import { Features } from "../components/Product/Features";

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
  const { name, fullDesc, image, temperature, volume, packaging, more } = product;

  return (
    <Grid
      templateRows="1fr 4fr 1fr"
      templateColumns="repeat(5, 1fr)"
      gap={8}
      mt={10}
    >
			<GridItem
        rowSpan={4}
        colSpan={2}
        display="grid"
        alignSelf="center"
        justifyContent="center"
      >
        <Image src={image} />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={2}
        display="grid"
        alignSelf="center"
        justifyContent="center"
      >
        <Heading variant="h3" justifyItems="center">
          {name}
        </Heading>
      </GridItem>
      <GridItem rowSpan={4} colSpan={1} width="100%">
        <ProductBar />
      </GridItem>
      <GridItem rowSpan={3} colSpan={2} p={4} height='500px'>
        {fullDesc}
      </GridItem>
      <GridItem rowSpan={1} colSpan={5}>
        <Features
          temperature={temperature}
          volume={volume}
          packaging={packaging}
					more={more}
        />
      </GridItem>
    </Grid>
  );
};

export default Product;
