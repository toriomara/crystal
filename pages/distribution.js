import React, { useState } from "react";
import { Button, Heading, Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Subscribe from "../components/Subscribe/Subscribe";

const MotionButton = motion(Button);

const Distribution = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Heading>Distribution</Heading>
      <MotionButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variant="outline"
        onClick={handleClick}
      >
        Modal
      </MotionButton>
      {isOpen && <Subscribe setIsOpen />}
      <Box bg="red.200" w={[250, 300, 400, 500, 800, 1100]}>
        This is a box
      </Box>
    </div>
  );
};

export default Distribution;
