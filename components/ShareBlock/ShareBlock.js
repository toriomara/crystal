import React from "react";
import { Flex, Box, Icon, Grid, useColorModeValue } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaVk,
  FaTelegramPlane,
  FaWhatsapp,
  FaViber,
  FaTwitter,
} from "react-icons/fa";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import { AiOutlineMail } from "react-icons/ai";

const ShareBlock = (props) => {
  const { id } = props;
  const shareUrl = `https://crystal-three.vercel.app/article/${id}`;
  const iconColor = useColorModeValue("blackAlpha.700", "whiteAlpha.600");

  return (
    <props.wrap gap={props.gap} color={iconColor}>
      <FacebookShareButton url={shareUrl} p={100}>
        <Icon
        m={100}
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
      <TwitterShareButton url={shareUrl}>
        <Icon
          as={FaTwitter}
          fontSize={20}
          cursor="pointer"
          aria-label="Twitter"
          _hover={{
            color: useColorModeValue("brand.100", "brand.200"),
            transform: "scale(1.5)",
            transition: ".2s",
          }}
        />
      </TwitterShareButton>
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
      <EmailShareButton url={shareUrl}>
        <Icon
          as={AiOutlineMail}
          fontSize={20}
          cursor="pointer"
          aria-label="Email"
          _hover={{
            color: useColorModeValue("brand.100", "brand.200"),
            transform: "scale(1.5)",
            transition: ".2s",
          }}
        />
      </EmailShareButton>
    </props.wrap>
  );
};

export default ShareBlock;
