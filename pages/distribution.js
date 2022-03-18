import React, {useState} from 'react'
import {Button, Heading} from '@chakra-ui/react'
import {AnimatePresence, motion} from 'framer-motion'
import Subscribe from '../components/Subscribe/Subscribe'

const MotionButton = motion(Button)

const Distribution = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <Heading>Distribution</Heading>
      <MotionButton
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        variant='outline'
        onClick={handleClick}
      >
        Modal
      </MotionButton>
      {isOpen && <Subscribe setIsOpen/>} 
    </div>
  )
}

export default Distribution