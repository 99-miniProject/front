import React from "react";
import { history } from "../redux/configStore";
import { Grid, Text, Button } from "../elements";

const NotFound = (props) => {
    return (
        <React.Fragment>
            <Grid width={"70vw"} height={"60vh"} margin={"20px 0px"}>
                <Grid width={"100%"}>
                    <Grid>
                        주소가
                        <br />
                        올바르지 않아요!
                    </Grid>
                    <Grid>
                        <Button
                            _onClick={() => {
                                history.push("/");
                            }}
                        >
                            메인으로 돌아가기
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default NotFound;
