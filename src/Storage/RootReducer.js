const initialState = { userStatus: {} };

export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER_STATUS":
      state.userStatus[action.payload[0]] = action.payload[1];
      console.log(state.userStatus);
      return { userStatus: state.userStatus };
    default:
      return { userStatus: state.userStatus };
     
  }
}
