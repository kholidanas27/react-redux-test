import { GET_USERS_DETAIL, GET_USERS_LIST, POST_USERS_CREATE } from '../action/userAction';

let initialState = {
  getUsersList: false,
  errorUsersList: false,
  getUsersDetail: false,
  errorUsersDetail: false,
  getResponDataUsers: false,
  errorResponsDataUsers: false,
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
    case GET_USERS_DETAIL:
      return {
        ...state,
        getUsersDetail: action.payload.data,
        errorUsersDetail: action.payload.errorMessage,
      };      
    case POST_USERS_CREATE:
      return {
        ...state,
        getResponDataUsers: action.payload.data,
        errorResponsDataUsers: action.payload.errorMessage,
      };      

    default:
      return state;
    }
};
export default users;
