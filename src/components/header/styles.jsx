import styled from "styled-components";

const Container = styled.header `
    background-color: #080808;
    color: white;
    padding: 1.7% 4%;
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    ul {
        text-align: center;
        justify-content: center;
        display: flex;
        align-items: center;
        list-style: none;
    }
    li {
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
        font-size: 0.9rem;
        font-weight: 400;
        transition: .4s;
        margin-left: 1em;
        margin-right: 2em;
    }
    li:hover {
        transition: .4s;
        color: #fcb900;
    }
    
`

export default Container;