import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import {
	LoginPage,
	MainPage,
	MyPage,
	ReservePage,
	SignupPage,
	DetailPage,
} from '../pages/index';

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Route path="/" exact component={MainPage}></Route>
				<Route path="/login" exact component={LoginPage}></Route>
				<Route path="/signup" exact component={SignupPage}></Route>
				<Route path="/mypage" exact component={MyPage}></Route>
				<Route path="/reserve" exact component={ReservePage}></Route>
				<Route path="/post/:id" exact component={DetailPage} />
			</BrowserRouter>
		</>
	);
}

export default App;
