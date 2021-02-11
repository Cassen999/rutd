const addNewMatchReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_NEW_MATCH':
        return action.payload;
      default:
          return state;
      }
    };
  
  export default addNewMatchReducer;