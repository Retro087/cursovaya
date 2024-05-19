import { Route, Routes } from "react-router";
import Article from "../../front/src/containers/articles";
import Pay from "./containers/pay";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState([]);
  const [selected, setSelected] = useState([]);

  async function getMenu() {
    console.log("reset");
    await fetch("/menu")
      .then((res) => res.json())
      .then((res) => {
        setMenu(res.data);
      });
  }

  async function addSelect(id) {
    setSelected([...selected, id]);
    debugger;
  }
  async function removeSelect(id) {
    setSelected(selected.filter((i) => i !== id));
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Article
              getMenu={getMenu}
              addSelect={addSelect}
              removeSelect={removeSelect}
              list={menu}
            />
          }
        />
        <Route path="/pay" element={<Pay menu={menu} selected={selected} />} />
      </Routes>
    </>
  );
}

export default App;
