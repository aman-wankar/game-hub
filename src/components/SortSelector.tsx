import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <Box paddingX='5px'>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By: Relevance
        </MenuButton>
        <MenuList>
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Date Addded</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Release Date</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>Average Rating</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortSelector;