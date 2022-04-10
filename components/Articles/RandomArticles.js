// import React from "react";
// import { articles } from "../../data/newsData";
// import { Text } from "@chakra-ui/react";

// const RandomArticles = () => {
//   let rnd = Math.ceil(Math.random() * articles.length);
//   let articleTitle = articles.find((el) => el.id === rnd);
//   console.log(articleTitle);

//   return <Text>{articleTitle}</Text>;
// };

// export default RandomArticles;

import React from "react";
import { articles } from "../../data/newsData";
import { Text } from "@chakra-ui/react";

const RandomArticles = () => {
  //const rnd = Math.ceil(Math.random() * articles.length);

  const title = articles.find(findRnd)
  function findRnd(article) {
    return article.id === Math.ceil(Math.random() * articles.length);
  }

  return <Text>{title}</Text>;
};

export default RandomArticles;
