import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const World = () => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(3, 1fr)',
      }}
      gap={4}
    >
      <GridItem>МИР</GridItem>
      <GridItem>МИР</GridItem>
      <GridItem>МИР</GridItem>
    </Grid>
  );
};

export default World;
