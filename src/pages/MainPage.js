// * import Basic
// ! 필터가 늦게 넘어온다링
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as campCreators } from '../redux/modules/camp';
import { history } from '../redux/configStore';

// * import Components
import { Header, Footer, MainFilter, MainCard } from '../components/index';
import { Input, Button, Text, Grid, Image } from '../elements/index';

const MainPage = (props) => {
	const camp_list = useSelector((state) => state.camp.list);
	const camp_filter = useSelector((state) => state.camp.filter);
	const modal_status = useSelector((state) => state.pages.modal);
	const [filtering, setFiltering] = React.useState([]);

	React.useEffect(() => {
		setFiltering(camp_filter);
		console.log('>>filtering', filtering);
	}, [camp_filter]);

	return (
		<>
			<Grid fd="column" width="100vw">
				<Image
					width="100vw"
					height="20rem"
					src="https://my-speak-app.s3.ap-northeast-2.amazonaws.com/camp.jpg"
				>
					<Grid width="100%" height="100%">
						<Text color="white" center fontSize="3rem">
							Camping Camping
						</Text>
					</Grid>
				</Image>
				<MainFilter />
				<Grid
					jc="space-between"
					width="70vw"
					height="50vh"
					others="flex-wrap:wrap"
				>
					{camp_list.map((data, idx) => (
						<MainCard
							key={idx}
							camp_id={data.id}
							camp_name={data.name}
							camp_price={data.price}
							camp_src={data.img}
							_onClick={() => {
								console.log(data.id);
								history.push(`/post/${data.id}`);
							}}
						/>
					))}
				</Grid>
			</Grid>
		</>
	);
};

export default MainPage;
