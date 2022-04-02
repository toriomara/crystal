import Link from "next/link";
import {
  Heading,
  Text,
  Box,
  Flex,
  VStack,
  AspectRatio,
  Skeleton,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const ArticleItem = ({ article }) => {
  const { id, date, title, image, name, excerpt } = article;
  return (
    <Flex
      maxW="640px"
      direction={{ base: "column-reverse", md: "row" }}
      width="full"
      p={1}
      justifyContent="space-between"
      position="relative"
    >
      <Flex direction="column" textAlign="left" justifyContent="space-between">
        <VStack spacing={3}>
          <Box>
            <Link href="/article/[id]" as={`/article/${id}`}>
              <a>
                <Heading variant='h4' fontWeight="600"  pb={4}>
                  {title}
                </Heading>
                <Text pb={2}>{date}</Text>

                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    rounded={4}
                    //fallback={<Skeleton />}
                    placeholder="blur"
                  />
                </AspectRatio>
                <Text pt={6}>{excerpt}</Text>
              </a>
            </Link>
          </Box>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default ArticleItem;
