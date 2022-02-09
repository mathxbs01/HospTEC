import { createGlobalStyle, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    teste: "#000"
  }
}

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: #E9F6F4;
  color: #000000;
}
body, input, button, textarea{
  font: 400 14px 'Poppins', sans-serif;
}
`
export default theme
