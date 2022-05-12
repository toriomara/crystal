import React from 'react';
import { Text, VStack, Grid, GridItem, Box } from '@chakra-ui/react';

const Russia = () => {
  return (
    <Grid
      templateColumns={{
        base: '1fr 3fr 2fr',
      }}
      gap={4}
    >
      <GridItem>
        {/* <VStack> */}
          <Box>Саратов</Box>
          <Text>Волгоград</Text>
          <Text>ЮФО</Text>
        {/* </VStack> */}
      </GridItem>
      <GridItem>Hello</GridItem>
      <GridItem>World</GridItem>
    </Grid>
  );
};

export default Russia;
