import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import imageCarousel from './images';
import Image from 'next/image';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <MotionFlex
        width='300px'
        ref={carousel}
        cursor='grab'
        overflow='hidden'
        whileTap={{ cursor: 'grabbing' }}
      >
        <MotionFlex
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
        >
          {imageCarousel.map((image) => {
            return (
              <MotionBox
                key={image}
                minWidth='20rem'
                padding='30px'
                overflow='hidden'
                pointer-events='none'
              >
                <Image src={image} alt='image' placeholder='blur'  />
              </MotionBox>
            );
          })}
        </MotionFlex>
      </MotionFlex>
    </>
  );
};

export default Carousel;
