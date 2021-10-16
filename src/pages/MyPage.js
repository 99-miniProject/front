import React from 'react';
import { Grid, Button, Input, Text, Image } from '../elements/index';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as campCreators } from '../redux/modules/camp';
import axios from 'axios';
import { getCookie, getIdFromToken } from '../shared/Cookie';
const MyPage = () => {
	axios
		.get('http://jhhong0930.shop/mypage', {
			headers: { 'X-AUTH-TOKEN': getCookie('token') },
		})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});

	const dispatch = useDispatch();
	const review_list = useSelector((state) => state.camp.reviews);
	console.log(review_list);
	const [campId, count, checkinDate] = ['캠프장이름', '3명', '2021-01-01'];
	const [_reserves, setReserves] = React.useState([
		campId,
		checkinDate,
		count,
	]);
	return (
		<React.Fragment>
			<Grid width={'70vw'} margin={'20px 0px'} fd={'column'}>
				<Grid
					width={'100%'}
					ai={'start'}
					jc={'start'}
					margin={'0px 0px 20px 0px'}
					others={'border-bottom:1px solid gray;'}
				>
					<Grid>
						<Button others={'background: none; cursor:pointer;'}>
							<Text fontSize={'2rem'} bold={'700'}>
								예약내역
							</Text>
						</Button>
					</Grid>
					<Grid>
						<Button others={'background: none; cursor:pointer;'}>
							<Text fontSize={'2rem'} bold={'700'}>
								이전내역
							</Text>
						</Button>
					</Grid>
				</Grid>
				{_reserves.map((reserves, idx) => {
					return (
						<Grid
							width={'100%'}
							jc={'start'}
							margin={'0px 0px 20px 0px'}
							others={'border:1px solid lightgray;'}
						>
							<Grid margin={'0px 20px 0px 0px'}>
								<Image></Image>
							</Grid>
							<Grid fd={'column'} ai={'start'}>
								<Text>캠핑장 이름 : {_reserves[0]}</Text>
								<Text>예약날짜 : {_reserves[1]}</Text>
								<Text>인원수 : {_reserves[2]}</Text>
							</Grid>
						</Grid>
					);
				})}
			</Grid>
		</React.Fragment>
	);
};
export default MyPage;
