import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle` //Styled global App
* {
    margin: 0;
    box-sizing: border-box; //faz com que o navegador não calcule a dimensão de um elemento somando bordas e margens com altura e largura.
}

body {
    background-color:#FAD711;
    font: 400 14px Roboto, sans-serif;
}
:root {
    --bgCollor: #FAD711;
    --primary: #FAD711;
    --text: #282828;
    --subTitle: #929292;
}
@font-face {
  font-family: "Roboto";
  src: url('../fonts/Roboto/Roboto-Medium.ttf');
  font-weight: normal;
  font-style: normal;
}

`
export default GlobalStyle;