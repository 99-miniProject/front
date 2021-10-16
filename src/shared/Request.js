import axios from 'axios';
import { getCookie } from './Cookie';

const instance = axios.create({
	baseURL: 'http://jhhong0930.shop',
	headers: { 'X-AUTH-TOKEN': getCookie('token') },
});

export default instance;
