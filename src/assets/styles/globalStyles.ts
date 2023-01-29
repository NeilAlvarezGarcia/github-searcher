import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    @import url('https://necolas.github.io/normalize.css/8.0.1/normalize.css');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto:wght@500;700;900&display=swap');

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    * { 
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }

    body: {
        font-size: 1rem;
        font-family: 'Open Sans', sans-serif;
    }

    h1 { 
        font-weight: 900;
        font-size: 2.5rem;
    }
    h2 { 
        font-weight: 700;
        font-size: 2rem;
    }
    h3 { 
        font-weight: 500;
        font-size: 1.5rem;
    }

    h1, h2, h3 {
        font-family: 'Roboto', sans-serif;
    }

    input, button {
        border: none;
        outline: none;
    }

    a, button {
        text-decoration: none;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        object-fit: cover;
    }
`