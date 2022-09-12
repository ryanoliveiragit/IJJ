import styled from "styled-components";

export const Main = styled.main `
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    margin-top: 8%;
    div {
        width: 100%;
        margin-top: 1%;
        font-size: calc(1.5rem + 2vw); //responsive text
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }
    button {
        margin-top: 2%;
    }
` 
export const Content = styled.div `
    margin-top: -1%;
    background-color: #282828;
`