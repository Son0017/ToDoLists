import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/all";
import imgClicked from "../../images/cliced.svg";
import {
  ListStyled,
  ButtonsStyled,
  ListWrapper,
  BtnStyled,
} from "../pages/homeStyle";
import { useSelector, useDispatch } from "react-redux";
import useDelete from "../hooks/useDelete";

function ToDoList() {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState(null);
  const [filterBtn, setFilterBtn] = useState("all");
  const { deleteItem, clearCompleted } = useDelete();
  const myArray = useSelector((state) => state.myData);
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  useEffect(() => {
    setData([...myArray]);
  }, [myArray]);
  const handleComplete = (id) => {
    let newArray = data.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return { ...item };
    });
    localStorage.setItem("todoArray", JSON.stringify([...newArray]));
    dispatch({
      type: "ADDITEM",
      payload: JSON.parse(localStorage.getItem("todoArray"))
        ? JSON.parse(localStorage.getItem("todoArray"))
        : [],
    });
  };
  useEffect(() => {
    setFilter(data);
  }, [data]);
  const handleFilter = (event) => {
    let myNewArray;
    if (filterBtn === "completed" && data) {
      myNewArray = data.filter((item) => item.completed === true);
    } else if (filterBtn === "active" && data) {
      myNewArray = data.filter((item) => item.completed !== true);
      console.log(1);
    } else if (data && filterBtn === "all") {
      myNewArray = [...data];
    }
    setFilter(myNewArray);
  };
  useEffect(() => {
    handleFilter();
  }, [filterBtn, data]);

  return (
    <ListWrapper mode={mode}>
      <ul>
        {filter &&
          filter.map((item) => {
            return (
              <ListStyled key={item.id} mode={mode}>
                <div>
                  <BtnStyled>
                    {item.clicked && (
                      <img className="img" src={imgClicked} alt="" />
                    )}
                  </BtnStyled>
                  <span
                    onClick={() => {
                      handleComplete(item.id);
                    }}
                  >
                    <span className={item.completed ? "completed" : "not"}>
                      {item.name}
                    </span>
                  </span>
                </div>
                <div>
                  <button
                    onClick={() => {
                      deleteItem(item.id);
                    }}
                  >
                    <MdDelete />
                  </button>
                </div>
              </ListStyled>
            );
          })}
      </ul>
      <ButtonsStyled mode={mode}>
        <p>{filter && filter.length} left</p>
        <div>
          <button
            className={
              filterBtn === "all" ? "clicked controlBtn" : "controlBtn"
            }
            onClick={() => {
              setFilterBtn("all");
            }}
          >
            All
          </button>
          <button
            className={
              filterBtn === "active" ? "clicked controlBtn" : "controlBtn"
            }
            onClick={() => {
              setFilterBtn("active");
            }}
          >
            Active
          </button>
          <button
            className={
              filterBtn === "completed" ? "clicked controlBtn" : "controlBtn"
            }
            onClick={() => {
              setFilterBtn("completed");
            }}
          >
            Completed
          </button>
        </div>
        <button onClick={clearCompleted}>Clear complited</button>
      </ButtonsStyled>
    </ListWrapper>
  );
}

export default ToDoList;
