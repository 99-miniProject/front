import React from 'react';
import { Input, Button, Text, Grid, Image } from '../elements/index';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as campCreators } from '../redux/modules/camp';
import { Refresh } from '@material-ui/icons';

const Reviews = (props) => {
	const dispatch = useDispatch();
	const { review_user_name, review_user_content, post_id } = props;
	const [_content, setContent] = React.useState('');

	const postReview = () => {
		const review_info = { camp_id: post_id, content: _content };
		dispatch(campCreators.postReview(review_info));
	};

	const reviews = useSelector((state) => state.camp.reviews);
	const refReviews = reviews.filter(
		(review) => review.camp.id === Number(post_id)
	);
	const refReviewsParse = refReviews.map((refreview, idx) => {
		const review_info = {
			review_id: refReviews.id,
			content: refreview.content,
			writre: refreview.user.nickname,
		};
		console.log(review_info);
	});

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
				<Grid width="45vw" jc="left" others="margin-bottom:2rem;">
					<Grid others="margin-right:3rem;">
						<Image width="4rem" height="4rem" bradius="50px" />
						<Text
							fontSize="1.2rem"
							bold="700"
							others="margin-left:1rem"
						>
							{review_user_name}
						</Text>
					</Grid>
					<Text>{review_user_content}</Text>
				</Grid>
			</Grid>
		</>
	);
};

Reviews.defaultProps = {
	review_user_name: 'kyuung',
	review_user_content: '여기서 키우는 고양이가 진짜 귀여워요 !!',
};

export default Reviews;
