import React from "react";
import { Grid, Text } from "../elements";

const Footer = () => {
    return (
        <Grid
            bg={"#add8ff"}
            padding={"16px;"}
            others={"z-index:2;margin-top: auto;"}
            width={"100vw"}
        >
            <Grid fd={"column"}>
                <Grid padding={"16px"}>
                    <Text color={"#194974"} fontSize={"1.5rem"} bold={"700"}>
                        항해99 - 11조 miniproject
                    </Text>
                </Grid>
                <Grid
                    padding={"16px 0px"}
                    others={"border-top: 1px solid #7e7d7d;"}
                >
                    <Grid ai={"start"} others={"margin-right: 50px;"}>
                        <Grid margin={"0px 10px 0px 0px"}>
                            <Text bold={700}>Frontend</Text>
                        </Grid>
                        <Text>
                            https://github.com/99-miniProject/front.git
                            <br />
                            윤진선 이경아
                        </Text>
                    </Grid>
                    <Grid ai={"start"}>
                        <Grid margin={"0px 10px 0px 0px"}>
                            <Text bold={700}>Backend</Text>
                        </Grid>
                        <Text>
                            https://github.com/99-miniProject/back.git
                            <br />
                            김태웅 홍태환
                        </Text>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;
