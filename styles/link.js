import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Item = styled(Link)`
  position: relative;

  ::after {
    display: inline-block;
    position: absolute;
    content: "";
    width: 100%;
    left: 0;
    bottom: -4px;
    height: 3px;
    border-radius: 10%;
    background-color: #c53030;
    transition: transform 0.2s ease-in-out;
    transform-origin: bottom;
    transform: scaleX(0);
  }

  :hover::after {
    transform: scaleX(1);
  }

  :hover {
    color: #c53030;
    text-decoration: none;
  }
`;

export const SimpleLink = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Item textDecoration="none">{children}</Item>
    </NextLink>
  );
};
