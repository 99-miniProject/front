// ! kyuung
import React from 'react';
import styled from 'styled-components';

import { AccountCircle } from '@material-ui/icons';
import { ExitToAppSharp } from '@material-ui/icons';

const Button = (props) => {
	const {
		width,
		height,
		fontColor,
		bgColor,
		fontSize,
		bradius,
		others,
		_onClick,
		children,
		myPage,
		logout,
	} = props;

	const styles = {
		width,
		height,
		fontColor,
		bgColor,
		fontSize,
		bradius,
		others,
		myPage,
		logout,
	};

	if (myPage) {
		return (
			<React.Fragment>
				<ElButton onClick={_onClick}>
					<AccountCircle
						style={{
							marginRight: '10px',
							color: '#88d999',
							fontSize: '27px',
							background: '#fff',
							borderRadius: '50px',
						}}
					/>
				</ElButton>
			</React.Fragment>
		);
	}

	if (logout) {
		return (
			<React.Fragment>
				<ElButton onClick={_onClick}>
					<ExitToAppSharp
						style={{
							color: '#b9b9b9',
							fontSize: '27px',
							background: '#fff',
							borderRadius: '50px',
						}}
					/>
				</ElButton>
			</React.Fragment>
		);
	}

	return (
		<>
			<ElButton {...styles} onClick={_onClick}>
				{children}
			</ElButton>
		</>
	);
};

Button.defaultProps = {
	width: false,
	height: false,
	fontColor: 'white',
	bgColor: 'black',
	fontSize: '14px',
	bradius: '0px',
	others: '',
	_onClick: () => {},
};

const ElButton = styled.button`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	color: ${(props) => props.fontColor};
	background-color: ${(props) => props.bgColor};
	font-size: ${(props) => props.fontSize};
	border-radius: ${(props) => props.bradius};
	${(props) => props.others};
	cursor: pointer;
	border: none;
	background: none;
`;

export default Button;
