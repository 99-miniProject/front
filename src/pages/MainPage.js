// * import Basic
import React from 'react';

// * import Components
import { Header, Footer, MainFilter, MainCard } from '../components/index';
import { Input, Button, Text, Grid, Image } from '../elements/index';

const MainPage = (props) => {
	const resCampingData = [
		{
			id: 1,
			name: '숲 캠핑장 1',
			price: '55,000 ~ 99,000',
			src: 'https://my-speak-app.s3.ap-northeast-2.amazonaws.com/camp.jpg',
		},
		{
			id: 2,
			name: '애옹이 캠핑장 2',
			price: '77,000 ~ 111,000',
			src: 'https://my-speak-app.s3.ap-northeast-2.amazonaws.com/cat1.jpeg',
		},
		{
			id: 3,
			name: '숲 캠핑장 3',
			price: '85,000 ~ 100,000',
			src: 'https://my-speak-app.s3.ap-northeast-2.amazonaws.com/camp.jpg',
		},
		{
			id: 4,
			name: '애옹이 캠핑장 4',
			price: '85,000 ~ 100,000',
			src: 'https://my-speak-app.s3.ap-northeast-2.amazonaws.com/cat1.jpeg',
		},
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
					{resCampingData.map((data, idx) => (
						<MainCard
							index={idx}
							camp_id={data.id}
							camp_name={data.name}
							camp_price={data.price}
							camp_src={data.src}
						/>
					))}
				</Grid>
			</Grid>
		</>
	);
};

export default MainPage;
