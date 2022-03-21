import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
}
html{
    /* &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkrgray;
    } */
    body{
        font-family: sans-serif;
    }
    h2{
        font-size: 3rem;
        font-family: sans-serif;
        font-weight: lighter;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
    }
    p{
        font-size: 1.2rem;
        line-height: 200% ;
        color: #696969;
    }
    a{
        text-decoration: none;
    }
}

`;

export default GlobalStyles;
