import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import instance from '../../shared/Request';

const initialState = {
	list: [],
	reviews: [],
};

// ! action types
const SET_POST = 'SET_POST';
const SET_REVIEW = 'SET_REVIEW';

// ! action creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const setReview = createAction(SET_REVIEW, (review_list) => ({ review_list }));

// ! middle wares
const getPost = () => {
	return function (dispatch, getState, { history }) {
		instance
			.get()
			.then((res) => {
				dispatch(setPost(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const getReviews = (campId) => {
	return function (dispatch, getState, { history }) {
		instance
			.get(`reviews/${campId}`)
			.then((res) => {
				console.log(res);
				dispatch(setReview(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const postReview = (review_info) => {
	return function (dispatch, getState, { history }) {
		console.log(review_info);
		instance
			.post('/reviews', {
				campId: review_info.camp_id,
				content: review_info.content,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const postReserve = (reserve_info) => {
	return function (disptach, getState, { history }) {
		console.log(reserve_info);
		instance
			.post('/books', {
				campId: reserve_info.camp_id,
				count: reserve_info.count,
				checkinDate: reserve_info.checkIn,
			})
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
		[SET_POST]: (state, action) =>
			produce(state, (draft) => {
				draft['list'] = action.payload.post_list;
			}),
		[SET_REVIEW]: (state, action) =>
			produce(state, (draft) => {
				draft['reviews'] = action.payload.review_list;
			}),
	},
	initialState
);

const actionCreators = {
	getPost,
	postReview,
	postReserve,
	getReviews,
};

export { actionCreators };
