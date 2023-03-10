import Home from "./pages/Home";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

let newArray = JSON.parse(localStorage.getItem("todoArray"))
  ? JSON.parse(localStorage.getItem("todoArray"))
  : [];

let modeLoc = JSON.parse(localStorage.getItem("modeSite"))
  ? JSON.parse(localStorage.getItem("modeSite"))
  : "false";

const reducer = (state = { myData: newArray, mode: modeLoc }, action) => {
  switch (action.type) {
    case "ADDITEM":
      return { ...state, myData: [...action.payload] };
    case "MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Home />;
    </Provider>
  );
}

export default App;
