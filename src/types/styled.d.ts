import 'styled-components'
interface IColors {
  firstBackground: string
  secondBackground: string
  thirdBackground: string
}
interface IFonts {
  sansSerif: string
}
interface IFontsSizes {
  small: string
  middle: string
  big: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors
    fonts: IFonts
    fontSizes: IFontsSizes
  }
}