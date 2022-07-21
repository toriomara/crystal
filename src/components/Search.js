import React, { useState } from 'react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Icon,
  Button,
  Flex,
  FormControl,
  Input,
  Tooltip,
  InputLeftElement,
  InputGroup,
  HStack,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';

export const SearchBlock = () => {
  const [value, setValue] = useState('');
  const handleReset = () => setValue('');

  return (
    <Flex>
      <FormControl>
        <InputGroup justifyContent='space-between'>
          <SearchIcon
            fontSize='22'
            color={useColorModeValue('brand.50', 'brand.200')}
            display='flex'
            alignSelf='center'
            justifySelf='center'
            mx={3}
          />
          <Input
            justifySelf='start'
            variant='unstyled'
            //size={['sm', 'lg']}
            size='lg'
            placeholder='Поиск'
            //_focus='false'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Tooltip label='Очистить' aria-label='clear'>
            <CloseIcon
              fontSize='12'
              color={useColorModeValue('brand.50', 'brand.200')}
              display='flex'
              alignSelf='center'
              justifySelf='end'
              mx={3}
              onClick={handleReset}
            />
          </Tooltip>
        </InputGroup>
      </FormControl>
    </Flex>
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
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(15deg)'
        />
        <ModalContent p={4}>
          <SearchBlock />
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default SearchBar;
