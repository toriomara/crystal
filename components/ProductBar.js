import {
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { products } from "../data/productsData";

const ProductItems = products.map((p) => p.name);

const ProductBar = ({ href, path, products }) => {
  return (
    <Grid>
      <Grid templateRows="repeat(4, 1fr)" gap={3} my={6}>
        {ProductItems.map((product, index) => {
          //const active = path === href
          return (
            <GridItem
              w="100%"
              key={index}
              // color={
              // 	useColorModeValue(active ? 'primary' : 'black',
              // 		active ? 'alternative' : 'secondary')
              // }
              _hover={{
                textDecoration: "none",
                color: "red.600",
              }}
            >
              <NextLink href={`/${product}`}>
                <Button variant="outlined" w="100%" >
                  {product}
                </Button>
              </NextLink>
            </GridItem>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ProductBar;
