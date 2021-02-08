const percentageReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PERCENTAGE':
        return action.payload;
    //   case 'UNSET_SECRETS':
    //     return [];
    

      default:
         return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default percentageReducer;
  