import React from "react";
import styled from "styled-components";

import { Button, Text, Grid } from "../elements/index";

const MainFilter = () => {
    const filterNames = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <Grid others="margin-top:1.5rem;margin-bottom:1.5rem;">
                <section>
                    <Grid width="70vw" jc="space-between">
                        {filterNames.map((name, idx) => (
                            <Button
                                key={idx}
                                width="6rem"
                                height="2.6rem"
                                bgColor="black"
                                fontColor="white"
                                bradius="15px"
                                others="&:hover{background-color:white;color:black;border:1px solid gray;}"
                            >
                                필터{name}
                            </Button>
                        ))}
                    </Grid>
                </section>
            </Grid>
        </>
    );
};

export default MainFilter;
