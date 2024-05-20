import React from "react";
import PayItem from "../pay-item";
import s from "./style.module.css";
import { Link } from "react-router-dom";
const PayList = (props) => {
  if (props.list.length < 1) {
    return <div></div>;
  }

  return (
    <div className={s.list}>
      {props.list.map((item, id) => {
        return <PayItem key={id} item={item} />;
      })}
    </div>
  );
};

export default PayList;
