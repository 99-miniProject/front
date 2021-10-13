import axios from 'axios';

const BASE_URL = 'http://jhhong0930.shop';

const instance = axios.create({
	BASE_URL,
});

export default instance;
