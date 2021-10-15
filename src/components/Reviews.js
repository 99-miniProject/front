// ! 삭제구현해야댐, 수정 구현해야댐
import React from 'react';
import { Input, Button, Text, Grid, Image } from '../elements/index';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as campCreators } from '../redux/modules/camp';

const Reviews = (props) => {
	const dispatch = useDispatch();
	const { post_id } = props;
	const review_list = useSelector((state) => state.camp.reviews);

	const [_content, setContent] = React.useState('');
	const [_reviews, setReviews] = React.useState([]);

	React.useEffect(() => {
		const ref_reviews = review_list.filter(
			(review) => review.camp.id === Number(post_id)
		);
		setReviews(ref_reviews);
		console.log('>>', _reviews);
	}, [review_list]);

	const postReview = () => {
		const review_info = { camp_id: post_id, content: _content };
		dispatch(campCreators.postReview(review_info));
		window.alert('댓글을 작성했습니다');
	};

	const deleteReview = (e) => {
		console.log(e);
	};

	const updateReview = (e) => {
		console.log(e);
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
						value="dd"
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
										_onClick={updateReview}
										others={'margin-right:1rem'}
									>
										수정
									</Button>
									<Button _onClick={deleteReview}>
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
