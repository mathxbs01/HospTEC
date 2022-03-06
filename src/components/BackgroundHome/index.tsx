import { HTMLAttributes } from 'react';
import illustrationMulherHome from '../../assets/home/homeMulher.svg';
import HOSPTECLogotipo from '../../assets/home/logotipo.svg';
import Menu from '../../components/Menu';
import { MenuProps } from '../../types/interfaces';
import {
  Background,
  PrimaryBlue,
  Container,
  Header,
  PrimaryWhite,
  Strong,
  LogoContainer,
  Logo,
  InternContainer,
  BackgroundSecond,
  WomanImage,
  BackgroundSecondBlue,
  ContentBackground,
  Content,
  IllustrationContainer,
  TextHeader,
  Illustration,
  ViewIllustration,
  HelloUser,
  TextDo,
} from './styles'

interface BackgroundHomeProps extends MenuProps {
  children: JSX.Element
  backgroundColor?: string
  title?: string
  welcomeUser?: string
  subWelcome?: string
}

const BackgroundHome = (
  {
  children,
  title = "Bem vindo a página inicial",
  welcomeUser,
  backgroundColor,
  typeSecondButton,
  homeButton,
  ...rest
  }:BackgroundHomeProps) => (
        <Background>
        <Menu 
         homeButton={false}
        />
        <PrimaryBlue>
          <Container>
            <Header>
              <LogoContainer>
                <Logo src={HOSPTECLogotipo}/>
              </LogoContainer>
              <TextHeader>
                {title}
              </TextHeader>
            </Header>
            <ContentBackground>
            <Content>
              <HelloUser>
                {welcomeUser}
              </HelloUser>
              <TextDo>
                O que deseja fazer?
              </TextDo>
              {children}
            </Content>
            </ContentBackground>
          </Container>
          <IllustrationContainer>
            <ViewIllustration>
              <Illustration src={illustrationMulherHome}/>
            </ViewIllustration>
          </IllustrationContainer>
        </PrimaryBlue>
    </Background>
    )

export default BackgroundHome
