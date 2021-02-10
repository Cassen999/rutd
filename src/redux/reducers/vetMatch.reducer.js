const vetMatchReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_VET_MATCHES":
      return action.payload;
    case "UNSET_VET_MATCHES":
      return (state = []);
    default:
      return state;
  }
};

export default vetMatchReducer;
