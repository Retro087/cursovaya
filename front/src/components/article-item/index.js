import React, { useState } from "react";
import s from "./style.module.css";
const ArticleItem = (props) => {
  return (
    <div>
      <div className={s.item_wrap}>
        <p>{props.item.name_dish}</p>
        <p>{props.item.structure}</p>
        <p>{props.item.price}</p>
        <p>{props.item.category}</p>
        {props.selected.find((i) => i === props.item.id_menu) ? (
          <button onClick={() => props.removeSelect(props.item.id_menu)}>
            Удалить
          </button>
        ) : (
          <button onClick={() => props.addSelect(props.item.id_menu)}>
            Добавить
          </button>
        )}
      </div>
    </div>
  );
};

export default ArticleItem;
