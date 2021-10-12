import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
	const {
		children,
		fd,
		jc,
		ai,
		width,
		height,
		margin,
		padding,
		z,
		others,
		mediaQuery,
	} = props;
	const styles = {
		fd,
		jc,
		ai,
		width,
		height,
		margin,
		padding,
		z,
		others,
		mediaQuery,
	};

	return (
		<>
			<Flexbox {...styles}>{children}</Flexbox>
		</>
	);
};

Grid.defaultProps = {
	children: 'child',
	fd: 'row',
	jc: 'center',
	ai: 'center',
	width: false,
	height: false,
	margin: false,
	padding: false,
	z: 1,
	mediaQuery: false,
};

const Flexbox = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	display: flex;
	flex-direction: ${(props) => props.fd};
	justify-content: ${(props) => props.jc};
	align-items: ${(props) => props.ai};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	z-index: ${(props) => props.z};
	${(props) => props.others};
`;

export default Grid;
