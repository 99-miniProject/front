import React from 'react';
import Reviews from '../components/Reviews';
import { actionCreators as campCreators } from '../redux/modules/camp';
import { actionCreators as pageCreators } from '../redux/modules/pages';

import { Input, Button, Text, Grid, Image } from '../elements/index';
import { Detail } from '../components/index';
import { useDispatch, useSelector } from 'react-redux';
import UpdateModal from '../components/UpdateModal';

const DetailPage = (props) => {
	const dispatch = useDispatch();
	const post_id = props.match.params.id;
	const modal_status = useSelector((state) => state.pages.modal);
	const [update, setUpdate] = React.useState(false);

	React.useEffect(() => {
		dispatch(campCreators.getReviews(post_id));
		dispatch(campCreators.getPost());
	}, []);

	// * get Modal state
	React.useEffect(() => {
		setUpdate(modal_status);
	}, [modal_status]);

	return (
		<>
			{update ? <UpdateModal /> : null}
			<div
				onClick={() => {
					modal_status && dispatch(pageCreators.setModal(false));
				}}
			>
				<Grid fd="column" width="100vw">
					<Detail post_id={post_id} />
				</Grid>
				<hr style={{ marginTop: '2rem', width: '75vw' }} />
				<Grid fd="column">
					<Reviews post_id={post_id} />
				</Grid>
			</div>
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
