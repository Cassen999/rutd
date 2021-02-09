const maladyReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MALADY':
      return action.payload;
    default:
        return state;
  }
};

export default maladyReducer;
  