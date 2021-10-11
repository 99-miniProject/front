import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
	const { width, height, bradius, otherStyles, src } = props;
	const styles = { width, height, bradius, otherStyles, src };

	return (
		<>
			<ElImage {...styles} />
		</>
	);
};

Image.defaultProps = {
	width: '15rem',
	height: '15rem',
	bradius: '0px',
	src: 'https://my-speak-app.s3.ap-northeast-2.amazonaws.com/cat1.jpeg',
	otherStyles: '',
};

const ElImage = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: ${(props) => props.bradius};
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	${(props) => props.otherStyles};
`;

export default Image;
