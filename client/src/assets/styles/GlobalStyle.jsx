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

    ul, ol, li{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    a:hover, a:active, a:visited {
        text-decoration: none; 
        color: inherit;
    }

    input {
        padding: 7.8px 9.1px;
        width: 97%;
        border: 1px solid rgb(186, 191, 196);
        ::placeholder {
        color: rgb(202, 206, 209);
        }
        &:focus {
        border-color: rgb(104, 167, 221);
        outline: none;
        box-shadow: 0 0 3px 3px rgb(225, 236, 248);
        }
        border-radius: 8px;
    }


`;

export default GlobalStyle;
