import React, {useState} from 'react'
import {Button, Heading} from '@chakra-ui/react'
import {AnimatePresence, motion} from 'framer-motion'
import Modal from '../components/Modal/index'

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
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplect={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
      </AnimatePresence>
    </div>
  )
}

export default Distribution