// reducer.js

const initialState = {
  username: '',
  isAuthenticated: false,
  token: '',
  firstName: '', //add firstName field to initial state initial
  lastName: '', // add lastName field to initial state initial
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        username: action.payload.username,
        isAuthenticated: true,
        token: action.payload.token,
        firstName: action.payload.firstName, // Update firstName with payload value
        lastName: action.payload.lastName, // Update lastName with payload value
      };
    case 'UPDATE_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
