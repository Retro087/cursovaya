import React, { useEffect, useState } from "react";
import PayList from "../../components/pay-list";
import PayForm from "../../components/pay-form";

const Pay = (props) => {
  const [list, setList] = useState([]);
  //props.menu.forEach(i => {
  // if(props.selected.has())
  //})

  return (
    <div>
      <PayForm />
    </div>
  );
};

export default Pay;
