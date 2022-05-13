// https://www.youtube.com/watch?v=PAbmMD-OWlI
// https://codesandbox.io/s/tabs-component-forked-rvlncc?file=/src/components/tabs/tabs.js

import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { useColorModeValue } from '@chakra-ui/react';

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledTab = styled.button`
  width: 100%;
  padding: 20px 0px;
  font-size: 1.25rem;
  border: none;
  cursor: ${(p) => (p.active ? 'default' : 'pointer')};
  color: ${(p) =>
    useColorModeValue(
      p.active ? '#D2202F' : 'black',
      p.active ? '#00BBFF' : '#E2E8F0'
    )};
`;

export const TabsTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TabSlider = styled.div`
  width: ${(props) => `${props.width}px`};
  height: 4px;
  border-radius: 1px;
  background-color: ${(p) => useColorModeValue('#D2202F', '#00BBFF')};
  transition: 0.3s;
  transform: ${(props) => `translateX(${props.width * props.index}px)`};
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? 'grid' : 'none')};
  font-size: 1rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  //justify-content: center;
`;

export const inactiveTab = {
  opacity: 0.65,
};

const inset = keyframes`
  0% {
    -webkit-box-shadow: inset 0 0 0 0 rgba(238, 82, 83, 0);
            box-shadow: inset 0 0 0 0 rgba(238, 82, 83, 0);
  }
  100% {
    -webkit-box-shadow: inset 0 0 14px 0px rgba(238, 82, 83, 0.95);
            box-shadow: inset 0 0 14px 0px rgba(238, 82, 83, 0.95);
  }
`;
