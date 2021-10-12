// ! kyuung
import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
	const {
		width,
		height,
		fontSize,
		bradius,
		others,
		_onChange,
		placeholder,
		text,
	} = props;
	const styles = { width, height, bradius, fontSize, others };

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
	bradius: '',
	_onChange: () => {},
	placeholder: 'placeholder',
	text: 'label',
	others: '',
};

const ElInput = styled.input`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	font-size: ${(props) => props.fontSize};
	${(props) => props.others};
	padding-left: 0.5rem;
	margin-top: 1rem;
	border-radius: ${(props) => props.bradius};
	border: 1px solid gray;
`;

export default Input;
