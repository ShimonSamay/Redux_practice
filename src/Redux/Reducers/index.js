import { combineReducers } from "redux";
import TodoReducer from "./Todo-reducer";

const globalReducer = combineReducers({
  todos: TodoReducer 
})

export default globalReducer ;