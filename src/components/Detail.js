import React from 'react';
import { Input, Button, Text, Grid, Image } from '../elements/index';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configStore';

const Detail = (props) => {
	const { post_id } = props;
	const camp_list = useSelector((state) => state.camp.list);
	const [_camps, setCamps] = React.useState({});
	React.useEffect(() => {
		const refCamp = camp_list.filter((camp) => camp.id === Number(post_id));
		setCamps(refCamp[0]);
	}, [camp_list]);
	return (
		<>
			<Text fontSize="4rem" bold="700" others="margin:2rem;">
				{_camps?.name}
			</Text>
			<Image
				others="-webkit-box-shadow: 5px 7px 12px 0px rgba(0,0,0,0.78); 
							box-shadow: 5px 7px 12px 0px rgba(0,0,0,0.78);margin-bottom:1.3rem;"
				bradius="18px"
				src={_camps?.img}
			/>
			<Text
				fontSize="2rem"
				bold="700"
				others="margin-top:3.8rem;margin-bottom:1.2rem;padding-left:5rem;"
				center
			>
				{_camps?.category} / {_camps?.address}
			</Text>
			<Grid width="70vw" jc="space-between">
				<Grid fd="column" width="25vw">
					<Grid
						width="25vw"
						jc="left"
						others="margin-left:20vw;margin-bottom:2rem;"
					>
						<Text
							fontSize="2.3rem"
							bold="700"
							center
							others="margin-right:2.5rem"
						>
							가격
						</Text>
						<Text fontSize="1rem">{_camps?.price}</Text>
					</Grid>
					<Grid width="25vw" jc="left" others="margin-left:20vw">
						<Text
							fontSize="2.3rem"
							bold="700"
							center
							others="margin-right:2.5rem"
						>
							인원
						</Text>
						<Text fontSize="1rem">{_camps?.capacity}명</Text>
					</Grid>
				</Grid>
				<Grid width="35vw">
					<Text center>{_camps?.info}</Text>
				</Grid>
			</Grid>
			<Button
				width="30rem"
				height="3rem"
				bradius="15px"
				others="margin-top:2rem;&:hover{opacity:80%}"
				_onClick={() => {
					history.push(`/books/${_camps.id}`);
				}}
			>
				예약하러가기
			</Button>
		</>
	);
};

export default Detail;
