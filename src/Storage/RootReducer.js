const initialState = { userStatus: {},userInterest:{} };

export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER_STATUS":
      state.userStatus[action.payload[0]] = action.payload[1];
      console.log(state.userStatus);
      return { userStatus: state.userStatus };
    // case "ADD_USER_INTEREST":
    //   state.userInterest[action.payload[0]] = action.payload[1];
    //   console.log(state.userInterest);
    //   return { userInterest: state.userInterest };
    default:
      return { userStatus: state.userStatus };
  }
}
