import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Heading,
  Text,
  Box,
  Flex,
  AspectRatio,
  Skeleton,
  GridItem,
  SimpleGrid,
  Grid,
  useColorModeValue,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import {
  FaFacebookF,
  FaVk,
  FaTelegramPlane,
  FaWhatsapp,
  FaViber,
  FaTwitter,
} from 'react-icons/fa';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from 'react-share';
import { AiOutlineMail } from 'react-icons/ai';
import ShareBlock from '../ShareBlock/ShareBlock';

const ArticleItem = ({ article }) => {
  const { id, date, title, image, name } = article;

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const iconColor = useColorModeValue('blackAlpha.700', 'whiteAlpha.600');
  const hoverColor = useColorModeValue('brand.100', 'brand.200');
  const bgColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.200');

  return (
    <Box onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
      <SimpleGrid
        minH={[310, 390, 350, 395, 360, 370]}
        alignContent='space-between'
        //gColor={bgColor}
      >
        <GridItem>
          <Link href='/article/[id]' as={`/article/${id}`} _hover={hoverColor}>
            <a>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={image}
                  alt={name}
                  layout='fill'
                  objectFit='cover'
                  rounded={4}
                  fallback={<Skeleton />}
                />
              </AspectRatio>
              <Heading
                variant='h6'
                my={4}
                _hover={{
                  color: { hoverColor },
                }}
              >
                {title}
              </Heading>
            </a>
          </Link>
          <Text fontSize={16}>{date}</Text>
        </GridItem>
        {isHovering && (
          <GridItem>
            <ShareBlock
              id={id}
              article={article}
              w={'70%'}
              wrap={Flex}
              justifyContent={'space-between'}
            />
          </GridItem>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default ArticleItem;
