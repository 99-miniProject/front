// ! kyuung
import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
	const { fontSize, bold, center, color, children } = props;
	const styles = {
		fontSize,
		bold,
		center,
		color,
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
};

const ElText = styled.p`
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.bold};
	color: ${(props) => props.color};
	${(props) => (props.center ? `text-align: center` : '')};
`;

export default Text;
