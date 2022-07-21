import { AnimatePresence, motion } from 'framer-motion';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import { BsMoon } from 'react-icons/bs';
import { Tooltip } from '@chakra-ui/react';

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Tooltip rounded={4} label='Hello!'>
          <IconButton
            variant='none'
            aria-label='Toggle theme'
            color={useColorModeValue('black', 'yellow.400')}
            icon={useColorModeValue(<BsMoon />, <SunIcon />)}
            onClick={toggleColorMode}
            fontSize={20}
            px={{
              base: 'none',
              sm: '1',
              md: '2',
            }}
          />
        </Tooltip>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
