import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import instance from "../../shared/Request";

const initialState = {
    user: null,
    username: null,
    is_login: false,
};

// ! action types
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// ! action creators
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// ! middlewares
const postSignup = (id, nick, pw, pwcheck) => {
    return function (dispatch, getState, { history }) {
        instance
            .post("/signup", {
                username: id,
                nickname: nick,
                password: pw,
                passwordChk: pwcheck,
            })
            .then((res) => {
                window.alert("회원가입을 축하드립니다!");
                history.replace("/login");
            })
            .catch((err) => {
                window.alert("이미 존재하는 아이디입니다.");
            });
        console.log(id, nick, pw, pwcheck);
    };
};

const postLogIn = (id, pw) => {
    return function (dispatch, getState, { history }) {
        instance
            .post("/login", {
                username: id,
                password: pw,
            })
            .then((res) => {
                setCookie("token", res.data[1].token, 7);
                localStorage.setItem("username", res.data[0].username);
                dispatch(logIn({ id: id }));
                console.log(logIn({ id }), res.data);
                history.replace("/");
            })
            .catch((err) => {
                window.alert("일치하는 회원 정보가 없습니다!");
            });
    };
};

const postLogOut = () => {
    return function (dispatch, getState, { history }) {
        deleteCookie("token");
        console.log(localStorage);
        localStorage.removeItem("username");
        dispatch(logOut());
        history.replace("/login");
    };
};

const postLogInCheck = () => {
    return function (dispatch, getState, { history }) {
        const userId = localStorage.getItem("username");
        const tokenCheck = document.cookie;
        if (tokenCheck) {
            dispatch(logIn({ id: userId }));
        } else {
            dispatch(logOut());
        }
    };
};

// ! reducers
export default handleActions(
    {
        [LOG_IN]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
        [LOG_OUT]: (state, action) =>
            produce(state, (draft) => {
                draft.user = null;
                draft.is_login = false;
            }),
        [GET_USER]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
            }),
    },
    initialState
);

const actionCreators = {
    logIn,
    getUser,
    logOut,
    postLogIn,
    postSignup,
    postLogInCheck,
    postLogOut,
};

export { actionCreators };
