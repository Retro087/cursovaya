import React from "react";
import s from "./style.module.css";
const Final = (props) => {
  return (
    <div>
      <div className={s.wrap}>
        Ваш заказ оформлен. Он будет доставлен в течение 2 часов. Информация о
        курьере:
        <p>Фамилия: {props.curier.familia}</p>
        <p>Имя: {props.curier.first_name}</p>
        <p>Отчество: {props.curier.second_name}</p>
        <p>Номер: {props.curier.num}</p>
        <p>Номер заказа: {props.curier.id_order}</p>
        <button
          onClick={() => {
            props.reset();
          }}
          className={s.btn}
        >
          Вернуться
        </button>
      </div>
    </div>
  );
};

export default Final;
