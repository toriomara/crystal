// https://www.youtube.com/watch?v=PAbmMD-OWlI
// https://codesandbox.io/s/tabs-component-forked-rvlncc?file=/src/components/tabs/tabs.js


import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StylizedTab = styled.button`
  color: #fff;
  width: 100%;
  padding: 20px 0px;
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  cursor: ${(p) => (p.disabled ? 'default' : 'pointer')};
  color: ${(props) => (props.disabled ? 'black' : '#00BBFF')};
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? 'flex' : 'none')};
  font-size: 4rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const TabsHolder = styled.div`
  display: flex;
  /* can be used to stack them vertically by using column*/
  flex-direction: row;
`;

export const inactiveTab = {
  opacity: 0.65,
};

// width, index,
/**
 * [0] [1] [2] ...
 * W * index
 *
 */

export const TabSlider = styled.div`
  width: ${(props) => `${props.width}px`};
  height: 4px;
  background-color: #00BBFF;
  transition: 0.2s;
  transform: ${(props) => `translateX(${props.width * props.index}px)`};
`;

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
