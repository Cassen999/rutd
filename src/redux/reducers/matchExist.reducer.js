const matchExistReducer = (state = {exists: false}, action) => {
    switch (action.type) {
      case "SET_MATCH_EXIST":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default matchExistReducer;