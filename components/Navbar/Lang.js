import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {IoLanguageOutline} from 'react-icons/io5'

export const Lang = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        colorScheme="black"
        variant="ghost"
      >
        <IoLanguageOutline fontSize={20}/>
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

// import {
//   FormControl,
//   FormLabel,
//   Select,
// } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import {IoLanguageOutline} from 'react-icons/io5'

// export const Lang = () => {
//   return (
//     <FormControl>
//       <FormLabel><IoLanguageOutline fontSize={20}/></FormLabel>
//       <Select>
//         <option value="en">EN</option>
//         <option value="de">DE</option>
//         <option value="cz">CZ</option>
//         <option value="sp">SP</option>
//         <option value="ar">AR</option>
//       </Select>
//     </FormControl>
//   );
//};
