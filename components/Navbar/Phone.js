import React from 'react';
import { Button } from '@chakra-ui/react';

const Phone = (props) => {
  return (
    <Button as='a' href='tel:+7 800 2347878' variant='none' color={props.color}>
      <span>+7 800 234-78-78</span>
    </Button>
  );
};

export default Phone;
