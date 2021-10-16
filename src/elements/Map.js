/*global kakao*/
import React, { useEffect } from 'react';

const Map = (props) => {
	const { lat, lng } = props;
	console.log('>>>>', props);
	useEffect(() => {
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(lat, lng),
			level: 4,
		};
		var map = new kakao.maps.Map(container, options);
	}, [props]);

	return (
		<div>
			<div
				id="map"
				style={{
					width: '20rem',
					height: '20rem',
					borderRadius: '2rem',
					marginBottom: '1.3rem',
					boxShadow: '5px 7px 12px 0px rgba(0,0,0,0.78)',
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
