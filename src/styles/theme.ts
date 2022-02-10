import { createGlobalStyle, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    firstBackground: "#B6E2DA4D",
    secondBackground: "#70CDFF",
    thirdBackground: "#FBFBFB"
  },
  fonts: {
    sansSerif: "sans-serif"
  },
  fontSizes: {
    small: "12px",
    middle: "16px",
    big: "32px"
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
