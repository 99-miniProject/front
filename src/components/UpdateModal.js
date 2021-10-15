import React from 'react';
import styled from 'styled-components';
import { Input, Text, Button } from '../elements/index';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as pageCreators } from '../redux/modules/pages';
import { actionCreators as campCreators } from '../redux/modules/camp';

const UpdateModal = () => {
	const dispatch = useDispatch();
	const review = useSelector((state) => state.pages.review);
	const [inputVal, setInputVal] = React.useState('');

	const updateReview = () => {
		const review_info = {
			reviewId: review.review,
			campId: review.post,
			content: inputVal,
		};
		console.log(review_info);
		dispatch(pageCreators.setModal(false));
		dispatch(campCreators.updateReview(review_info));
	};

	return (
		<>
			<Modal>
				<Text bold="700" fontSize="3rem">
					수정할 댓글을 입력해주세요
				</Text>
				<Hr />
				<Input
					width="40vw"
					height="3.5rem"
					bradius="8px"
					_onChange={(e) => {
						setInputVal(e.target.value);
					}}
					value={inputVal}
				/>
				<Button
					_onClick={updateReview}
					width="40vw"
					height="2.9rem"
					bradius="8px"
					others="margin-top:1.5rem;&:hover{opacity:80%};"
				>
					<Text color="white" bold="700" fontSize="1.2rem">
						수정
					</Text>
				</Button>
			</Modal>
		</>
	);
};

const Modal = styled.article`
	width: 50rem;
	height: 30rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: fixed;
	background-color: #fff;
	z-index: 2;
	-webkit-box-shadow: 6px 5px 13px 1px rgba(0, 0, 0, 0.82);
	box-shadow: 6px 5px 13px 1px rgba(0, 0, 0, 0.82);
	border-radius: 20px;
	bottom: 10rem;
`;

const Hr = styled.hr`
	width: 40vw;
	margin: 2rem;
	border: 1px solid lightgray;
	border-radius: 10px;
`;

export default UpdateModal;
