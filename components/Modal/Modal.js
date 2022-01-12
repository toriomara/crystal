import React, {useEffect, useRef, useState} from 'react'
import styled from '@emotion/styled'
import {AspectRatio, Box, Button, Flex} from '@chakra-ui/react'
import useClickOutside from "../../utils/useClickOutside";

const Wrapper = styled(Flex)`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0, 0.7);
  z-index: 1;
`

const ModalContent = styled(Box)`
  width: 880px;
  height: 500px;
  
  & iframe {
    width: 98%;
    height: 98%;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
`

const Modal = ({setIsOpen}) => {

  const ref = useRef(null)
  useClickOutside(ref, () => setIsOpen(false))

  const handleClick = () => {
    setIsOpen(!setIsOpen)
  }

  const closeOnEventEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      setIsOpen(!setIsOpen)
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEventEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEventEscapeKeyDown)
    }
  })

  return (
    <Wrapper >
      <ModalContent ref={ref}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2213.8748382895697!2d44.52841130989059!3d48.710150039659084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411acb2d69616541%3A0x7ac494b9e736bc95!2z0KTQo9Cb0JvQldCg0JXQnSwg0L3QsNGD0YfQvdC-LdC_0YDQvtC40LfQstC-0LTRgdGC0LLQtdC90L3QvtC1INC-0LHRitC10LTQuNC90LXQvdC40LU!5e0!3m2!1sru!2sru!4v1641932515780!5m2!1sru!2sru"
          width="800" height="600" />
        <Button onClick={handleClick}>Close</Button>
      </ModalContent>
    </Wrapper>
  )
}

export default Modal
