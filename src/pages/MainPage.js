// * import Basic
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as campCreators } from '../redux/modules/camp';
import axios from 'axios';

// * import Components
import { Header, Footer, MainFilter, MainCard } from '../components/index';
import { Input, Button, Text, Grid, Image } from '../elements/index';

const MainPage = (props) => {
	const camp_list = useSelector((state) => state.camp.list);
	const camp_filter = useSelector((state) => state.camp.filter);
	const [filtering, setFiltering] = React.useState([]);
	const _filter = (value) => {
		if (value !== '전체') {
			console.log(value);
			const result = camp_list.filter((camp) =>
				camp.category.includes(value)
			);
			setFiltering(result);
			console.log(result);
			console.log(filtering);
		} else {
			setFiltering(camp_list);
		}
	};
	React.useEffect(() => {
		_filter(camp_filter);
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
						/>
					))}
				</Grid>
			</Grid>
		</>
	);
};

export default MainPage;
