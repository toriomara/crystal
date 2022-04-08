import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Icon,
  Button,
  Flex,
  FormControl,
  Input,
  HStack,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";

export const SearchBlock = (props) => {
  const bgColor = useColorModeValue("brand.100", "brand.200");
  const iconColor = useColorModeValue("white", "black");
  return (
    <FormControl>
      <HStack spacing={0}>
        <Input
          size={props.size}
          variant="outline"
          placeholder="Поиск"
          borderRadius={"5 0 0 5"}
        />
        <Button
          size={props.size}
          borderRadius={"0 3px 3px 0"}
          color={iconColor}
          bgColor={bgColor}
        >
          <Icon as={SearchIcon} size={props.size}></Icon>
        </Button>
      </HStack>
    </FormControl>
  );
};

const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Button variant="none" onClick={onOpen}>
        <SearchIcon />
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
