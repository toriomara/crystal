import React, { useEffect, useRef } from "react";
import {
  Flex,
  AspectRatio,
  Skeleton,
  Box,
  Icon,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import useClickOutside from "../../utils/useClickOutside";
import ContactMap from "./../ContactsPage/ContactMap";

const MapModal = ({ setIsOpen }) => {
  const ref = useRef(null);
  useClickOutside(ref, () => setIsOpen(false));

  const handleClick = () => {
    setIsOpen(!setIsOpen);
  };

  // Don't scroll
  useEffect(() => {
    if (setIsOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [setIsOpen]);

  // key "ESCAPE"
  const closeOnEventEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      setIsOpen(!setIsOpen);
    }
  };

  // CLEANER
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEventEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEventEscapeKeyDown);
    };
  });

  return (
    <Flex
      position="fixed"
      right="0"
      bottom="0"
      left="0"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
      background="rgba(0, 0, 0, 0.45)"
      zIndex="2"
      backdropFilter="blur(5px)"
    >
      <Flex
        ref={ref}
        m={4}
        justifyContent="center"
        alignItems="center"
        boxShadow="xl"
        rounded={4}
      >
        <Box
          bgColor="white"
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
        >
          <Icon
            position="relative"
            top="0"
            right="0"
            as={CloseIcon}
            onClick={handleClick}
          />
          <AspectRatio ratio={21 / 9}>
            <iframe
              w="container.xl"
              fallback={<Skeleton />}
              zIndex="2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2213.8748382895697!2d44.52841130989059!3d48.710150039659084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411acb2d69616541%3A0x7ac494b9e736bc95!2z0KTQo9Cb0JvQldCg0JXQnSwg0L3QsNGD0YfQvdC-LdC_0YDQvtC40LfQstC-0LTRgdGC0LLQtdC90L3QvtC1INC-0LHRitC10LTQuNC90LXQvdC40LU!5e0!3m2!1sru!2sru!4v1641932515780!5m2!1sru!2sru"
            />
          </AspectRatio>
        </Box>
      </Flex>
    </Flex>
  );
};

export default MapModal;
