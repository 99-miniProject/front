import React from 'react';

import { Grid, Text, Input, Button } from '../elements';

const SignupPage = (props) => {
	const { history } = props;
	return (
		<React.Fragment>
			<Grid width={'70vw'} height={'60vh'} margin={'20px 0px'}>
				<Grid width={'100%'} fd={'column'} padding={'16px'}>
					<Grid
						width={'100%'}
						jc={'start'}
						others={
							'border-bottom: 1px solid lightgray; margin-bottom: 20px;'
						}
					>
						<Text fontSize={'32px'} bold={'700'}>
							회원가입
						</Text>
					</Grid>

					<Grid
						ai={'start'}
						fd={'column'}
						width={'100%'}
						padding={'0px 0px 20px 0px'}
					>
						<Grid margin={'0px 0px 5px 0px'}>
							<Text color={'gray'}>아이디</Text>
						</Grid>
						<Input
							placeholder="아이디를 입력해주세요."
							_onChange={(e) => {
								// setId(e.target.value);
							}}
						/>
					</Grid>

					<Grid
						ai={'start'}
						fd={'column'}
						width={'100%'}
						padding={'0px 0px 20px 0px'}
					>
						<Grid margin={'0px 0px 5px 0px'}>
							<Text color={'gray'}>닉네임</Text>
						</Grid>
						<Input
							placeholder="닉네임을 입력해주세요."
							_onChange={(e) => {
								// setId(e.target.value);
							}}
						/>
					</Grid>

					<Grid
						ai={'start'}
						fd={'column'}
						width={'100%'}
						padding={'0px 0px 20px 0px'}
					>
						<Grid margin={'0px 0px 5px 0px'}>
							<Text color={'gray'}>비밀번호</Text>
						</Grid>
						<Input
							placeholder="비밀번호를 입력해주세요."
							type="password"
							_onChange={(e) => {
								// setPwd(e.target.value);
							}}
						/>
					</Grid>

					<Grid
						ai={'start'}
						fd={'column'}
						width={'100%'}
						padding={'0px 0px 20px 0px'}
					>
						<Grid margin={'0px 0px 5px 0px'}>
							<Text color={'gray'}>비밀번호 확인</Text>
						</Grid>
						<Input
							placeholder="비밀번호를 다시 한 번 입력해주세요."
							type="password"
							_onChange={(e) => {
								// setPwd(e.target.value);
							}}
						/>
					</Grid>

					<Grid
						width={'100%'}
						padding={'12px 0px'}
						others={
							'margin-top:16px; border: 1px solid lightgray; border-radius: 50px; cursor: pointer;'
						}
					>
						<Button
							_onClick={() => {
								history.push('/signup');
							}}
							bgColor={'white'}
						>
							<Text color={'gray'} fontSize={'13px'}>
								회원가입하기
							</Text>
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default SignupPage;
