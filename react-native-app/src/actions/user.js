import * as api from "../api/index.js";

import {
    SIGN_IN,
    SIGN_UP,
    GET_USER_LIST,
    CHECK_SIGN_IN,
    LOG_OUT,
    CLR_ER_MESSAGE,
    SET_ER_MESSAGE,
} from "../assets/constants/actionType.js";

export const signin = (loginData) => async (dispatch) => {
    try {
        loginData.username = loginData.userName;

        const { data } = await api.signin(loginData);
        localStorage.setItem("authToken", data.token);
        console.log("Logined");

        dispatch({ type: CLR_ER_MESSAGE, payload: null });
        dispatch({ type: SIGN_IN, payload: data });
    } catch (error) {
        console.log(error.response.data);
        dispatch({ type: SET_ER_MESSAGE, payload: error.response.data });
    }
};