import React, { useEffect, useState } from "react";
import PayList from "../../components/pay-list";
import PayForm from "../../components/pay-form";
import { Navigate } from "react-router";
import Final from "../../components/final";

const Pay = (props) => {
  const [list, setList] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [curier, setCurier] = useState({});
  useEffect(() => {
    let newArr = props.selected.map((i) => {
      if (props.menu.find((el) => el.id_menu === i) !== -1) {
        return props.menu.find((el) => el.id_menu === i);
      }
    });
    setList(newArr);
  }, []);

  async function addOrder(
    familia,
    name,
    secName,
    city,
    street,
    house,
    num,
    flat,
    total_cost
  ) {
    await fetch("/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        familia,
        name,
        secName,
        city,
        street,
        house,
        num,
        flat,
        selected: props.selected,
        total_cost,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setFetched(true);
        setCurier(...res.data);
      });
  }

  function reset() {
    setFetched(false);
    setCurier({});
    props.setSelected([]);
    return <Navigate to="/" />;
  }

  return (
    <>
      {fetched ? (
        <Final
          reset={reset}
          curier={curier}
          setCurier={setCurier}
          setFetched={setFetched}
        />
      ) : (
        <PayForm selected={props.selected} addOrder={addOrder} list={list} />
      )}
    </>
  );
};

export default Pay;
