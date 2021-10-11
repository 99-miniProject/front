// ! kyuung
import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
	const {
		width,
		height,
		fontSize,
		otherStyles,
		_onChange,
		placeholder,
		text,
	} = props;
	const styles = { width, height, fontSize, otherStyles };

	return (
		<>
			<label>{text}</label>
			<ElInput
				{...styles}
				onChange={_onChange}
				placeholder={props.placeholder}
			/>
		</>
	);
};

Input.defaultProps = {
	width: '100%',
	height: '3rem',
	fontSize: '14px',
	_onChange: () => {},
	placeholder: 'placeholder',
	text: 'label',
};

const ElInput = styled.input`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	font-size: ${(props) => props.fontSize};
	${(props) => props.otherStyles};
	padding-left: 0.5rem;
	margin-top: 1rem;
`;

export default Input;
