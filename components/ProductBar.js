import {
  Button,
  Flex,
  Grid,
  GridItem,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { products } from "../data/productsData";
import product from "../pages/[product]";
import styled from "@emotion/styled";

const ProductItems = products.map((p) => p.name);

const ProductBar = ({ href, path, products }) => {
  return (
    <Grid pt={6}>
      <Grid templateRows="repeat(4, 1fr)" gap={3}>
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
                <Button variant="outline" w="100%" height="60px">
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
