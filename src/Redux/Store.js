import { createStore , compose , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import globalReducer from "./Reducers";

let middlewares = [thunk] ;

const store = createStore (globalReducer , {
   todos:[
       {title:"add mission" , hasDone : false } ,
       {title:"update mission" , hasDone : true } ,
   ]
} ,
compose(applyMiddleware(...middlewares)) 
) 

export default store ;

