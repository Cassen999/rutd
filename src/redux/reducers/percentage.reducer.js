const percentageReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PERCENTAGE':
      return action.payload;
    default:
        return state;
  }
};

export default percentageReducer;
  