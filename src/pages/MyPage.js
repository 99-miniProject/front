import React from 'react';
import { Grid, Button, Input, Text, Image } from '../elements/index'
import styled from 'styled-components';

const MyPage = () => {
	return (
			<ReservePage>
				<Centerpage>
						<Text fontSize='35px' bold='700'>예약페이지</Text>
						<hr  style={{borderColor: '#88d999'}}></hr>
					<Grid>
						<Image/>
					</Grid>
					<TextBox>
							<Text fontSize='35px' bold='700'>예약날짜: </Text> 2021-01-01 ~ 2021-01-01
					</TextBox>
						
					<TextBox>
						<Text fontSize='35px' bold='700'>인원수: </Text>  성인2명 아동2명
					</TextBox>
				</Centerpage>
			</ReservePage>
	)
};

const ReservePage = styled.div`

		min-width: 600px ;
		width: 50%;
		margin:auto;
		padding: 10px;
		margin-top:  20px;
		border: solid 3px;
		border-radius: 20px;
		border-color: #88d999;
`;

const Centerpage =styled.div`
		text-align: center;
`;

const TextBox = styled.div`
  border : 1px solid;
  border-radius:  5px;
  padding:  5px;
  margin: 5px 5px;
`;



export default MyPage;
