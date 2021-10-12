// ! kyuung 메인페이지 입니다
// * import Basic
import React from "react";

// * import Components
import { Header, Footer, MainFilter } from "../components/index";
import { Input, Button, Text, Grid, Image } from "../elements/index";
import { MainCard } from "../components/index";

const MainPage = () => {
    return (
        <>
            <Image
                width="100vw"
                height="20rem"
                src="https://my-speak-app.s3.ap-northeast-2.amazonaws.com/camp.jpg"
            >
                <Text color="white" center fontSize="3rem">
                    타이틀 !
                </Text>
            </Image>
            <MainFilter />
            <div style={{ display: "flex" }}>
                <MainCard />
                <MainCard />
                <MainCard />
            </div>
        </>
    );
};

export default MainPage;
