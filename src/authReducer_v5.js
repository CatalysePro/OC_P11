// reducer.js

const initialState = {
    username: '', // Initialyse userName with empty string to avoid null issues
    isAuthenticated: false,
    token: '',
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          username: action.payload.username,
          isAuthenticated: true,
          token: action.payload.token,
        };
      case 'UPDATE_USERNAME': //  UPDATE_USERNAME action directly integrated here to avoid separate file
        return {
          ...state,
          username: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  