import "./App.css";
import ToDo from "./Components/To-do-Component/Todo";
import store from "./Redux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
      <ToDo />
      </Provider>
    </div>
  );
}

export default App;
