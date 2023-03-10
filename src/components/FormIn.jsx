import React, { useEffect, useState } from "react";
import { FormStyled, BtnStyled } from "../pages/homeStyle";
import imgClicked from "../../images/cliced.svg";
import { useSelector, useDispatch } from "react-redux";

function FormIn() {
  const [listItem, setListItem] = useState({
    id: Math.random(),
    name: "",
    clicked: false,
    completed: false,
    addTime: "",
  });
  const mode = useSelector((state) => state.mode);
  const myArray = useSelector((state) => state.myData);
  const dispatch = useDispatch();
  // console.log(myArray);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("todoArray", JSON.stringify([...myArray, listItem]));
    setListItem({
      id: Math.random(),
      name: "",
      clicked: false,
      completed: false,
      addTime: "",
    });
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("todoArray"))) {
      dispatch({
        type: "ADDITEM",
        payload: JSON.parse(localStorage.getItem("todoArray")),
      });
    }
  }, [listItem]);

  return (
    <FormStyled onSubmit={handleSubmit} mode={mode}>
      <BtnStyled
        onClick={() => {
          setListItem({ ...listItem, clicked: !listItem.clicked });
        }}
        mode={mode}
      >
        {listItem.clicked && <img className="img" src={imgClicked} alt="" />}
      </BtnStyled>
      <input
        type="text"
        onChange={(e) => {
          setListItem({ ...listItem, name: e.target.value });
        }}
        value={listItem.name}
        placeholder="Create new item"
      />
    </FormStyled>
  );
}

export default FormIn;
