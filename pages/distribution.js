import React, {useState} from 'react'
import {Button, Heading} from '@chakra-ui/react'
import {AnimatePresence, motion} from 'framer-motion'

const MotionButton = motion(Button)

const Distribution = () => {

  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <div>
      <Heading>Distribution</Heading>
      <MotionButton
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        variant='outline'
        onClick={() => (modalOpen ? close() : open())}
      >
        Modal
      </MotionButton>
    </div>
  )
}

export default Distribution