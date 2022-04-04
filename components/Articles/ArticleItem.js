import Link from "next/link";
import { useState } from "react";
import {
  ButtonGroup,
  Heading,
  Text,
  Box,
  Flex,
  VStack,
  AspectRatio,
  Skeleton,
  Stack,
  HStack,
  Button,
  Grid,
  GridItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaVk } from "react-icons/fa";

const ShareBlock = () => {
  const iconColor = useColorModeValue("blackAlpha.700", "whiteAlpha.600");
  return (
    <Flex columnGap={4} color={iconColor} pb={6}>
      <Icon
        as={IoShareSocialOutline}
        fontSize={20}
        cursor="pointer"
        aria-label="Share"
        _hover={{
          color: "brand.200",
        }}
      />
      <Icon as={FaFacebookF} fontSize={20} cursor="pointer" aria-label="Share" />
      <Icon as={FaVk} fontSize={20} cursor="pointer" aria-label="Vk" />
      <Icon
        as={FaTelegramPlane}
        fontSize={20}
        cursor="pointer"
        aria-label="Telegram"
      />
    </Flex>
  );
};

const ArticleItem = ({ article }) => {
  const { id, date, title, image, name } = article;

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Box>
      <SimpleGrid
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        minH={[300, 350, 400]}
        alignContent="space-between"
      >
        <GridItem lineHeight="1.1">
          <Link href="/article/[id]" as={`/article/${id}`}>
            <a tabIndex="-1">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={image}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  rounded={4}
                  fallback={<Skeleton />}
                />
              </AspectRatio>
              <Heading variant="h6" fontWeight={500} my={4}>
                {title}
              </Heading>
            </a>
          </Link>
          <Text fontSize={14}>{date}</Text>
        </GridItem>
        <GridItem>{isHovering && <ShareBlock />}</GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default ArticleItem;
