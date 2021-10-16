// ! kyuung
import React from "react";
import styled from "styled-components";

import { AccountCircle } from "@material-ui/icons";
import { ExitToAppSharp } from "@material-ui/icons";

const Button = (props) => {
    const {
        text,
        width,
        height,
        fontColor,
        bgColor,
        fontSize,
        bradius,
        others,
        _onClick,
        children,
        myPage,
        logout,
        hover,
        border,
    } = props;

    const styles = {
        text,
        width,
        height,
        fontColor,
        bgColor,
        fontSize,
        bradius,
        others,
        myPage,
        logout,
        hover,
        border,
    };

    if (myPage) {
        return (
            <React.Fragment>
                <HeaderButton onClick={_onClick}>
                    {text ? text : children}
                    <AccountCircle
                        style={{
                            marginRight: "10px",
                            color: "#6dddd0",
                            fontSize: "27px",
                            background: "#fff",
                            borderRadius: "50px",
                        }}
                    />
                </HeaderButton>
            </React.Fragment>
        );
    }

    if (logout) {
        return (
            <React.Fragment>
                <HeaderButton onClick={_onClick}>
                    {text ? text : children}
                    <ExitToAppSharp
                        style={{
                            color: "#b9b9b9",
                            fontSize: "27px",
                            background: "#fff",
                            borderRadius: "50px",
                        }}
                    />
                </HeaderButton>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>
                {text ? text : children}
            </ElButton>
        </React.Fragment>
    );
};

Button.defaultProps = {
    text: false,
    children: null,
    width: false,
    height: false,
    fontColor: "white",
    bgColor: "black",
    fontSize: "14px",
    bradius: "0px",
    others: "",
    border: "none",
    _onClick: () => {},
};

const ElButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.fontColor};
    background-color: ${(props) => props.bgColor};
    font-size: ${(props) => props.fontSize};
    border-radius: ${(props) => props.bradius};
    ${(props) => props.others};
    cursor: pointer;
    border: ${(props) => props.border};
`;

const HeaderButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.fontColor};
    background-color: ${(props) => props.bgColor};
    font-size: ${(props) => props.fontSize};
    border-radius: ${(props) => props.bradius};
    ${(props) => props.others};
    cursor: pointer;
    border: none;
    background: none;
`;

export default Button;
