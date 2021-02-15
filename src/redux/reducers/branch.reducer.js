const branchReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_BRANCH_DROPDOWN':
        return action.payload;
      default:
          return state;
      }
    };
  
  export default branchReducer;