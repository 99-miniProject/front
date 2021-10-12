import React from "react";
import { Grid, Button, Text } from "../elements";

const Header = (props) => {
    const { history } = props;

    // 로그인 상태일 때
    // if(is_login && is_session){
    //     return(

    //     )
    // }

    return (
        <React.Fragment>
            <Grid
                display
                jc={"space-between"}
                padding={"16px"}
                others={
                    "border-bottom: 1px solid lightgray; position: sticky; top: 0px; background-color: #fff;"
                }
            >
                <Grid width={"false"}>
                    <Text
                        color={"#88d999"}
                        _onClick={() => {
                            history.push("/");
                        }}
                        fontSize={"2.5rem"}
                    >
                        Logo
                    </Text>
                </Grid>
                <Grid width={"false"}>
                    <Button
                        _onClick={() => {
                            history.push("/login");
                        }}
                        bgColor={"#fff"}
                    >
                        <Text fontSize={"13px"} bold={"400"} color={"gray"}>
                            로그인
                        </Text>
                    </Button>
                    <Button
                        _onClick={() => {
                            history.push("/signup");
                        }}
                        bgColor={"#fff"}
                        others={"margin-left: 16px;"}
                    >
                        <Text fontSize={"13px"} bold={"400"} color={"gray"}>
                            회원가입
                        </Text>
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>

        // 로그인 상태일 때
        // <React.Fragment>
        // 	<Grid
        // 		display
        // 		jc={'space-between'}
        // 		padding={'16px'}
        // 		others={
        // 			'border-bottom: 1px solid lightgray; position: sticky; top: 0px; background-color: #fff;'
        // 		}
        // 	>
        // 		<Grid width={'false'}>
        // 			<Text
        // 				color={'#88d999'}
        // 				_onClick={() => {
        // 					history.push('/');
        // 				}}
        // 				fontSize={'2.5rem'}
        // 			>
        // 				Logo
        // 			</Text>
        // 		</Grid>
        // 		<Grid width={'false'}>
        // 			<Button
        // 				myPage
        // 				_onClick={() => {
        // 					history.push('/mypage');
        // 				}}
        // 			></Button>
        // 			<Button
        // 				logout
        // 				_onClick={() => {
        // 					console.log('로그아웃 시켜주기');
        // 				}}
        // 				others={'cursor: pointer; margin-left: 16px;'}
        // 			></Button>
        // 		</Grid>
        // 	</Grid>
        // </React.Fragment>
    );
};

Header.defaultProps = {};

export default Header;
