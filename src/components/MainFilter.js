// ! kyuung 메인페이지 필터 부분입니다
import React from 'react';
import styled from 'styled-components';

import { Button, Text } from '../elements/index';

const MainFilter = () => {
	return (
		<>
			<section>
				<div>
					<Button
						width="6rem"
						height="3rem"
						fontColor="white"
						bgColor="black"
					>
						필터1
					</Button>
					<Button
						width="6rem"
						height="3rem"
						fontColor="white"
						bgColor="black"
					>
						필터2
					</Button>
					<Button
						width="6rem"
						height="3rem"
						fontColor="white"
						bgColor="black"
					>
						필터3
					</Button>
					<Button
						width="6rem"
						height="3rem"
						fontColor="white"
						bgColor="black"
					>
						필터4
					</Button>
					<Button
						width="6rem"
						height="3rem"
						fontColor="white"
						bgColor="black"
					>
						필터5
					</Button>
					<Button
						width="6rem"
						height="3rem"
						fontColor="white"
						bgColor="black"
					>
						필터6
					</Button>
					<Button
						width="6rem"
						height="3rem"
						fontColor="white"
						bgColor="black"
					>
						필터7
					</Button>
				</div>
			</section>
		</>
	);
};

export default MainFilter;
