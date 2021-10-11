import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { flexbox, style, width } from '@mui/system';
import styled from 'styled-components';
import { SocialDistance } from '@mui/icons-material';

const ReservePage = () => {
	return (
		<Wrap>
			<Calendar>
				<FullCalendar
					plugins={[dayGridPlugin]}
					initialView="dayGridMonth"
				/>
				<Check>
					<div
						style={{
							border: '1px solid',
							width: '100px',
							padding: 'auto',
						}}
					>
						인원
					</div>
					<Person>
						<div style={{ border: '1px solid', width: '100px' }}>
							성인 2명{' '}
						</div>
						<div style={{ border: '1px solid', width: '100px' }}>
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
	width: 100%;
	margin: 30px 0px;
	text-align: center;
	margin: ‘0px 50px’;
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
