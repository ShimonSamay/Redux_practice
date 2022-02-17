
export const AddToDo = (text) => (dispatch) => {
  let newToDo = {title:text , hasDone:false} ;
  dispatch({type:"ADD-TODO" , payload:newToDo}) ;
}

