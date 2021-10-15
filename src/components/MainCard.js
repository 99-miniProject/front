// ! kyuung
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Grid, Image, Text, Button } from '../elements/index';

const MainCard = (props) => {
	const { camp_id, camp_name, camp_price, camp_src, _onClick } = props;

	return (
		<>
			<PointerDiv styles={{ cursor: 'pointer' }} onClick={_onClick}>
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
						src={camp_src}
					/>
					<Text bold="700" fontSize="1.2rem">
						{props.camp_name}
					</Text>
					<Text>{props.camp_price}</Text>
					<Button
						width="5rem"
						height="2.2rem"
						bradius="12px"
						others="margin-top:0.7rem; &:hover{background-color:white;color:black;border:1px solid gray;}"
					>
						<span styles={{ fontWeight: 700 }}>예약</span>
					</Button>
				</Grid>
			</PointerDiv>
		</>
	);
};

MainCard.defaultProps = {
	camp_id: 1,
	camp_name: '숲 캠핑장',
	camp_price: '85,000 ~ 100,000',
	camp_src: 'https://my-speak-app.s3.ap-northeast-2.amazonaws.com/camp.jpg',
	_onClick: () => {},
};

const PointerDiv = styled.div`
	cursor: pointer;
`;

export default MainCard;
