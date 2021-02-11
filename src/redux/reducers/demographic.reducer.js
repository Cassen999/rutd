const demographicReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DEMOGRAPHIC':
      return action.payload;
    default:
        return state;
    }
  };

export default demographicReducer;