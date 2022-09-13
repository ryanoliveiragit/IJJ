import styled from "styled-components";

export const Container = styled.div `
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
    div {
        color: #FAD711;
        width: 100%;
    }
    p {
        color: white;
        font-size: calc(.3rem + 1.5vw);
    }
    span {
        font-size: calc(1.5rem + 1.5vw); //responsive text
    }
`