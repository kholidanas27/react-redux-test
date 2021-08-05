import { GET_USERS_LIST } from '../action/userAction';

let initialState = {
  getUsersList: false,
  errorUsersList: false,
  title: "React Redux Test",
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };      
    default:
      return state;
    }
};
export default users;
