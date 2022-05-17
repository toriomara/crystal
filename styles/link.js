import NextLink from 'next/link';
import { Link, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Item = styled(Link)`
  position: relative;
  text-decoration: none;

  ::after {
    display: inline-block;
    position: absolute;
    content: '';
    width: 100%;
    left: 0;
    bottom: -4px;
    height: 3px;
    border-radius: 10%;
    background-color: ${(p) => useColorModeValue('#D2202F', '#00BBFF')};
    transition: transform 0.2s ease-in-out;
    transform-origin: bottom;
    transform: scaleX(0);
  }

  :hover::after {
    transform: scaleX(1);
  }

  :hover {
    color: ${(p) => useColorModeValue('#D2202F', '#00BBFF')};
    text-decoration: none;
  }
`;

export const SimpleLink = ({ href, children, target, ...props }) => {
  return (
    <NextLink href={href} passHref props>
      <Item>{children}</Item>
    </NextLink>
  );
};

const MovingItem = styled(Link)`
  position: relative;
  display: flex;
  line-height: 1.4;
  text-decoration: none;
  transition: 0.3s ease;
  color: ${(p) => useColorModeValue('gray.700', 'gray.200')};
  left: 0;

  :hover {
    text-decoration: none;
    font-weight: 500;
    transition: 200ms ease-in;
    left: 6px;
    color: ${(p) => useColorModeValue('#D2202F', '#00BBFF')};
  }
`;

export const MovingLink = ({ href, children, target, ...props }) => {
  return (
    <NextLink href={href} passHref props>
      <MovingItem>{children}</MovingItem>
    </NextLink>
  );
};

export const IconItem = styled(Link)`
  margin-top: 2px;
  display: inline-flex;
  color: #4a5568;
  padding: 0 8px 0 0;
  fill: ${(p) => useColorModeValue('#D2202F', '#00BBFF')};
`;