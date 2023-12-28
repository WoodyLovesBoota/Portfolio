import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
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
    font-family: Inter, sans-serif;
    vertical-align: baseline;
    font-weight: 300;
    line-height: 1.5;
    word-break:break-all;
    color: black;

    scroll-behavior:smooth;

    -webkit-touch-callout: none;
     user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     -webkit-user-select: none;

    @media (max-width: 1000px) {
      font-size: 12px;
    }
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  body { 
    /* background-color: #f7f4f2; */
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

  * {
  box-sizing: border-box;
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
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </QueryClientProvider>
);
