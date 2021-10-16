import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as campCreators } from '../redux/modules/camp';
import { Grid, Button, Input, Text, Image } from '../elements/index';

//데이 피커
import DayPicker from 'react-day-picker';
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

	const [reserveCtn, setReserveCtn] = React.useState(0);
	const [_checkIn, setCheckIn] = React.useState('');

	const toDate = new Date(_checkIn);

	const reserve = () => {
		if (_checkIn === '' || reserveCtn === 0) {
			window.alert('인원수와 날짜를 모두 설정해주세요.');
			return;
		}
		const review_info = {
			camp_id: post_id,
			count: reserveCtn,
			checkIn: toDate,
		};
		dispatch(campCreators.postReserve(review_info));
	};

	const selects = () => {
		let array = [];
		for (let i = 0; i < _camps?.capacity + 1; i++) {
			array.push(<option key={i}>{i}</option>);
		}
		return array;
	};

	return (
		<>
			<Grid width="70vw" fd="column">
				<Grid width="70vw">
					<Text
						fontSize="3.5rem"
						bold="700"
						others="margin-top:2rem;"
						center
					>
						{_camps?.name}
					</Text>
				</Grid>
				<Grid>
					<Grid width="40vw" fd="column">
						<Grid width="40vw" others="margin-top:2rem;">
							<Image
								others="-webkit-box-shadow: 5px 7px 12px 0px rgba(0,0,0,0.78); 
							box-shadow: 5px 7px 12px 0px rgba(0,0,0,0.78);margin-bottom:2rem;margin-top:0.5rem;"
								bradius="18px"
								src={_camps?.img}
								width="20rem"
								height="20rem"
							/>
						</Grid>
						<Grid fd="column" width="40vw" jc="left">
							<Grid
								width="100%"
								jc="left"
								others="margin-left:20rem;margin-bottom:2rem;"
							>
								<Text
									fontSize="1.6rem"
									bold="700"
									center
									others="margin-right:2.5rem"
								>
									가격
								</Text>
								<Text fontSize="1.3rem">
									{_camps?.price} 원
								</Text>
							</Grid>
							<Grid
								width="100%"
								jc="left"
								others="margin-left:20rem"
							>
								<Text
									fontSize="1.6rem"
									bold="700"
									center
									others="margin-right:2.5rem"
								>
									인원
								</Text>
								<Text fontSize="1.3rem">
									{_camps?.capacity} 명
								</Text>
							</Grid>
						</Grid>
					</Grid>
					<Grid fd="column" width="30vw">
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
							<Text
								bold="700"
								fontSize="1.5rem"
								others="margin-top:0.7rem;margin-bottom:1.5rem"
							>
								체크인 날짜 :{' '}
								{_checkIn.slice(-1) === '-'
									? _checkIn.slice(0, -1)
									: _checkIn}
							</Text>
						</Grid>
						<Grid jc="center" ai="center">
							<Text
								bold="700"
								fontSize="1.5rem"
								others="margin-left:2.5rem"
							>
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
					</Grid>
				</Grid>
			</Grid>
			<Grid>
				<Grid
					fd="row"
					jc="center"
					width="70vw"
					others="margin-top:2rem;margin-bottom:4rem"
				>
					<Button
						width="20rem"
						height="4rem"
						bradius="20px"
						_onClick={reserve}
						others="margin-left:5rem;&:hover{opacity:80%};"
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
