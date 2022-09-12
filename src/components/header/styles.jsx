import styled from "styled-components";

const ContainerHeader = styled.header `
    color: black;
    flex-direction: row;
    background-color: transparent;
    .navigation {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .list {
        text-align: center;
        justify-content: center;
        display: flex;
        align-items: center;
        list-style: none;
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        transition: .4s;
    }

    .list>li {
        font-size: 0.9rem;
        margin-left: 1em;
        margin-right: 1em;
    }

    .amburger {
        display: none;
    }
    li:hover {
        transition: .4s;
        color: #FCD700;
    }
    @media only screen and (max-width: 1330px) {
        .amburger {
            display: block;
        }
        .list {
            display: none;
            width: 100%;
            align-items: center;
            text-align: center;
            justify-content: center;
            flex-direction: column;
            padding: 0%!important;
            margin: 0%!important;
        }
        .navitation {
            align-items: center;
            justify-items: center;
            align-items: flex-start;
            padding: 2%;
            text-align: center;
            display: flex;
        }
        li {
            margin-left: 0em;
            margin-right: 0em;
            margin-top: 6em;
        }
    }
`

export default ContainerHeader;