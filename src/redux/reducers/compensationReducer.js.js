const compensationReducer = (state = 0, action) => {
    switch (action.type) {
      case 'SET_COMPENSATION':
        return action.payload;
      default:
          return state;
    }
  };
  
  export default compensationReducer;