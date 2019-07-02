const result = state => ({ ...state, error: false, loading: false });

const groups = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_GROUPS':
        if (action.groups === null || action.groups === 0) {
          return state;
        }
        return result({ ...state, ...action.groups.data });
  
      default:
        return state;
    }
  };
  
export default groups;