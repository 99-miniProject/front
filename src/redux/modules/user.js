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
const postSignup = () => {
	return function (dispatch, getState, { history }) {
		instance
			.post('/signup')
			.then((res) => {
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
	login,
};

export { actionCreators };
