// ! kyuung
import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Text, Button } from '../elements/index';

const MainCard = (props) => {
	const { camping_name, camping_price } = props;
	return (
		<>
			<Grid
				fd="column"
				ai="left"
				width="auto"
				others="margin-bottom:2rem;"
			>
				<Image
					others="-webkit-box-shadow: 5px 7px 12px 0px rgba(0,0,0,0.78); 
							box-shadow: 5px 7px 12px 0px rgba(0,0,0,0.78);margin-bottom:1.3rem;"
					bradius="18px"
				/>
				<Text bold="700" fontSize="1.2rem">
					{camping_name}
				</Text>
				<Text>{camping_price}</Text>
				<Button
					width="5rem"
					height="2.2rem"
					bradius="12px"
					others="margin-top:0.7rem; &:hover{background-color:white;color:black;border:1px solid gray;}"
				>
					<span styles={{ fontWeight: 700 }}>예약</span>
				</Button>
			</Grid>
		</>
	);
};

MainCard.defaultProps = {
	camping_name: '애옹이 캠핑장',
	camping_price: '55,000 ~ 99,000',
};

export default MainCard;
