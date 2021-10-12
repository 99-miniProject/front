import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { flexbox, style, width } from '@mui/system';
import styled from 'styled-components';
import { SocialDistance } from '@mui/icons-material';
import { Grid, Button, Input, Text, Image } from '../elements/index'

const ReservePage = () => {
	return (
		<Wrap>
			<Calendar>
				<FullCalendar
					plugins={[dayGridPlugin]}
					initialView="dayGridMonth"
				/>
				<Check>
						<div>
					  		<Text fontSize='35px' bold='700'>인원 :</Text>
						</div>
						<Person>
							<div>
								성인 2명{' '}
							</div>

							<div>
								아동 2명{' '}
							</div>
						</Person>
				</Check>
				<ReservBtn>예약하기</ReservBtn>
			</Calendar>
		</Wrap>
	);
};

const Wrap = styled.div`
	padding: 10%;
`;
const Calendar = styled.div`
	min-width: 601px;
	width: 70vw;
`;
const Check = styled.div`
	display: flex;
	width: 30%;
	text-align: center;
	margin: 10px 50px 50px 5px;
	border: 1px solid;
	border-radius:  5px;
	padding:  5px;

`;
const Person = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10%;
`;
const ReservBtn = styled.button`
	width: 100%;
	height: 50px;
	display: inline-block;
	padding: 15px 25px;
	font-size: 24px;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	outline: none;
	color: #fff;
	background-color: #4caf50;
	border: none;
	border-radius: 15px;
	box-shadow: 0 9px #999;
	&:hover {
		background-color: #3e8e41;
	}
	&:active {
		background-color: #3e8e41;
		box-shadow: 0 5px #666;
		transform: translateY(4px);
	}
`;

export default ReservePage;
