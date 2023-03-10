import React from "react";
import bg from "../../images/bg-main.jpg";
import FormIn from "../components/FormIn";
import ToDoList from "../components/ToDoList";
import { Nav, Main, TitleStyled } from "./homeStyle";
import { useDispatch, useSelector } from "react-redux";
import Moon from "../../images/moon.svg";
import Son from "../../images/son.svg";

function Home() {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const handleMode = () => {
    if (mode === "false") {
      localStorage.setItem("modeSite", JSON.stringify("true"));
      dispatch({ type: "MODE", payload: "true" });
    } else if (mode === "true") {
      localStorage.setItem("modeSite", JSON.stringify("false"));
      dispatch({ type: "MODE", payload: "false" });
    }
  };

  return (
    <Nav mode={mode}>
      <img src={bg} alt="" />
      <Main>
        <TitleStyled>
          <span>TODO</span>
          <img
            className="icons"
            onClick={handleMode}
            src={mode === "true" ? `${Moon}` : `${Son}`}
            alt=""
          />
        </TitleStyled>
        <FormIn />
        <ToDoList />
      </Main>
    </Nav>
  );
}

export default Home;
