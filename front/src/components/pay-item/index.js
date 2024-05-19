import React from "react";
import s from "./style.module.css";
const PayItem = (props) => {
  return (
    <div className={s.item_wrap}>
      <p>{props.item.name_dish}</p>
      <p>{props.item.structure}</p>
      <p>{props.item.price}</p>
      <p>{props.item.category}</p>
    </div>
  );
};

export default PayItem;
