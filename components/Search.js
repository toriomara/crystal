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

const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue("brand.100", "brand.200");
  const iconColor = useColorModeValue("white", "brand.200");
  
  return (
    <Flex>
      <Button variant="none" onClick={onOpen}>
        <SearchIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={4}>
          <FormControl>
            <HStack spacing={0}>
              <Input
                variant="outline"
                placeholder="Поиск"
                borderRadius={"5px 0 0 5px"}
              />
              <Button borderRadius={"0 5px 5px 0"} color='white' bgColor={bgColor}>
                <Icon as={SearchIcon}></Icon>
              </Button>
            </HStack>
          </FormControl>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default SearchBar;
