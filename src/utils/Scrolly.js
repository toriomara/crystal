import React, { useEffect, useState } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const Scrolly = () => {
  const [width, setWidth] = useState(1);
  const handleScroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    setWidth(scrollPercentRounded);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Box
        h='2px'
        bg={useColorModeValue('brand.50', 'brand.200')}
        position='fixed'
        zIndex={2}
        w={`${width}%`}
        transition='width .5s ease-in-out'
      />
  )
}

export default Scrolly