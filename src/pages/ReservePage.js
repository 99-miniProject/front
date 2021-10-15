import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as campCreators } from '../redux/modules/camp';
import { Grid, Button, Input, Text, Image } from '../elements/index';

//데이 피커
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const ReservePage = (props) => {
	const dispatch = useDispatch();
	const post_id = props.match.params.id;

	const camp_list = useSelector((state) => state.camp.list);
	const [_camps, setCamps] = React.useState({});

	React.useEffect(() => {
		const refCamp = camp_list.filter((camp) => camp.id === Number(post_id));
		setCamps(refCamp[0]);
	}, [camp_list]);

	// const refCapacity = refCamp[0].capacity;

	const [reserveCtn, setReserveCtn] = React.useState(0);
	const [_checkIn, setCheckIn] = React.useState('');

	const toDate = new Date(_checkIn);

	const reserve = () => {
		const review_info = {
			camp_id: post_id,
			count: reserveCtn,
			checkIn: toDate,
		};
		dispatch(campCreators.postReserve(review_info));
	};

	const selects = () => {
		let array = [];
		for (let i = 1; i < _camps?.capacity + 1; i++) {
			array.push(<option key={i}>{i}</option>);
		}
		return array;
	};

	return (
		<>
			<Grid width="60vw">
				<Grid width="60vw" fd="column">
					<Text fontSize="4rem" bold="700" others="margin:2rem;">
						{_camps?.name}
					</Text>
					<Image
						others="-webkit-box-shadow: 5px 7px 12px 0px rgba(0,0,0,0.78); 
							box-shadow: 5px 7px 12px 0px rgba(0,0,0,0.78);margin-bottom:1.3rem;"
						bradius="18px"
						src={_camps?.img}
					/>
					<Grid fd="column" width="50vw" jc="left">
						<Grid
							width="100%"
							jc="left"
							others="margin-left:20vw;margin-bottom:2rem;"
						>
							<Text
								fontSize="1.6rem"
								bold="700"
								center
								others="margin-right:2.5rem"
							>
								가격
							</Text>
							<Text fontSize="1rem">{_camps?.price}</Text>
						</Grid>
						<Grid width="100%" jc="left" others="margin-left:20vw">
							<Text
								fontSize="1.6rem"
								bold="700"
								center
								others="margin-right:2.5rem"
							>
								인원
							</Text>
							<Text fontSize="1rem">{_camps?.capacity}명</Text>
						</Grid>
					</Grid>
				</Grid>
				<Grid fd="column">
					<DayPicker
						format="DD/MM/YYYY"
						onDayClick={(e) => {
							let day = e.toLocaleDateString();
							day = day.replaceAll('.', '-');
							day = day.replaceAll(' ', '');
							day = day.slice(0, 10);
							setCheckIn(day);
						}}
					/>
					<Text bold="700">체크인 날짜 : {_checkIn}</Text>
				</Grid>
			</Grid>
			<Grid>
				<Grid
					fd="row"
					jc="space-between"
					width="60vw"
					others="margin-top:4rem"
				>
					<Grid jc="center" ai="center">
						<Text bold="700" fontSize="1.6rem">
							예약 할 인원수
						</Text>
						<Select
							onChange={(e) => {
								setReserveCtn(e.target.value);
							}}
						>
							{selects()}
						</Select>
					</Grid>
					<Button
						width="14rem"
						height="4rem"
						bradius="30px"
						_onClick={reserve}
					>
						<Text color="white" bold="700" fontSize="1.8rem">
							예약하기
						</Text>
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

const Select = styled.select`
	width: 5rem;
	height: 2rem;
	font-size: 1.5rem;
	margin-left: 1rem;
`;
export default ReservePage;
