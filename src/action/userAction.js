import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";
export const POST_USERS_CREATE = "POST_USERS_CREATE";
export const PUT_USERS_EDIT = "PUT_USERS_EDIT";

export const getUsersList = () => {
    return dispatch =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(function (response) {
            dispatch({
                type: GET_USERS_LIST,
                payload:{
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: GET_USERS_LIST,
                payload:{
                    data: false,
                    errorMessage: error.message
                }
            })
        });
    };
};

export const getUsersDetail = (id) => {
    return dispatch =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
        .then(function (response) {
            dispatch({
                type: GET_USERS_DETAIL,
                payload:{
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: GET_USERS_DETAIL,
                payload:{
                    data: false,
                    errorMessage: error.message
                }
            })
        });
    };
};

export const postUsersCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
         "https://jsonplaceholder.typicode.com/posts",
        data
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: POST_USERS_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_USERS_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putUsersUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
         "https://jsonplaceholder.typicode.com/posts/"+ id,
        data
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: PUT_USERS_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_USERS_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteDataUsers = () => {
    return dispatch =>{
        dispatch({
            type: GET_USERS_DETAIL,
            payload:{
                data: false,
                errorMessage: false,
            }
        });

        dispatch({
            type: POST_USERS_CREATE,
            payload:{
                data: false,
                errorMessage: false,
            }
        });
    };
};


