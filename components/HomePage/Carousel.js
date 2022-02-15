import React, {useEffect, useRef, useState} from 'react'
import {Box} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import images from './images'
import Image from 'next/image'
import styled from '@emotion/styled'

const MotionBox = motion(Box)

const Carousel = () => {

  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <>
      <MotionBox
        ref={carousel}
        cursor='grab'
        overflow='hidden'
        background='lightblue'
        rounded={4}
        whileTap={{cursor: 'grabbing'}}
      >
        <MotionBox
          display='flex'
          drag='x'
          dragConstraints={{right: 0, left: -width}}
        >
          {images.map((image) => {
            return (
              <MotionBox
                key={image}
                minHeight='40rem'
                minWidth='30rem'
                padding='40px'
              >
                <Image
                  src={image}
                  alt='image'
                  borderRadius='2rem'
                  placeholder='blur'
                />
              </MotionBox>
            )
          })}
        </MotionBox>
      </MotionBox>
    </>
  )
}

export default Carousel
