import { 
    HTMLAttributes
} from 'react'

interface MenuProps extends HTMLAttributes<HTMLDivElement>{
    homeButton?: boolean
    homeButtonIcon?: string
    typeSecondButton?: "solid" | "transparent"
    secondButton?: boolean
    SecondButtonIcon?: string
    secondButtonLabel?: string
    typeThirdButton?: "solid" | "transparent"
    thirdButton?: boolean
    ThirdButtonIcon?: string
    thirdButtonLabel?: string
}

export type {MenuProps} 