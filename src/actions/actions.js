import Axios from "axios";
import * as actions from "./types.js"

import AuthService from "../utils/AuthService.js";
import config from "../config/index.js";

const Auth = new AuthService()

export function login(username, password) {
    return dispatch => {
        dispatch(reqInit());
        return Auth.login(username, password)
        .then()
        .catch()
    }
}

export function register(data) {
    return dispatch => {
        dispatch(reqInit());
        return Axios.post(config.DOMAIN + '/register', data)
        .then(res => {
            console.log(res.data);
            dispatch(registerUserSuccess(res.data))
        })
        .catch(e => dispatch(registerUserFail(e)))
    }
}


// export function fetchSpecificUser(user) {
//     return dispatch => {
//         dispatch(reqInit());
//         return Axios
//             .get(`http://localhost:5050/api/user/details?name=${user}`)
//             .then(res => {
//                 console.log(res.data);
//                 dispatch(fetchSpecificUserSuccess(res.data)) return res.data;
//             }).catch(error =>
//                 dispatch(fetchSpecificUserFailure(error)));
//     };
// }

function fetchData() {
    // return dispatch => {     dispatch(reqInit())     return Axios
    // .get("https://pokeapi.co/api/v2/pokemon?limit=151")         .then(res => {
    //          dispatch(fetchPokeSucess(res.data))             return res.data
    //    })         .catch(e => dispatch(reqFail(e))) }
}

function shouldFetchData(state) {
    // const pkms = state.poke.length > 1 if (pkms) {     console.log('there are
    // pokms');     return false } else {     console.log('there are no pokms');
    // return true }
}

export function FetchDataIfNeed() {
    return (dispatch, getState) => {
        if (shouldFetchData(getState().rootReducer) == true) {
            return dispatch(fetchData())
        }
    };
}

export const reqInit = () => ({
    type: actions.REQ_INIT
});
export const reqFail = error => ({
    type: actions.REQ_FAIL,
    payload: {
        error
    }
});

export const registerUserSuccess = RES => ({type: actions.CREATE_USER_SUCCESS, payload: { RES }})
export const registerUserFail = E => ({type: actions.CREATE_USER_FAIL, payload: { E }})
