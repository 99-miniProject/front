import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const initialState = {};

// ! action types
const LOGIN = 'LOGIN';

// ! action creators
const login = createAction(LOGIN, (user) => ({ user }));

// ! reducers
export default handleActions({}, initialState);

const actionCreators = {};

export { actionCreators };
