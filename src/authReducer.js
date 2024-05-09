// reducer.js

const initialState = {
  username: '',
  isAuthenticated: false,
  token: '',
  firstName: '', //add firstName field to initial state initial
  lastName: '', // add lastName field to initial state initial
};

// Define authReducer function with state and action parameters, setting initialState as default state
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Switch statement to handle different action types
    // actions passed as parameters 
    case 'LOGIN_SUCCESS':
      // Return updated state with data and status via payload property
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
      // Default case, return current state if action type doesn't match
    default:
      return state;
  }
};

export default authReducer;
