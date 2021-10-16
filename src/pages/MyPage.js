import React from 'react';
import { Grid, Button, Input, Text, Image } from '../elements/index';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as campCreators } from '../redux/modules/camp';
import axios from 'axios';
import { getCookie, getIdFromToken } from '../shared/Cookie';
const MyPage = () => {
	const dispatch = useDispatch();

	const reserve_list = useSelector((state) => state.camp.reserve);

	React.useEffect(() => {
		dispatch(campCreators.getReserve());
	}, []);

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
				</Grid>
				{reserve_list?.length > 0 ? (
					reserve_list.map((reserves, idx) => {
						return (
							<Grid
								width={'100%'}
								jc={'start'}
								margin={'0px 0px 20px 0px'}
								others={
									'border:1px solid lightgray;position:relative'
								}
								key={idx}
							>
								<Grid
									jc="space-between"
									width="100%"
									ai="flex-start"
								>
									<Grid>
										<Grid margin={'0px 20px 0px 0px'}>
											<Image
												src={reserves?.camp?.img}
												width={'10rem'}
												height={'10rem'}
											></Image>
										</Grid>
										<Grid fd={'column'} ai={'start'}>
											<Text
												fontSize={'1.5rem'}
												bold={'500'}
												others={'margin-bottom: 10px;'}
											>
												{reserves?.camp?.name}
											</Text>
											<Text fontSize={'1rem'}>
												예약날짜 : {''}
												{
													reserves?.checkinDate?.split(
														'T'
													)[0]
												}
											</Text>
											<Text fontSize={'1rem'}>
												인원수 : {reserves.count}
											</Text>
										</Grid>
									</Grid>
									<Button
										width="2.5rem"
										height="2.5rem"
										others="margin:0.5rem;&:hover{opacity:80%};"
										bradius="10px"
										bgColor="#FF6347"
										_onClick={() => {
											const q =
												window.confirm(
													'예약를 삭제하시겠습니까 ? '
												);
											if (q) {
												console.log(
													'abc',
													reserves?.id
												);
												dispatch(
													campCreators.deleteReserve(
														reserves?.id
													)
												);
											}
										}}
									>
										<Text
											bold="700"
											color="white"
											fontSize="1.2rem"
										>
											X
										</Text>
									</Button>
								</Grid>
							</Grid>
						);
					})
				) : (
					<Grid width="100vw" height="50vh">
						<Text bold="700" fontSize="2.5rem">
							현재 예약된 내용이 없습니다.
						</Text>
					</Grid>
				)}
			</Grid>
		</React.Fragment>
	);
};
export default MyPage;
