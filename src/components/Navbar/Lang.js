import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { MdLanguage } from 'react-icons/md';

export const Lang = (props) => {
  return (
    <Menu>
      <MenuButton
        color={props.color}
        as={Button}
        rightIcon={<ChevronDownIcon />}
        colorScheme='black'
        variant='ghost'
        px={{
          base: 'none',
          sm: '1',
          md: '2',
        }}
      >
        <MdLanguage fontSize={20} />
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
