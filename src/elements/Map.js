/*global kakao*/
import React, { useEffect } from 'react';

const Map = (props) => {
	const { lat, lng } = props;
	console.log('>>>>', props);
	useEffect(() => {
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(lat, lng),
			level: 3,
		};
		var map = new kakao.maps.Map(container, options);
	}, []);

	return (
		<div>
			<div
				id="map"
				style={{
					width: '20rem',
					height: '20rem',
					marginLeft: '5rem',
					borderRadius: '30px',
				}}
			></div>
		</div>
	);
};

Map.defaultProps = {
	lat: 37.365264512305174,
	lng: 127.10676860117488,
};

export default Map;
