import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
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

body {
    background-color: #8C11BE;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    color: #000000;
}

* {
    box-sizing: border-box;
}

input {
    height: 58px;
    background-color: #FFFFFF;
    border: hidden;
    border-radius: 5px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    color: #000000;
    &::placeholder {
        padding-left: 15px;
    }
}

button {
    height: 46px;
    background-color: #A328D6;
    border: hidden;
    border-radius: 5px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
}

a {
    font-family: Raleway;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    color: #FFFFFF;
}
`

export default GlobalStyles