import {AnimatePresence, motion} from 'framer-motion'
import {IconButton, useColorMode, useColorModeValue} from '@chakra-ui/react'
import {SunIcon} from '@chakra-ui/icons'
import {FaMoon} from 'react-icons/fa'

const ThemeToggleButton = () => {
  const {toggleColorMode} = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{display: 'inline-block'}}
        key={useColorModeValue('light', 'dark')}
        initial={{y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        transition={{duration: 0.2}}
      >
        <IconButton
          variant='none'
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('white', 'white')}
          icon={useColorModeValue(<FaMoon/>, <SunIcon/>)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
