import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const initialState = {
	modal: false,
	review: {},
};

const SET_MODAL = 'SET_MODAL';
const SET_REVIEW_ID = 'SET_REVIEW_ID';

const setModal = createAction(SET_MODAL, (status) => ({ status }));
const setReviewId = createAction(SET_REVIEW_ID, (ids) => ({ ids }));

export default handleActions(
	{
		[SET_MODAL]: (state, action) =>
			produce(state, (draft) => {
				draft.modal = action.payload.status;
			}),
		[SET_REVIEW_ID]: (state, action) =>
			produce(state, (draft) => {
				draft.review = action.payload.ids;
			}),
	},
	initialState
);

const actionCreators = {
	setModal,
	setReviewId,
};

export { actionCreators };
