// ! kyuung
import React from "react";
import styled from "styled-components";

const Input = (props) => {
    const {
        type,
        value,
        width,
        height,
        fontSize,
        bradius,
        others,
        _onChange,
        placeholder,
        text,
    } = props;
    const styles = { width, height, bradius, fontSize, others };

    return (
        <>
            <label>{text}</label>
            <ElInput
                {...styles}
                type={type}
                value={value}
                onChange={_onChange}
                placeholder={placeholder}
            />
        </>
    );
};

Input.defaultProps = {
    type: "text",
    value: "",
    width: "100%",
    height: "3rem",
    fontSize: "14px",
    bradius: "",
    _onChange: () => {},
    placeholder: "텍스트를 입력해주세요.",
    others: "",
};

const ElInput = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fontSize};
    ${(props) => props.others};
    border-radius: ${(props) => props.bradius};
    border: 1px solid lightgray;
    box-sizing: border-box;
    padding: 12px;
`;

export default Input;
