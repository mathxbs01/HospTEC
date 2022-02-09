import 'styled-components'

interface IColors {
  teste: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors
  }
}