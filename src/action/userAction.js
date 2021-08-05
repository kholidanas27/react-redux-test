import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";

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
    }
}

export const getUsersDetail = (userId) => {
    return dispatch =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ userId)
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
    }
}

export const deleteUsersDetail = () => {
    return dispatch =>{
            dispatch({
                type: GET_USERS_DETAIL,
                payload:{
                    data: false,
                    errorMessage: false,
                }
            });
    };
};


