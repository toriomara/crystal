import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Icon,
  Button,
  Flex,
  FormControl,
  Input,
  HStack,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';

export const SearchBlock = (props) => {
  const bgColor = useColorModeValue('brand.50', 'brand.50');
  const iconColor = useColorModeValue('white', 'white');
  return (
    <FormControl>
      <HStack spacing={0}>
        <Input
          variant='searchInput'
          size={props.size}
          placeholder='Поиск'
          borderRadius='2px 0 0 2px'
        />
        <Button
          size={props.size}
          borderRadius='0 2px 2px 0'
          color={iconColor}
          bgColor={bgColor}
          variant='primary'
        >
          <Icon as={SearchIcon} size={props.size}></Icon>
        </Button>
      </HStack>
    </FormControl>
  );
};

const SearchBar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Button variant='none' onClick={onOpen} px={props.px}>
        <SearchIcon color={props.color} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={4}>
          <SearchBlock />
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default SearchBar;
