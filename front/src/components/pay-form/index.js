import React from "react";
import PayList from "../pay-list";
import s from "./style.module.css";
import { getSum } from "../../utils/getSum";
import { Link } from "react-router-dom";
const PayForm = (props) => {
  return (
    <>
      <div className={s.form}>
        <PayList {...props} />
        <div className={s.itog}>Итого: {getSum(props.list)}</div>
        <div className={s.btn_wrap}>
          <Link className={s.link} to="/pay">
            Подтвердить
          </Link>
        </div>
      </div>
    </>
  );
};

export default PayForm;
