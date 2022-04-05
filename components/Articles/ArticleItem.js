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
import {
  FaFacebookF,
  FaVk,
  FaTelegramPlane,
  FaWhatsapp,
  FaViber,
} from "react-icons/fa";
import {
  FacebookShareButton,
  WhatsappIcon,
  FacebookIcon,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
} from "react-share";

const ArticleItem = ({ article }) => {
  const { id, date, title, image, name } = article;
  const shareUrl = `https://crystal-three.vercel.app/article/${id}`;
  const iconColor = useColorModeValue("blackAlpha.700", "whiteAlpha.600");
  const hoverColor = useColorModeValue("brand.100", "brand.200");

  return (
    <Box>
      <SimpleGrid
        minH={[310, 390, 350, 390, 360, 370]}
        alignContent="space-between"
      >
        <GridItem>
          <Link href="/article/[id]" as={`/article/${id}`}>
            <a>
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
              <Heading
                variant="h6"
                my={4}
                _hover={{
                  color: { hoverColor },
                }}
              >
                {title}
              </Heading>
            </a>
          </Link>
          <Text fontSize={14}>{date}</Text>
        </GridItem>
        <GridItem ml={0} pl={0}>
          <Flex columnGap={4} color={iconColor} pb={2}>
            <FacebookShareButton url={shareUrl}>
              <Icon
                as={FaFacebookF}
                fontSize={20}
                cursor="pointer"
                aria-label="Share"
                _hover={{
                  color: useColorModeValue("brand.100", "brand.200"),
                  transform: "scale(1.5)",
                  transition: ".2s",
                }}
              />
            </FacebookShareButton>
            <VKShareButton url={shareUrl}>
              <Icon
                as={FaVk}
                fontSize={20}
                cursor="pointer"
                aria-label="Vk"
                _hover={{
                  color: useColorModeValue("brand.100", "brand.200"),
                  transform: "scale(1.5)",
                  transition: ".2s",
                }}
              />
            </VKShareButton>
            <TelegramShareButton url={shareUrl}>
              <Icon
                as={FaTelegramPlane}
                fontSize={20}
                cursor="pointer"
                aria-label="Telegram"
                _hover={{
                  color: useColorModeValue("brand.100", "brand.200"),
                  transform: "scale(1.5)",
                  transition: ".2s",
                }}
              />
            </TelegramShareButton>
            <WhatsappShareButton url={shareUrl}>
              <Icon
                as={FaWhatsapp}
                fontSize={20}
                cursor="pointer"
                aria-label="Whatsapp"
                _hover={{
                  color: useColorModeValue("brand.100", "brand.200"),
                  transform: "scale(1.5)",
                  transition: ".2s",
                }}
              />
            </WhatsappShareButton>
            <ViberShareButton url={shareUrl}>
              <Icon
                as={FaViber}
                fontSize={20}
                cursor="pointer"
                aria-label="Viber"
                _hover={{
                  color: useColorModeValue("brand.100", "brand.200"),
                  transform: "scale(1.5)",
                  transition: ".2s",
                }}
              />
            </ViberShareButton>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default ArticleItem;
