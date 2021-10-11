// ! kyuung
// * import Basic
import React from 'react';

// * import Components
import { Header, Footer, MainFilter } from '../components/index';
import { Input, Button, Text, Grid, Image } from '../elements/index';

const MainPage = () => {
	return (
		<>
			<Header />
			<Image
				width="100vw"
				height="20rem"
				src="https://my-speak-app.s3.ap-northeast-2.amazonaws.com/camp.jpg"
			>
				<Text color="white" center fontSize="3rem">
					타이틀 !
				</Text>
			</Image>
			<MainFilter />
		</>
	);
};

export default MainPage;
