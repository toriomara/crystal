import Link from "next/link";
import {
  Heading,
  Text,
  Box,
  Flex,
  VStack,
  AspectRatio,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const ArticleItem = ({ article }) => {
  const { id, title, image, name, excerpt } = article;
  return (
    <Flex
      maxW="640px"
      direction={{ base: "column-reverse", md: "row" }}
      width="full"
      p={1}
      justifyContent={"space-between"}
      position={"relative"}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <VStack spacing={3} alignItems="flex-start">
          <Box>
            <Link href="/article/[id]" as={`/article/${id}`}>
              <a>
                <Heading
                  fontSize="3xl"
                  fontWeight="700"
                  alignItems="center"
                  pb={4}
                >
                  {title}
                </Heading>
                <Image src={image} alt={name} layout={'fill'}/>
                <Text>{excerpt}</Text>
              </a>
            </Link>
          </Box>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default ArticleItem;
