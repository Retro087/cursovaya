import React, { useState } from "react";
import PayList from "../pay-list";
import s from "./style.module.css";
import { getSum } from "../../utils/getSum";
import { Link, Navigate } from "react-router-dom";
import ClientForm from "../client-form";
const PayForm = (props) => {
  const [name, setName] = useState("");
  const [familia, setFamilia] = useState("");
  const [secName, setSecName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [num, setNum] = useState("");
  const [flat, setFlat] = useState("");

  if (!props.selected.length) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className={s.form}>
        <PayList {...props} />
        <div className={s.itog}>Итого: {getSum(props.list)}</div>
        <ClientForm
          name={name}
          setFlat={setFlat}
          flat={flat}
          setNum={setNum}
          num={num}
          setHouse={setHouse}
          house={house}
          setStreet={setStreet}
          street={street}
          setCity={setCity}
          city={city}
          setSecName={setSecName}
          secName={secName}
          setName={setName}
          familia={familia}
          setFamilia={setFamilia}
        />
        <div className={s.btn_wrap}>
          <button
            className={s.btn}
            onClick={() =>
              props.addOrder(
                familia,
                name,
                secName,
                city,
                street,
                house,
                num,
                flat,
                getSum(props.list)
              )
            }
          >
            Подтвердить
          </button>
        </div>
      </div>
    </>
  );
};

export default PayForm;
