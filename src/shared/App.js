// * react basic import
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// * to use redux
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as campCreators } from '../redux/modules/camp';
import { actionCreators as userActions } from '../redux/modules/user';

// * components import
import { Header, Footer, NotFound } from '../components';
import { Grid } from '../elements';
import {
	LoginPage,
	MainPage,
	MyPage,
	ReservePage,
	SignupPage,
	DetailPage,
} from '../pages/index';

function App() {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(campCreators.getPost());
	}, []);

	React.useEffect(() => {
		dispatch(userActions.postLogInCheck());
	}, []);

	return (
		<React.Fragment>
			<Header />
			<Grid fd={'column'} others={'max-width:100vw; min-height:100vh;'}>
				<Grid container>
					<ConnectedRouter history={history}>
						<Switch>
							<Route path="/" exact component={MainPage}></Route>
							<Route
								path="/login"
								exact
								component={LoginPage}
							></Route>
							<Route
								path="/signup"
								exact
								component={SignupPage}
							></Route>
							<Route
								path="/mypage"
								exact
								component={MyPage}
							></Route>
							<Route
								path="/books/:id"
								exact
								component={ReservePage}
							></Route>
							<Route
								path="/camps/:id"
								exact
								component={DetailPage}
							/>
							<Route exact component={NotFound} />
						</Switch>
					</ConnectedRouter>
				</Grid>
				<Footer />
			</Grid>
		</React.Fragment>
	);
}

export default App;
