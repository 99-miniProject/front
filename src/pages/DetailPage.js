import React from 'react';
import Reviews from '../components/Reviews';
import { useHistory } from 'react-router';
import { actionCreators as campCreators } from '../redux/modules/camp';

import { Input, Button, Text, Grid, Image } from '../elements/index';
import { useDispatch, useSelector } from 'react-redux';

const DetailPage = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const post_id = props.match.params.id;
	const camp_list = useSelector((state) => state.camp.list);
	const refCamp = camp_list.filter((camp) => camp.id === Number(post_id));

	React.useEffect(() => {
		dispatch(campCreators.getReviews(post_id));
	}, []);

	return (
		<>
			<Grid fd="column" width="100vw">
				<Text fontSize="4rem" bold="700" others="margin:2rem;">
					{refCamp[0].name}
				</Text>
				<Image
					others="-webkit-box-shadow: 5px 7px 12px 0px rgba(0,0,0,0.78); 
							box-shadow: 5px 7px 12px 0px rgba(0,0,0,0.78);margin-bottom:1.3rem;"
					bradius="18px"
				/>
				<Text
					fontSize="2rem"
					bold="700"
					others="margin-top:3.8rem;margin-bottom:1.2rem;"
				>
					{refCamp[0].info}
				</Text>
				<Grid width="70vw" jc="space-between">
					<Grid fd="column" width="25vw">
						<Grid
							width="25vw"
							jc="left"
							others="margin-left:20vw;margin-bottom:2rem;"
						>
							<Text
								fontSize="2.3rem"
								bold="700"
								center
								others="margin-right:2.5rem"
							>
								가격
							</Text>
							<Text fontSize="1rem">{refCamp[0].price}</Text>
						</Grid>
						<Grid width="25vw" jc="left" others="margin-left:20vw">
							<Text
								fontSize="2.3rem"
								bold="700"
								center
								others="margin-right:2.5rem"
							>
								인원
							</Text>
							<Text fontSize="1rem">{refCamp[0].capacity}명</Text>
						</Grid>
					</Grid>
					<Grid width="35vw">
						<Text center>{refCamp[0].info}</Text>
					</Grid>
				</Grid>
				<Button
					width="30rem"
					height="3rem"
					bradius="15px"
					others="margin-top:2rem;&:hover{opacity:80%}"
					_onClick={() => {
						history.push(`/reserve/${refCamp[0].id}`);
					}}
				>
					예약하러가기
				</Button>
			</Grid>
			<hr style={{ marginTop: '2rem', width: '75vw' }} />
			<Grid fd="column">
				<Reviews post_id={post_id} />
			</Grid>
		</>
	);
};

DetailPage.defaultProps = {
	camping_name: '애옹이 캠핑장 3',
	camping_price: '77,000~99,000',
	camping_num: '2~6명',
	review_user_name: 'kyuung',
	review_user_content: '여기서 키우는 고양이가 진짜 귀여워요 ',
};

export default DetailPage;
