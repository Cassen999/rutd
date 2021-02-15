const matchExistReducer = (state = [], action) => {
    switch (action.type) {
      case "SET_MATCH_EXIST":
        return action.payload;
      case "UNSET_MATCH_EXIST":
        return (state = []);
      default:
        return state;
    }
  };
  
  export default matchExistReducer;