import React from "react";
import { articles } from "../../data/newsData";
import { Text, Box, Link } from "@chakra-ui/react";

const RandomArticles = () => {
  const rnd = Math.ceil(Math.random() * articles.length);

  const title = articles.find(findRnd).title;
  function findRnd(article) {
    return article.id == rnd;
  }

  return (
    <Box>
      <Link href="">1. {title}</Link>
    </Box>
  );
};

export default RandomArticles;
