import { Heading } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Benefits } from '../components/Benefits/Index';
import { Meta } from '../components/Meta';
import { Navbar } from '../components/Navbar/Navbar';

const Documentation = () => {
  return (
    <div>
      <Meta title='News' />
      <Heading variant='pageTitle'>Документация</Heading>
      <motion.div animate={{ rotate: 720 }} transition={{ duration: 2 }}>
        <Benefits />
        <Navbar />
      </motion.div>
    </div>
  );
};

export default Documentation;
