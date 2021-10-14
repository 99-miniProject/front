import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as userCreators } from '../redux/modules/user';
// import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';

import { Grid, Text, Input, Button } from '../elements';

const LoginPage = (props) => {
	const dispatch = useDispatch();
	const [id, setId] = React.useState('');
	const [pwd, setPwd] = React.useState('');
	const login = () => {
		const user_info = { id, pwd };
		dispatch(userCreators.postLogin(user_info));
	};

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
							로그인
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
								setId(e.target.value);
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
								setPwd(e.target.value);
							}}
						/>
					</Grid>

					<Grid
						width={'100%'}
						jc={'space-between'}
						padding={'16px 0px'}
					>
						<Grid
							width={'100%'}
							padding={'12px'}
							others={
								'border: 1px solid lightgray; lightgray; border-radius: 50px; margin-right: 16px; cursor: pointer;'
							}
						>
							<Button
								// _onClick={() => {
								// 	history.push('/signup');
								// }}
								bgColor={'white'}
							>
								<Text color={'gray'} fontSize={'13px'}>
									회원가입 하러가기
								</Text>
							</Button>
						</Grid>
						<Grid
							width={'100%'}
							padding={'12px'}
							others={
								'border: 1px solid lightgray; lightgray; border-radius: 50px; cursor: pointer;'
							}
						>
							<Button _onClick={login} bgColor={'white'}>
								<Text color={'gray'} fontSize={'13px'}>
									로그인하기
								</Text>
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default LoginPage;
