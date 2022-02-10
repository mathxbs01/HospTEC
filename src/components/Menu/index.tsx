import {
  MenuContainer
} from './styles'

interface MenuProps {
  homeButton?: boolean
  typeSecondButton?: "solid" | "transparent"
  secondButton?: boolean
  SecondButtonIcon?: SVGAElement
  secondButtonLabel?: string
  typeThirdButton?: "solid" | "transparent"
  thirdButton?: boolean
  ThirdButtonIcon?: SVGAElement
  thirdButtonLabel?: string
}

const Menu = (
  {
    homeButton = true,
    typeSecondButton,
    secondButton = false,
    SecondButtonIcon,
    secondButtonLabel,
    typeThirdButton,
    thirdButton = false,
    ThirdButtonIcon,
    thirdButtonLabel
  }:MenuProps ):JSX.Element => {

  return (
    <MenuContainer>

    </MenuContainer>
  )
}

export default Menu