const TodoReducer = (state = [] , action) => {
  let { type , payload } = action;

  switch (type) {
    case "ADD-TODO":
      return [...state , payload];

      default :
      return state ;
  }
};

export default TodoReducer;
