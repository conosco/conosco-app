const result = state => ({ ...state, error: false, loading: false });

const habits = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_HABITS':
        if (action.habits === null || action.habits === 0) {
          return state;
        }
        return result({ ...state, ...action.habits.data });
  
      default:
        return state;
    }
  };
  
export default habits;