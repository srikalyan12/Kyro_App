const profile = (state = {}, action) => {
  switch (action.type) {
    case "SAVE":
      return Object.assign({}, { ...action.payload.data });
    default:
      return state;
  }
};
export default profile;
