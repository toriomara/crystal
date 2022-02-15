import {motion} from 'framer-motion'
import Backdrop from '../Backdrop'
import {Box} from "@chakra-ui/react";

const MotionBox = motion(Box)

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transaction: {
      type: 'spring',
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

const Modal = ({handleClose, text}) => {
  return (
    <Backdrop
      onClick={handleClose}
    >
      <MotionBox
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'

        width="clamp(50%, 700px, 90%)"
        height="min(50%, 300px)"
        margin='auto'
        padding='0 2rem'
        borderRadius='12px'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        {text}
      </MotionBox>
    </Backdrop>
  )
}

export default Modal