import React from "react";
import s from "./style.module.css";
const ClientForm = (props) => {
  return (
    <div>
      <form className={s.wrap}>
        <input
          value={props.familia}
          onChange={(e) => props.setFamilia(e.target.value)}
          placeholder="Фамилия"
          className={s.input}
        />
        <input
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
          placeholder="Имя"
          className={s.input}
        />
        <input
          value={props.secName}
          onChange={(e) => props.setSecName(e.target.value)}
          placeholder="Отчество"
          className={s.input}
        />
        <input
          value={props.city}
          onChange={(e) => props.setCity(e.target.value)}
          placeholder="Город"
          className={s.input}
        />
        <input
          value={props.street}
          onChange={(e) => props.setStreet(e.target.value)}
          placeholder="Улица"
          className={s.input}
        />
        <input
          value={props.house}
          onChange={(e) => props.setHouse(e.target.value)}
          placeholder="Дом"
          className={s.input}
        />
        <input
          value={props.num}
          onChange={(e) => props.setNum(e.target.value)}
          placeholder="Номер"
          className={s.input}
        />
        <input
          value={props.flat}
          onChange={(e) => props.setFlat(e.target.value)}
          placeholder="Квартира"
          className={s.input}
        />
      </form>
    </div>
  );
};

export default ClientForm;
