import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const Lang = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        colorScheme="black"
        variant="ghost"
      >
        Lang
      </MenuButton>
      <MenuList>
        <MenuItem>EN</MenuItem>
        <MenuItem>DE</MenuItem>
        <MenuItem>CZ</MenuItem>
        <MenuItem>SP</MenuItem>
        <MenuItem>AR</MenuItem>
      </MenuList>
    </Menu>
  );
};
