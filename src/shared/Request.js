import axios from 'axios';

const BASE_URL = 'http://54.180.132.5/';

const instance = axios.create({
	BASE_URL,
});

export default instance;
