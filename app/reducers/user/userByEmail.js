const userByEmail = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_USER_BY_EMAIL':
        if (action.userByEmail === null || action.user === 0) {
          return state;
        }
        return action.userByEmail;
  
      default:
        return state;
    }
  };
  
export default userByEmail;