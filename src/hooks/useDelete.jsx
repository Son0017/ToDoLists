import { useSelector, useDispatch } from "react-redux";

function useDelete() {
  const myArray = useSelector((state) => state.myData);
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    let newArray = myArray.filter((item) => item.id !== id);
    localStorage.setItem("todoArray", JSON.stringify([...newArray]));
    dispatch({
      type: "ADDITEM",
      payload: JSON.parse(localStorage.getItem("todoArray"))
        ? JSON.parse(localStorage.getItem("todoArray"))
        : [],
    });
  };

  const clearCompleted = () => {
    let newArray = myArray.filter((item) => item.completed !== true);
    localStorage.setItem("todoArray", JSON.stringify([...newArray]));
    dispatch({
      type: "ADDITEM",
      payload: JSON.parse(localStorage.getItem("todoArray"))
        ? JSON.parse(localStorage.getItem("todoArray"))
        : [],
    });
  };
  return { deleteItem, clearCompleted };
}

export default useDelete;
