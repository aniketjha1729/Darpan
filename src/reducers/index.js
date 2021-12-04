export const initialState = null;

export const reducer = (state, action) => {
  if (action.type === "DARKMODE") {
    return {
      ...state,
      darkMode: action.payload,
    };
  }
  return state;
};
