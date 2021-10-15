import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import instance from '../../shared/Request';
import { getCookie } from '../../shared/Cookie';
import axios from 'axios';

const initialState = {
	list: [],
	reviews: [],
};

// ! action types
const SET_POST = 'SET_POST';
const SET_REVIEW = 'SET_REVIEW';
const SET_FILTER = 'SET_FILTER';

// ! action creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const setReview = createAction(SET_REVIEW, (review_list) => ({ review_list }));
const setFilter = createAction(SET_FILTER, (value) => ({ value }));

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
				dispatch(setReview(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const postReview = (review_info) => {
	return function (dispatch, getState, { history }) {
		instance
			.post('reviews', {
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

const reviewDelete = (reserve_info) => {
	return function (dispatch, getState, { history }) {
		console.log('>>middleware', reserve_info);
		instance.delete(`/reviews/${reserve_info.postId}`, {
			reviewId: reserve_info.reviewId,
		});
	};
};

const postReserve = (reserve_info) => {
	return function (disptach, getState, { history }) {
		instance
			.post('/books', {
				campId: reserve_info.camp_id,
				count: reserve_info.count,
				checkinDate: reserve_info.checkIn,
			})
			.then((res) => {
				console.log(res);
				window.alert('예약이 완료되었습니다 ! ');
				history.replace('/');
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
		[SET_FILTER]: (state, action) =>
			produce(state, (draft) => {
				draft['filter'] = action.payload.value;
			}),
	},
	initialState
);

const actionCreators = {
	getPost,
	postReview,
	postReserve,
	getReviews,
	setFilter,
	reviewDelete,
};

export { actionCreators };
