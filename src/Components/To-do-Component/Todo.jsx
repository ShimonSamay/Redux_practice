import React, { useState } from "react";
import { connect } from "react-redux";
import { AddToDo } from "../../Redux/Actions/ToDo-actions";

export const ToDo = (props) => {
    let {todos , AddToDo} = props ;

    let [text , setText] = useState("") ;

    let updateText = (e) => {
    setText(e.target.value) ;
    }

    return (
        <>
        <p>To Do List</p>
        {todos.map((todo , index) => 
        <p key={index}>{todo.title}</p>
        )}
        <input onChange={updateText}></input><br></br>
        <button onClick={() => AddToDo(text)}>Add</button>
        </>
    )
}

export default connect((state) => ({todos:state.todos}) , {AddToDo})(ToDo) ;