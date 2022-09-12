import styled from "styled-components";

export const FooterStyled = styled.footer`
    margin-top: 20%;
  color: white;
  background-color: #131313;
  display: flex;
  flex-direction: row;
  padding: 1%;
  font-family: 'Roboto', sans-serif;
  .footer {
    margin-left: 2%;
    display: flex;
  }
  p {
    margin-top: 7%;
  }
  h1 {
    font-size: 1.5rem;
  }
`
export const Content = styled.div `
    width: 50%;
    margin-left: 2%;
    ul {
        padding-right: 20vw;
        border-left: 1px solid #ffffff1d;
        border-right: 1px solid #ffffff1d;
        height: 100%;
    }
    li {
        width: 10vw;
        list-style: none;
        margin-bottom: 1em;
        cursor: pointer;
        transition: .4s;
    }
    li:hover {
      transition: .4s;
      color: #FCD700;
    }
`
export const MadeWith = styled.div `
    background-color: #FCD700;
    .footer-copy {
        justify-content: center;
        display: flex;
    }
    .footer-copy-items {
    display: flex;
    width: 100%;
    padding: .5% 5%;
    justify-content: center;
  }
  span {
        margin-left: .2em;
        margin-right: .2em;
    }
  a,p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.76rem;
    margin-left: 8%;
    margin-right: 8%;
    color: #161616c8;
    text-decoration: none;
  }
`