// * import Basic
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
		const test = camp_list.filter((camp) =>
			camp?.category.includes(camp_filter === '전체' ? '' : camp_filter)
		);
		setFiltering(test);
		console.log(test);
	}, [camp_list, camp_filter]);

	return (
		<>
			<Grid jc={'start'} fd="column" width="100vw">
				<Image
					width="100vw"
					height="20rem"
					src="https://my-speak-app.s3.ap-northeast-2.amazonaws.com/camp.jpg"
					others="margin-bottom:25px"
				>
					<Grid width="100%" height="100%">
						<Text
							color="#fff"
							center
							bold={600}
							fontSize="2.5rem"
							others={'text-shadow: 1px 1px 1px black;'}
						>
							Camping Connect
						</Text>
					</Grid>
				</Image>
				<MainFilter />
				<Grid margin="30px -85px 30px 0px" width="1000px">
					<Grid jc="start" others="flex-wrap:wrap">
						{filtering.map((data, idx) => (
							<Grid margin="0px 50px 15px 0px">
								<MainCard
									key={idx}
									camp_id={data.id}
									camp_name={data.name}
									camp_price={data.price}
									camp_src={data.img}
									_onClick={() => {
										console.log(data.id);
										history.push(`/camps/${data.id}`);
									}}
								/>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default MainPage;
