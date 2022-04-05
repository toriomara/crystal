import Link from "next/link";
import { useState, useEffect } from "react";
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

const ArticleItem = ({ article }) => {
  const { id, date, title, image, name } = article;
  const iconColor = useColorModeValue("blackAlpha.700", "whiteAlpha.600");

  return (
    <Box>
      <SimpleGrid
                //minH={[400, 350, 400]}
        minH={[310, 390, 350, 390, 360, 370]}
        alignContent="space-between"
      >
        <GridItem>
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
              <Heading variant="h6" fontSize={16} fontWeight={400} my={4}>
                {title}
              </Heading>
            </a>
          </Link>
          <Text fontSize={14}>{date}</Text>
        </GridItem>
        <GridItem>
          <Flex columnGap={4} color={iconColor} pb={2}>
            <Icon
              as={IoShareSocialOutline}
              fontSize={20}
              cursor="pointer"
              aria-label="Share"
              _hover={{
                color: "brand.200",
              }}
            />
            <Icon
              as={FaFacebookF}
              fontSize={20}
              cursor="pointer"
              aria-label="Share"
            />
            <Icon as={FaVk} fontSize={20} cursor="pointer" aria-label="Vk" />
            <Icon
              as={FaTelegramPlane}
              fontSize={20}
              cursor="pointer"
              aria-label="Telegram"
            />
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default ArticleItem;
