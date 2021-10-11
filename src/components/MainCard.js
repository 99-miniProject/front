// ! kyuung
import React from 'react';
import styled from 'styled-components';
import { Image, Text, Button } from '../elements/index';

const MainCard = () => {
	return (
		<>
			<article>
				<Image />
				<Text bold="700">캠핑장소제목</Text>
				<Text>55,000~77,000</Text>
				<Button>예약</Button>
			</article>
		</>
	);
};

export default MainCard;
