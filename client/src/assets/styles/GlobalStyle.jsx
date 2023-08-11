import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }


    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    ul:not(.steps-ul), ol, li:not(.steps-list){
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    a:hover, a:active, a:visited {
        text-decoration: none; 
        color: inherit;
    }


`;

export default GlobalStyle;
