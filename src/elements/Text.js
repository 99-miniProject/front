// ! kyuung
import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
	const { fontSize, bold, center, color, others, children } = props;
	const styles = {
		fontSize,
		bold,
		center,
		color,
		others,
	};
	return (
		<>
			<ElText {...styles}>{children}</ElText>
		</>
	);
};

Text.defaultProps = {
	fontSize: '14px',
	bold: 400,
	center: '',
	color: 'black',
	children: 'child',
	others: '',
};

const ElText = styled.div`
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.bold};
	color: ${(props) => props.color};
	${(props) => (props.center ? `text-align: center` : '')};
	${(props) => props.others};
`;

export default Text;
