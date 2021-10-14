import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const {
        children,
        fd,
        jc,
        ai,
        bg,
        width,
        height,
        margin,
        padding,
        z,
        others,
        mediaQuery,
        container,
    } = props;
    const styles = {
        fd,
        jc,
        ai,
        bg,
        width,
        height,
        margin,
        padding,
        z,
        others,
        mediaQuery,
        container,
    };

    if (container) {
        return <Container {...styles}>{children}</Container>;
    }

    return (
        <>
            <Flexbox {...styles}>{children}</Flexbox>
        </>
    );
};

Grid.defaultProps = {
    children: "child",
    fd: "row",
    jc: "center",
    ai: "center",
    bg: false,
    width: false,
    height: false,
    margin: false,
    padding: false,
    z: 1,
    mediaQuery: false,
};

const Flexbox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    flex-direction: ${(props) => props.fd};
    justify-content: ${(props) => props.jc};
    align-items: ${(props) => props.ai};
    background-color: ${(props) => props.bg};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    z-index: ${(props) => props.z};
    ${(props) => props.others};
`;

const Container = styled.div`
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default Grid;
