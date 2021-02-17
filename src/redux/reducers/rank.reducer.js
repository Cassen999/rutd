const rankReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_RANK_DROPDOWN':
        return action.payload;
      default:
          return state;
      }
    };
  
  export default rankReducer;