import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Text, Grid } from '../elements/index';
import { actionCreators as campCreators } from '../redux/modules/camp';

const MainFilter = (props) => {
	const filterNames = ['전체', '애견', '차박', '글램핑', '당일'];
	const camp_list = useSelector((state) => state.camp.list);
	const dispatch = useDispatch();

	const _filter = (value) => {
		if (value === '전체') {
			console.log('>>value 전체', value);
			const result = camp_list;
			dispatch(campCreators.setFilter(result));
		} else {
			console.log('>>value 전체아님', value);
			const result = camp_list.filter((camp) =>
				camp.category.includes(value)
			);
			dispatch(campCreators.setFilter(result));
		}
	};

	return (
		<>
			<Grid others="margin-top:1.5rem;margin-bottom:1.5rem;">
				<section>
					<Grid width="70vw" jc="space-between">
						{filterNames.map((name, idx) => (
							<Button
								_onClick={(e) => {
									_filter(e.target.innerText);
								}}
								key={idx}
								width="8rem"
								height="2.6rem"
								bgColor="black"
								fontColor="white"
								bradius="15px"
								others="&:hover{background-color:white;color:black;border:1px solid gray;}"
							>
								{name}
							</Button>
						))}
					</Grid>
				</section>
			</Grid>
		</>
	);
};

export default MainFilter;
