import React from "react";
import { articles } from "../../data/newsData";
import { Text, Box } from "@chakra-ui/react";

const RandomArticles = () => {
  const rnd = Math.ceil(Math.random() * articles.length);

  const title = articles.find(findRnd).title;
  function findRnd(article) {
    return article.id == rnd;
  }

  return (
    <Box>
      <Text>1. {title}</Text>
    </Box>
  );
};

export default RandomArticles;
