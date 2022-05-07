import React, { useState, useEffect } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <MotionFlex zIndex={10} position='relative' variants={banner}>
      <BannerRowTop title={'brand'} />
      <BannerRowCenter title={'experience'} playMarquee={playMarquee} />
      <BannerRowBottom title={'studio'} />
    </MotionFlex>
  );
};

export default Banner;

const AnimatedLetters = ({ title, disabled }) => {
  //const MotionBox = motion(Box);

  const MBox = ({ children, ...props }) => {
    return (
      <motion.span
        fontSize='50'
        fontWeight='500'
        position='relative'
        display='inline-block'
        letterSpacing='-12'
        whiteSpace='nowrap'
        variants={disabled ? null : banner}
        initial='initial'
        animate='animate'
        {...props}
      >
        {[...title].map((letter) => (
          <motion.span
          key={letter.id}
            className='row-letter'
            variants={disabled ? null : letterAnimation}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
    <MBox
      variants={disabled ? null : banner}
      initial='initial'
      animate='animate'
    >
      {[...title].map((letter) => (
        <MBox
          key={title.id}
          initial='initial'
          animate='animate'
          variants={letterAnimation}
        >
          {letter}
        </MBox>
      ))}
    </MBox>
  );
};

const BannerRowTop = ({ title }) => {
  return (
    <Box
      position='relative'
      display='flex'
      alignItems='center'
      overflow='hidden'
      zIndex={100}
    >
      <Box
        display='flex'
        width='50%'
        align-content='center'
        justify-content='center'
      >
        <AnimatedLetters title={title} />
      </Box>
      <MotionBox
        display='flex'
        width='50%'
        align-content='center'
        justify-content='center'
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
      >
        <Box
          as='span'
          fontWeight='500'
          fontSize='1.8rem'
          lineHeight='2.6rem'
          width='320px'
        >
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </Box>
      </MotionBox>
    </Box>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <Box
      display='flex'
      position='relative'
      alignItems='center'
      overflow='hidden'
      animationPlayState='running'
    >
      <Box
        width='fit-content'
        display='flex'
        position='relative'
        transform='translate3d($move-initial, 0, 0)'
        animation='marquee 5s linear infinite'
        animationPlayState='paused'
      >
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </Box>
    </Box>
  );
};

const BannerRowBottom = ({ title, playMarquee }) => {
  return (
    <Box
      overflow='hidden'
      display='flex'
      align-items='center'
      justify-content='center'
      text-align='center'
      left='0'
    >
      <MotionBox
        height='160px'
        width='160px'
        borderRadius='100%'
        background='transparent'
        position='absolute'
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        left='160px'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
      >
        <MotionBox
          as='span'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 1.8 }}
        >
          scroll
        </MotionBox>
        <MotionBox
          as='span'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 1.8 }}
        >
          down
        </MotionBox>
      </MotionBox>
      <AnimatedLetters title={title} />
    </Box>
  );
};
