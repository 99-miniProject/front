import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { Grid, Text, Input, Button } from "../elements";
import { idCheck, nickCheck, pwCheck } from "../shared/regExp";

const SignupPage = ({ history }) => {
    const isLogin = useSelector((store) => store.user.is_login);
    const dispatch = useDispatch();
    const [id, setId] = React.useState("");
    const [nick, setNickname] = React.useState("");
    const [pw, setPw] = React.useState("");
    const [pwcheck, setPwCheck] = React.useState("");

    useEffect(() => {
        if (isLogin) history.push("/");
    });

    const signUp = () => {
        if (id === "" || nick === "" || pw === "" || pwcheck === "") {
            window.alert("아이디,비밀번호,닉네임을 모두 입력해주세요!");
            return;
        }

        if (id.length < 5 || id.length > 12) {
            window.alert("아이디는 5자 이상 12자 이하로 작성해주세요.");
            return;
        } else if (!idCheck(id)) {
            window.alert("숫자 및 영어만 입력가능합니다.");
            return;
        }

        if (nick.length < 2 || nick.length > 10) {
            window.alert("닉네임은 2자 이상 10자 이하로 작성해주세요.");
            return;
        } else if (!nickCheck(nick)) {
            window.alert("숫자, 한글, 영어만 입력가능합니다.");
            return;
        }

        if (pw.length < 8 || pw.length > 16) {
            window.alert("비밀번호는 8자 이상 16자 이하로 작성해주세요.");
            return;
        } else if (!pwCheck(pw)) {
            window.alert("숫자 및 영어만 입력가능합니다.");
            return;
        }

        if (pw !== pwcheck) {
            window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        dispatch(userActions.postSignup(id, nick, pw, pwcheck));
    };

    return (
        <React.Fragment>
            <Grid
                width={"40vw"}
                height={"70vh"}
                margin={"20px 0px"}
                others={"min-height:60vh"}
            >
                <Grid width={"100%"} fd={"column"} padding={"16px"}>
                    <Grid
                        width={"100%"}
                        jc={"start"}
                        others={
                            "border-bottom: 1px solid lightgray; margin-bottom: 20px;"
                        }
                    >
                        <Text fontSize={"32px"} bold={"700"}>
                            회원가입
                        </Text>
                    </Grid>

                    <Grid
                        ai={"start"}
                        fd={"column"}
                        width={"100%"}
                        padding={"0px 0px 20px 0px"}
                    >
                        <Grid margin={"0px 0px 5px 0px"}>
                            <Text color={"gray"}>아이디</Text>
                        </Grid>
                        <Input
                            value={id}
                            placeholder={"아이디를 입력해주세요."}
                            _onChange={(e) => {
                                setId(e.target.value);
                            }}
                        />
                        <Text fontSize={"0.8rem"} color={"gray"}>
                            아이디는 영어와 숫자로 구성한 5~12자로 입력해주세요.
                        </Text>
                    </Grid>

                    <Grid
                        ai={"start"}
                        fd={"column"}
                        width={"100%"}
                        padding={"0px 0px 20px 0px"}
                    >
                        <Grid margin={"0px 0px 5px 0px"}>
                            <Text color={"gray"}>닉네임</Text>
                        </Grid>
                        <Input
                            value={nick}
                            placeholder={"닉네임을 입력해주세요."}
                            _onChange={(e) => {
                                setNickname(e.target.value);
                            }}
                        />
                        <Text fontSize={"0.8rem"} color={"gray"}>
                            닉네임은 한글, 영어, 숫자로 구성한 2~10자로
                            입력해주세요.
                        </Text>
                    </Grid>

                    <Grid
                        ai={"start"}
                        fd={"column"}
                        width={"100%"}
                        padding={"0px 0px 20px 0px"}
                    >
                        <Grid margin={"0px 0px 5px 0px"}>
                            <Text color={"gray"}>비밀번호</Text>
                        </Grid>
                        <Input
                            type={"password"}
                            value={pw}
                            placeholder={"비밀번호를 입력해주세요."}
                            _onChange={(e) => {
                                setPw(e.target.value);
                            }}
                        />
                        <Text fontSize={"0.8rem"} color={"gray"}>
                            비밀번호는 영어와 숫자로 구성한 8~16자로
                            입력해주세요.
                        </Text>
                    </Grid>

                    <Grid
                        ai={"start"}
                        fd={"column"}
                        width={"100%"}
                        padding={"0px 0px 20px 0px"}
                    >
                        <Grid margin={"0px 0px 5px 0px"}>
                            <Text color={"gray"}>비밀번호 확인</Text>
                        </Grid>
                        <Input
                            type={"password"}
                            value={pwcheck}
                            placeholder={"비밀번호를 다시 한 번 입력해주세요."}
                            _onChange={(e) => {
                                setPwCheck(e.target.value);
                            }}
                        />
                    </Grid>

                    <Button
                        _onClick={signUp}
                        bgColor={"white"}
                        border={"1px solid lightgray"}
                        fontColor={"gray"}
                        fontSize={"13px"}
                        width={"100%"}
                        others={
                            "padding:12px; margin:16px 0px 50px 0px; border-radius: 50px; cursor: pointer;&:hover{background-color:#42a5ff;color:#fff; border:1px solid #42a5ff;}"
                        }
                    >
                        회원가입하기
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SignupPage;
