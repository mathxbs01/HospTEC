import React from "react"
import illustrationMulherHome from '../assets/images/home/homeMulher.svg';
import HOSPTECLogotipo from '../assets/images/home/logotipo.svg';
import {
  Background,
  PrimaryBlue,
  PrimaryWhite,
  Strong,
  LogoContainer,
  Logo
} from './styles'

const BackgroundHome = (): JSX.Element => (
        <Background
          className="fixed"
        >
        <PrimaryBlue
          className="background-primaryBlue"
        >
            <PrimaryWhite
              className="background-primaryWhite-up"
            >
                <Strong
                  className="title"
                >
                  Bem vindo a página inicial
                </Strong>
                <LogoContainer
                  className="box-logotipo"
                >
                  <Logo
                    id="logotipo"
                    src={HOSPTECLogotipo}
                    alt="Logotipo do hospital"
                  />
                </LogoContainer>
            </PrimaryWhite>
            <div className="modal-intern">
                <div className="background-secondWhite-right">
                    <img id="illustrationMulherHome"src={illustrationMulherHome} alt="Ilustração mulher da pagina home"/>
                    <div className="background-secondBlue" />
                </div>
            </div>
        </PrimaryBlue>
    </Background>
    )

export default BackgroundHome
