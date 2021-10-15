// ! 수정 구현해야댐
import React from 'react';
import { Input, Button, Text, Grid, Image } from '../elements/index';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as campCreators } from '../redux/modules/camp';
import { actionCreators as pageCreators } from '../redux/modules/pages';

const Reviews = (props) => {
	const dispatch = useDispatch();
	const { post_id } = props;
	const review_list = useSelector((state) => state.camp.reviews);

	const [_content, setContent] = React.useState('');
	const [_reviews, setReviews] = React.useState([]);

	// * get reviews
	React.useEffect(() => {
		const ref_reviews = review_list.filter(
			(review) => review.camp.id === Number(post_id)
		);
		setReviews(ref_reviews);
	}, [review_list]);

	// * review Post
	const postReview = () => {
		const review_info = { camp_id: post_id, content: _content };
		dispatch(campCreators.postReview(review_info));
		window.alert('댓글을 작성했습니다');
	};

	return (
		<>
			<Grid fd="column" others="margin-bottom:1rem;">
				<Grid>
					<Grid
						jc="center"
						ai="center"
						others="margin-bottom:2.5rem;"
					>
						<Text others="margin-top:1rem;margin-right:0.5rem;">
							리뷰 작성
						</Text>
						<Input
							text=""
							value={_content}
							width="40vw"
							height="2.5rem"
							placeholder="리뷰를 여기 작성해주세요"
							_onChange={(e) => {
								setContent(e.target.value);
							}}
						/>
					</Grid>
					<Button
						width="3rem"
						height="2.5rem"
						others="margin-left:0.5rem;&:hover{opacity:80%};margin-bottom:1.5rem;"
						bradius="10px"
						_onClick={postReview}
					>
						등록
					</Button>
				</Grid>
				<Grid
					width="45vw"
					jc="left"
					others="margin-bottom:2rem;"
					fd="column"
				>
					{_reviews.map((review, idx) => {
						return (
							<Grid
								width="45vw"
								others="margin-right:3rem;margin-bottom:1rem"
								jc="space-between"
								key={idx}
							>
								<Text
									fontSize="1.2rem"
									bold="700"
									others="margin-left:1rem"
								>
									{review?.user?.username}
								</Text>
								<Text>{review?.content}</Text>
								<Grid>
									<Button
										others={'margin-right:1rem'}
										_onClick={() => {
											dispatch(
												pageCreators.setModal(true)
											);
											const ids = {
												review: review.id,
												post: Number(post_id),
											};

											dispatch(
												pageCreators.setReviewId(ids)
											);
										}}
									>
										수정
									</Button>
									<Button
										_onClick={() => {
											const q =
												window.confirm(
													'리뷰를 삭제하시겠습니까 ? '
												);
											if (q) {
												dispatch(
													campCreators.deleteReview(
														review.id
													)
												);
											}
										}}
									>
										삭제
									</Button>
								</Grid>
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</>
	);
};

export default Reviews;
