import React from "react";
import ArticleItem from "../../../../front/src/components/article-item";
import s from "./style.module.css";
import { Link } from "react-router-dom";
const ArticleList = (props) => {
  if (props.list.length < 1) {
    return <div></div>;
  }

  return (
    <div className={s.list}>
      {props.list.map((item, id) => {
        return <ArticleItem {...props} key={id} item={item} />;
      })}
      <div className={s.btn_wrap}>
        <Link className={s.link} to="/pay">
          Оформить заказ
        </Link>
      </div>
    </div>
  );
};

export default ArticleList;
