import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import instance from '../../shared/Request';

// * nickname, id, pwd, uid, is_login
const initialState = {};

// ! action types
const SIGNUP = 'SIGNUP';
const LOGIN = 'LOGIN';

// ! action creators
const signup = createAction(SIGNUP, (user_info) => ({ user_info }));
const login = createAction(LOGIN, (user) => ({ user }));

// ! middlewares
const postSignup = (user_info) => {
	return function (dispatch, getState, { history }) {
		instance
			.post('/signup', {
				username: user_info.id,
				nickname: user_info.nickName,
				password: user_info.pwd,
				passwordChk: user_info.pwdChk,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const postLogin = (user_info) => {
	return function (dispatch, getState, { history }) {
		console.log(user_info);
		instance
			.post('/login', {
				username: user_info.id,
				password: user_info.pwd,
			})
			.then((res) => {
				// 토큰 어딧징? 받으면 쿠키에 넣쟈
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

// ! reducers
export default handleActions(
	{
		[SIGNUP]: (state, action) => produce(state, (draft) => {}),
		[LOGIN]: (state, action) => produce(state, (draft) => {}),
	},
	initialState
);

const actionCreators = {
	postSignup,
	postLogin,
};

export { actionCreators };
