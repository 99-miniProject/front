import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const initialState = {
	list: [{ id: 'kyuung', pwd: 'a12345' }],
};

// ! action types
const LOGIN = 'LOGIN';

// ! action creators
const login = createAction(LOGIN, (user) => ({ user }));

// ! reducers
export default handleActions(
	{
		[LOGIN]: (state, action) => produce(state, (draft) => {}),
	},
	initialState
);

const actionCreators = {
	login,
};

export { actionCreators };
