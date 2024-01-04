import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center, input, textarea,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video,button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 16px;
    font-weight: 300;
    font-family: 'SUIT-Regular', Inter, sans-serif;
    vertical-align: baseline;
    line-height: 1.5;
    color: black;
    word-break: keep-all;
    scroll-behavior:smooth;
    box-sizing: border-box;

    @font-face {
      font-family: 'SUIT-Regular';
      font-weight: normal;
      font-weight: 400;
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
      unicode-range: U+1100-11FF,U+3130-318F,U+A960-A97F,U+AC00-D7A3,U+D7B0-D7FF
    }
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  body { 
    background-color: white;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration:none;
    color:inherit;
  }

  &::-webkit-scrollbar {
    background-color: transparent;    
    display: none;
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;    
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    display: none;
    border-radius: 10px;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>
);
