// ! kyuung
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Grid, Image, Text, Button } from "../elements/index";

const MainCard = (props) => {
    const { camp_id, camp_name, camp_price, camp_src, _onClick } = props;

    return (
        <>
            <PointerDiv styles={{ cursor: "pointer" }} onClick={_onClick}>
                <Grid
                    fd="column"
                    jc="start"
                    width="17rem"
                    height="25rem"
                    others={
                        "border-radius:15px; -webkit-box-shadow: 5px 7px 12px 0px gray; box-shadow: 5px 7px 12px 0px gray;margin-bottom:1.3rem; transition: all 300ms ease-in; &:hover{transform: translate(-5px,-5px);box-shadow: 10px 10px 10px grey;}"
                    }
                >
                    <Image
                        width="17rem"
                        height="17rem"
                        src={camp_src}
                        others={
                            "border-top-left-radius: 15px;border-top-right-radius: 15px;"
                        }
                    />
                    <Grid
                        width="15rem"
                        padding="16px"
                        ai="start"
                        jc="space-between"
                        fd="column"
                    >
                        <Grid width="100%" fd="column" ai="start">
                            <Text bold="700" fontSize="1.2rem">
                                {props.camp_name}
                            </Text>
                            <Grid ai="end">
                                <Text fontSize="2rem" color="#1fe3cc">
                                    {props.camp_price}
                                </Text>
                                <Text
                                    color="gray"
                                    others="margin:0px 0px 3px 3px;"
                                >
                                    원
                                </Text>
                            </Grid>
                            <Grid others={"align-self:end;"}>
                                <Text
                                    bold="700"
                                    color="gray"
                                    others={"text-align:center;"}
                                >
                                    예약하기
                                </Text>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </PointerDiv>
        </>
    );
};

MainCard.defaultProps = {
    camp_id: 1,
    camp_name: "숲 캠핑장",
    camp_price: "85,000 ~ 100,000",
    camp_src: "https://my-speak-app.s3.ap-northeast-2.amazonaws.com/camp.jpg",
    _onClick: () => {},
};

const PointerDiv = styled.div`
    cursor: pointer;
`;

export default MainCard;
