import { Button, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { products } from '../../data/productsData';

const ProductNames = products.map((p) => p.name);

const ProductBar = ({ href, path, products }) => {
  const active = href === path;
  const activeBtn = useColorModeValue(
    active ? 'brand.50' : 'brand.200',
    active ? 'brand.400' : 'brand.600'
  );
  return (
    <Grid>
      <Grid templateRows='repeat(4, 1fr)' gap={3} my={6}>
        {ProductNames.map((product, index) => {
          return (
            <GridItem w='100%' key={index}>
              <NextLink href={`/${product}`}>
                <Button
                  variant='outlined'
                  w='100%'
                  color='white'
                  bg={activeBtn}
                >
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
