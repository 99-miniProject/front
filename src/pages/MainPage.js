// * import Basic
import React from "react";

// * import Components
import { Header, Footer, MainFilter, MainCard } from "../components/index";
import { Input, Button, Text, Grid, Image } from "../elements/index";
import axios from "axios";

const MainPage = (props) => {
    let camp_list = [];
    React.useEffect(() => {
        axios
            .get("http://54.180.132.5/")
            .then(function (response) {
                camp_list = response.data;
                console.log(camp_list);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Grid fd="column" width="100vw">
                <Image
                    width="100vw"
                    height="20rem"
                    src="https://my-speak-app.s3.ap-northeast-2.amazonaws.com/camp.jpg"
                >
                    <Grid width="100%" height="100%">
                        <Text color="white" center fontSize="3rem">
                            Camping Camping
                        </Text>
                    </Grid>
                </Image>
                <MainFilter />
                <Grid
                    jc="space-between"
                    width="70vw"
                    height="50vh"
                    others="flex-wrap:wrap"
                >
                    {camp_list.map((data, idx) => (
                        <MainCard
                            index={idx}
                            camp_id={data.id}
                            camp_name={data.name}
                            camp_price={data.price}
                            camp_src={data.img}
                        />
                    ))}
                </Grid>
            </Grid>
        </>
    );
};

export default MainPage;
