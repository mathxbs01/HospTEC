import {
  ContentMenu,
  Exit,
  HomeButton,
  IconExit,
  IconHome,
  MenuContainer,
  SecondButton,
  ThirdButton,
} from './styles'

import {
  MenuProps
} from '../../types/interfaces'

import IllustrationExit from '../../assets/home/exit.svg'
import SeparatorExit from '../../assets/home/separatorExit.svg'
import Home from '../../assets/home/home.svg'
import BackgroundHome from '../../assets/home/backgroundHome.svg'
import AbaHome from '../../assets/home/Aba - home.svg'


const Menu = (
  {
    homeButton = true,
    homeButtonIcon,
    typeSecondButton,
    secondButton = false,
    SecondButtonIcon,
    secondButtonLabel,
    typeThirdButton,
    thirdButton = false,
    ThirdButtonIcon,
    thirdButtonLabel,
    ...rest
  }:MenuProps ):JSX.Element => {
  return (
    <MenuContainer>
      <ContentMenu>
            <HomeButton>
              <IconHome src={homeButtonIcon = AbaHome}/>
            </HomeButton>
            <SecondButton/>
            <ThirdButton/>
      </ContentMenu>
      <Exit>
        <img src={SeparatorExit}/>
        <IconExit src={IllustrationExit}/>
      </Exit>
    </MenuContainer>
  )
}

export default Menu