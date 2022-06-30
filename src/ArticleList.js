import React from "react";
import Article from "./Article";

function ArticleList({ data }) {
  return data.map((art) => <Article art={art} />);
}

export default ArticleList;
