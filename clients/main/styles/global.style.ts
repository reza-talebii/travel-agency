import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body{
  background: #ffffff;
}
/* body,h1,h2,h3,h4,h5,h6,div,p,strong,button,select,textarea,label,input,input::placeholder,span:not(.material-icons){
  font-family: TradeGothicLTRegular !important;
} */


/* width */
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${props => props.theme.colors.primary};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background:  ${props => props.theme.colors.primary};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:  ${props => props.theme.colors.primary};
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

button, [type="button"], [type="reset"], [type="submit"] {
    appearance: button;
    background-color:${props => props.theme.colors.primary} !important;
    background-image: inherit;
}

.ant-divider-inner-text{
  color: #afafaf;
  font-size: 14px;
}

`
