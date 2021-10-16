import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Button, Text, Grid } from "../elements/index";
import { actionCreators as campCreators } from "../redux/modules/camp";

const MainFilter = (props) => {
    const dispatch = useDispatch();
    const filterNames = ["전체", "애견", "차박", "글램핑", "당일예약"];

    return (
        <>
            <Grid others="margin-top:1.5rem;margin-bottom:1.5rem;">
                <section>
                    <Grid width="900px" jc="space-between">
                        {filterNames.map((name, idx) => (
                            <Button
                                _onClick={(e) => {
                                    dispatch(
                                        campCreators.setFilter(
                                            e.target.innerText
                                        )
                                    );
                                }}
                                key={idx}
                                width="8rem"
                                height="2.6rem"
                                bgColor="black"
                                fontColor="white"
                                bradius="15px"
                                others="&:hover{background-color:white;color:black;border:1px solid gray;}"
                            >
                                {name}
                            </Button>
                        ))}
                    </Grid>
                </section>
            </Grid>
        </>
    );
};

export default MainFilter;
