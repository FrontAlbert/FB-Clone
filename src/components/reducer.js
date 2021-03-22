// Initial Value, when not logged in user is null
export const initialState = {
    user: null,
  };
  
  export const actionTypes = {
    SET_USER: "SET_USER",
  };
  
// Return to what the value is right now, but change the user
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case actionTypes.SET_USER:
        return {
          ...state,
          user: action.user,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  