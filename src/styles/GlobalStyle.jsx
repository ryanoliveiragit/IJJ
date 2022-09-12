import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle` //Styled global App
* {
    margin: 0;
    box-sizing: border-box; //faz com que o navegador não calcule a dimensão de um elemento somando bordas e margens com altura e largura.
}
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #FAD711 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #d3d3d3;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #282828;
    border: 1px solid #282828;
  }
body {
    background-color: #FAD711;
    font: 400 14px Roboto, sans-serif;
}
:root {
    --bgCollor: #FAD711;
    --primary: #282828;
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