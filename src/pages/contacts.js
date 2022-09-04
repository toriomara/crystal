import { Box, Heading } from '@chakra-ui/react';
import { ContactsHead } from '../components/ContactsPage/ContactsHead';
import { ContactMap } from '../components/ContactsPage/ContactMap';
import { ContactDiler } from '../components/ContactsPage/ContactDiler';
import { Meta } from '../components/Meta';
import { motion } from 'framer-motion';
import ContactCard from '../components/ContactsPage/ContactCard';
import { ContactRequest } from '../components/ContactsPage/ContactRequest';

const Contacts = () => {
  return (
    <Box>
      <Meta title='Contacts' />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Heading variant='pageTitle'>Контакты</Heading>
        <ContactsHead />
        <ContactDiler />
        <ContactMap />
        {/* <Box border='1px solid #EDF2F7' p={4} rounded={4}>
        <AspectRatio ratio={16 / 9} borderRadius={4}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2213.8748382895697!2d44.52841130989059!3d48.710150039659084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411acb2d69616541%3A0x7ac494b9e736bc95!2z0KTQo9Cb0JvQldCg0JXQnSwg0L3QsNGD0YfQvdC-LdC_0YDQvtC40LfQstC-0LTRgdGC0LLQtdC90L3QvtC1INC-0LHRitC10LTQuNC90LXQvdC40LU!5e0!3m2!1sru!2sru!4v1641906649031!5m2!1sru!2sru"
            width="800" height="600" style="border:0;" allowFullScreen="" loading="lazy"/>
        </AspectRatio>
        </Box>
        <ContactRequest /> 
        <ContactCard/> */}
      </motion.div>
    </Box>
  );
};

export default Contacts;
