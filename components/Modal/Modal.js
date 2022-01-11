import React, {useState} from 'react'
import styled from '@emotion/styled'
import {AspectRatio, Box, Button, Flex} from '@chakra-ui/react'

const Wrapper = styled(Flex)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0,5);
  z-index: 1;
`

const ModalContent = styled(Box)`
  width: 880px;
  height: 500px;
  background-color: #0070f3;
`

const Modal = ({setIsOpen}) => {

  const handleClick = () => {
    setIsOpen(!setIsOpen)
  }

  return (
    <Wrapper>
      <ModalContent>
        <h1>Modal Content</h1>
        <Button onClick={handleClick}>Close</Button>
      </ModalContent>
    </Wrapper>
  );
};

export default Modal;
