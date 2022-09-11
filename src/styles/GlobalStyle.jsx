import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box; //faz com que o navegador não calcule a dimensão de um elemento somando bordas e margens com altura e largura.
}

body {
    background-color: white;
}
@font-face {
  font-family: "Roboto";
  src: url('../fonts/Roboto/Roboto-Medium.ttf');
  font-weight: normal;
  font-style: normal;
}

`
export default GlobalStyle;