import React, { useCallback, useEffect, useState } from "react";
import ArticleList from "../../components/article-list";

const Article = (props) => {
  useEffect(() => {
    props.getMenu();
  }, []);

  return <ArticleList {...props} />;
};

export default Article;
