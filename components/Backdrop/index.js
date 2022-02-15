import {motion} from 'framer-motion'
import styled from '@emotion/styled'
import {Box} from '@chakra-ui/react'

const MotionBox = motion(Box)

const Backdrop = ({children, onClick}) => {
  return (
    <MotionBox
      position='absolute'
      top='0'
      left='0'
      height='100%'
      width='100%'
      backgroundColor='#000000'
      display='flex'
      alignItems='center'
      justifyContent='center'

      onClick={onClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {children}
    </MotionBox>
  )
}

export default Backdrop