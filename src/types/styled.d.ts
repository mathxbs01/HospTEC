import 'styled-components'
interface IColors {
  firstBackground: string
  secondBackground: string
  thirdBackground: string
  firstBackgroundButton: string
}
interface IFonts {
  sansSerif: string
}
interface IFontsSizes {
  small: string
  middle: string
  big: string
}
interface IFontsColor {
  firstColor: string
  secondColor: string
  thirdColor: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors
    fonts: IFonts
    fontSizes: IFontsSizes
    colorText: IFontsColor
  }
}