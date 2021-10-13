import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as userCreators } from '../redux/modules/user';

import { Grid, Text, Input, Button } from '../elements';

const SignupPage = (props) => {
	const dispatch = useDispatch();

	// * id, password state
	const [id, setId] = React.useState('');
	const [pwd, setPwd] = React.useState('');
	const [nickName, setNickname] = React.useState('');
	const [pwdChk, setPwdChk] = React.useState('');

	const signup = () => {
		const user_info = { id, nickName, pwd, pwdChk };

		if (id.length < 5) {
			window.alert('아이디는 5자 이상으로 입력해주세요.');
			return;
		} else if (
			id === '' ||
			nickName === '' ||
			pwd === '' ||
			pwdChk === ''
		) {
			window.alert('모든 칸을 입력해주세요.');
			return;
		} else if (pwd.length < 8) {
			window.alert('비밀번호는 8자 이상으로 입력해주세요.');
			return;
		} else if (pwd !== pwdChk) {
			window.alert('비밀번호와 비밀번호 확인이 다릅니다.');
			return;
		} else if (nickName < 2) {
			window.alert('닉네임은 2글자 이상으로 입력해주세요.');
			return;
		}
		dispatch(userCreators.postSignup(user_info));
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
							<Text color={'gray'}>닉네임</Text>
						</Grid>
						<Input
							placeholder="닉네임을 입력해주세요."
							_onChange={(e) => {
								setNickname(e.target.value);
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
								setPwdChk(e.target.value);
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
						<Button _onClick={signup} bgColor={'white'}>
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
