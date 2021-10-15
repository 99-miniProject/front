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
const DELETE_REVIEW = 'DELETE_REVIEW';
const CREATE_REVIEW = 'CREATE_REVIEW';
const UPDATE_REVIEW = 'UPDATE_REVIEW';
const SET_FILTER = 'SET_FILTER';

// ! action creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const setReview = createAction(SET_REVIEW, (review_list) => ({ review_list }));
const updateReviewRD = createAction(UPDATE_REVIEW, (review_info) => ({
	review_info,
}));
const createReviewRD = createAction(CREATE_REVIEW, (review_info) => ({
	review_info,
}));
const deleteReviewRD = createAction(DELETE_REVIEW, (id) => ({ id }));
const setFilter = createAction(SET_FILTER, (value) => ({ value }));

// ! middlewares
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
				console.log(res.data);
				dispatch(createReviewRD(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const deleteReview = (review_id) => {
	return function (dispatch, getState, { history }) {
		console.log('>>middleware', review_id);
		instance
			.delete(`/reviews/${review_id}`, {
				reviewId: review_id,
			})
			.then((res) => {
				console.log(res);
				dispatch(deleteReviewRD(review_id));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const updateReview = (review_info) => {
	return function (dispatch, getState, { history }) {
		instance
			.put(`/reviews/${review_info.reviewId}`, {
				reviewId: review_info.reviewId,
				campId: review_info.campId,
				content: review_info.content,
			})
			.then((res) => {
				console.log(res.data);
				dispatch(updateReviewRD(res.data));
			})
			.catch((err) => {
				console.log('>>', err);
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
		[CREATE_REVIEW]: (state, action) =>
			produce(state, (draft) => {
				console.log(action.payload.review_info);
				draft['reviews'].push(action.payload.review_info);
			}),
		[UPDATE_REVIEW]: (state, action) =>
			produce(state, (draft) => {
				const index = draft.reviews.findIndex(
					(review) => review.id === action.payload.review_info.id
				);
				if (index !== -1)
					draft.reviews[index] = action.payload.review_info;
			}),

		[SET_FILTER]: (state, action) =>
			produce(state, (draft) => {
				draft['filter'] = action.payload.value;
			}),
		[DELETE_REVIEW]: (state, action) =>
			produce(state, (draft) => {
				const index = draft.reviews.findIndex(
					(review) => review.id === action.payload.id
				);
				console.log('>>', action.payload.id);
				if (index !== -1) draft.reviews.splice(index, 1);
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
	deleteReview,
	updateReview,
};

export { actionCreators };
