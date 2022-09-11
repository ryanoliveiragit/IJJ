import styled from "styled-components";

export const VideoPlay = styled.div `
    background: rgba(0, 0, 0, 0) linear-gradient(rgb(255, 215, 0), rgb(255, 196, 0)) repeat scroll 0% 0%;
    width: 100%;
    height: 80%;
    display: flex;
    section {
        width: 90%;
        padding: 10%;
        font-family: 'Roboto', sans-serif;
    }
    section>h2 {
        font-size: 1em;
        margin-bottom: 2%;
    }
    .informations {
        margin-top: 5%;
    }
    .caique {
        position: absolute;
        width: 9%;
        top: 34.6vw;
        margin-left: 16%;
    }
    hr {
        border: 1px solid black;
    }
`