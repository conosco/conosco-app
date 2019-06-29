const groups = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_GROUPS':
        if (action.groups === null || action.groups === 0) {
          return state;
        }
        return action.groups;
  
      default:
        return state;
    }
  };
  
export default groups;