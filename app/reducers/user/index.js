export const initial = {};

const user = (state = initial, action) => {
  switch (action.type) {
    case 'USER_DEFINED':
      return action.payload;

    default:
      return state;
  }
};

export default user;
