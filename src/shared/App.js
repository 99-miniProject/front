import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
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
    return (
        <>
            <Header />
            <Grid others={"max-width:100vw;"}>
                <Grid container>
                    <BrowserRouter>
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
                            path="/reserve"
                            exact
                            component={ReservePage}
                        ></Route>
                        <Route path="/post/:id" exact component={DetailPage} />
                    </BrowserRouter>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}

export default App;
