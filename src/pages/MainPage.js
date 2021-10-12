// * import Basic
import React from 'react';

// * import Components
import { Header, Footer, MainFilter, MainCard } from '../components/index';
import { Input, Button, Text, Grid, Image } from '../elements/index';

const MainPage = (props) => {
	const campingDats = [
		{ name: '애옹이 캠핑장 1', price: '55,000 ~ 99,000' },
		{ name: '애옹이 캠핑장 2', price: '77,000 ~ 111,000' },
		{ name: '애옹이 캠핑장 3', price: '85,000 ~ 100,000' },
		{ name: '애옹이 캠핑장 4', price: '85,000 ~ 100,000' },
		{ name: '애옹이 캠핑장 5', price: '85,000 ~ 100,000' },
		{ name: '애옹이 캠핑장 6', price: '85,000 ~ 100,000' },
		{ name: '애옹이 캠핑장 7', price: '85,000 ~ 100,000' },
		{ name: '애옹이 캠핑장 8', price: '85,000 ~ 100,000' },
	];

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
					{campingDats.map((data, idx) => (
						<MainCard
							index={idx}
							camping_name={data.name}
							camping_price={data.price}
						/>
					))}
				</Grid>
				<Footer />
			</Grid>
		</>
	);
};

export default MainPage;
