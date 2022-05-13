import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { useColorModeValue } from '@chakra-ui/react';

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

export const StyledTab = styled.button`
  display: flex;
  width: 100%;
  padding: 10px 0px;
  font-size: 0.9rem;
  font-weight: 500;
  border: none;
  cursor: ${(p) => (p.active ? 'default' : 'pointer')};
  color: ${(p) =>
    useColorModeValue(
      p.active ? '#D2202F' : 'black',
      p.active ? '#00BBFF' : '#E2E8F0'
    )};
`;

export const TabSlider = styled.div`
  height: ${(props) => `${props.height}px`};
  width: 4px;
  border-radius: 1px;
  background-color: ${(p) => useColorModeValue('#D2202F', '#00BBFF')};
  transition: 0.3s;
  transform: ${(props) => `translateY(${props.height * props.index}px)`};
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? 'grid' : 'none')};
  flex-direction: column;
  padding: 10px 25px;
  justify-content: start;
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
