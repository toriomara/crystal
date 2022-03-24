import React from 'react';
import {SearchIcon} from "@chakra-ui/icons";
import {Button, Flex, Input, Stack, useDisclosure} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react'

const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex>
      <Button
        variant='none'
        onClick={onOpen}
      >
        <SearchIcon/>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={4}>
          <Stack spacing={3}>
            <Input variant='outline' placeholder='Поиск' />
          </Stack>

        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default SearchBar;
