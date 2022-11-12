import { createStore } from 'redux';

const store = createStore(
  function (state, action) {
    if (action.type === 'edit-current-user-name') {
      return {
        ...state,
        currentUser: {
          name: action.payload.name,
        },
      };
    } 
    return state;
  },
  {
    currentUser: {
      name: 'Jhon Smith',
    },
  }
);

export default store;
