import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import imageCarousel from './images';
import Image from 'next/image';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const MotionFlex = motion(Flex);

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <MotionFlex
      width='300px'
      ref={carousel}
      cursor='grab'
      overflow='hidden'
      whileTap={{ cursor: 'grabbing' }}
      bg='whiteAlpha.100'
      rounded={6}
    >
      <Icon
        fontSize={25}
        zIndex={1}
        onClick={() => {
          console.log('click');
        }}
        cursor='pointer'
      >
        <IoIosArrowDropleft />
      </Icon>
      <MotionFlex drag='x' dragConstraints={{ right: 0, left: -width }}>
        {imageCarousel.map((image) => {
          return (
            <MotionFlex
              key={image}
              minWidth='20rem'
              padding='30px'
            >
              <Image
                src={image}
                alt='image'
                w='100%'
                h='100%'
                pointer-events='none'
              />
            </MotionFlex>
          );
        })}
      </MotionFlex>
      <Icon fontSize={25} zIndex={11}>
        <IoIosArrowDropright />
      </Icon>
    </MotionFlex>
  );
};

export default Carousel;
