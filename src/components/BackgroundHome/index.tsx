import illustrationMulherHome from '../../assets/home/homeMulher.svg';
import HOSPTECLogotipo from '../../assets/home/logotipo.svg';
import {
  Background,
  PrimaryBlue,
  PrimaryWhite,
  Strong,
  LogoContainer,
  Logo,
  InternContainer,
  BackgroundSecond,
  WomanImage,
  BackgroundSecondBlue
} from './styles'

const BackgroundHome = () => (
        <Background>
        <PrimaryBlue>
            <PrimaryWhite>
                <Strong>
                  Bem vindo a página inicial
                </Strong>
                <LogoContainer>
                  <Logo
                    src={HOSPTECLogotipo}
                    alt="Logotipo do hospital"
                  />
                </LogoContainer>
            </PrimaryWhite>
            <InternContainer>
                <BackgroundSecond>
                    <WomanImage
                      src={illustrationMulherHome}
                      alt="Ilustração mulher da pagina home"
                    />
                    <BackgroundSecondBlue/>
                </BackgroundSecond>
            </InternContainer>
        </PrimaryBlue>
    </Background>
    )

export default BackgroundHome
