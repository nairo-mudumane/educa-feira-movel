import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --border-color: #cecece;

    --bg-white-1: #fff;
    --bg-white-2: #f5f6fa;
    --bg-yellow-1: #f2871c;
    --bg-gray-1: #414c52;
    --bg-gray-2: #e9eef4;
    --bg-red-1: red;
    --bg-green-1: #ef3;
    
    --color-white-1: #fefefe;
    --color-black-1: #0e0e0e;
    --color-yellow-1: #f2871c;
    --color-gray-1: #414c52;
}
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: all .3s ease;
}
body {
    background-color: var(--bg-white-2);
}
p {
    font-size: .95rem;
    margin-bottom: .5rem;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: .5rem;
}
a {
    font:inherit;
}
input,
textarea,
button {
    border: 0;
    outline: none;
}
button {
    cursor: pointer;
}
img,
svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.no-margin {
    margin: 0;
}
.no-padding {
    padding: 0;
}
.hidden {
    display: none;
}
/* animation */
.animeLeft{
    transform: translateX(-50px);
    opacity: 0;
    animation: anime 0.5s forwards;  
}
.animeTop {
    transform: translateY(-50px);
    opacity: 0;
    animation: anime 0.5s forwards;
}
.animeBottom {
    transform: translateY(50px);
    opacity: 0;
    animation: anime 0.5s forwards;
}
@keyframes anime {
    to {
        transform: initial;
        opacity: initial;
    }
}
`;

export default GlobalStyle;
