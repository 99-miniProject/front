// * react basic import
import React from "react";
import { Route } from "react-router-dom";

// * to use redux
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as campCreators } from "../redux/modules/camp";
import { actionCreators as userActions } from "../redux/modules/user";

// * components import
import { Header, Footer } from "../components";
import { Grid } from "../elements";
import {
    LoginPage,
    MainPage,
    MyPage,
    ReservePage,
    SignupPage,
    DetailPage,
} from "../pages/index";

function App() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(campCreators.getPost());
    }, []);

    React.useEffect(() => {
        dispatch(userActions.postLogInCheck());
    }, []);

    return (
        <>
            <Header />
            <Grid others={"max-width:100vw;margin-top: 5vh;"}>
                <Grid container>
                    <ConnectedRouter history={history}>
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
                        <Route path="/mypage" exact component={MyPage}></Route>
                        <Route
                            path="/reserve/:id"
                            exact
                            component={ReservePage}
                        ></Route>
                        <Route path="/post/:id" exact component={DetailPage} />
                    </ConnectedRouter>
                    {/* <Footer /> */}
                </Grid>
            </Grid>
        </>
    );
}

export default App;
