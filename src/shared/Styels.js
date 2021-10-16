const chooseTagColor = (filter) => {
	switch (filter) {
		case '글램핑장':
			return '#94B9F3';
		case '애견':
			return '#FAE49E';
		case '당일예약':
			return '#364545';
		case '차박':
			return '#869072';
		default:
			return '#94B9F3';
	}
};

const styles = { chooseTagColor };

export { styles };
