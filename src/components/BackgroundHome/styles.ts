import styled from "styled-components";

export const Background = styled.div`
display: flex;
align-items: flex-end;
background: ${({theme}) => theme.colors.firstBackground};
height: 100vh;
width: 100vw;
`
export const PrimaryBlue = styled.div`
display: flex;
flex-direction: row;
width: 94%;
height: 98%;
background: ${({theme}) => theme.colors.secondBackground};
box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.25);
border-radius: 20px 20px 0px 0px;
`
export const Container = styled.div`
width: 75%;
height: 100%;
background: ${({theme}) => theme.colors.secondBackground};
`
export const Header = styled.div`
display: flex;
width: 100%;
height: 20%;
background: ${({theme}) => theme.colors.thirdBackground};
border-radius: 40px 0 0 40px;
`
export const ContentBackground = styled.div`
width: 100%;
height: 80%;
background-color: ${({theme}) => theme.colors.thirdBackground};
`
export const Content = styled.div`
width: 100%;
height: 100%;
background: ${({theme}) => theme.colors.secondBackground};
border-radius: 0 40px 0 0;
`
export const IllustrationContainer = styled.div`
display: flex;
width: 24%;
height: 100%;
background: ${({theme}) => theme.colors.thirdBackground};
border-radius: 0px 20px 0px 0px;
`
export const PrimaryWhite = styled.div`
  position: relative;
  width: 90%;
  height: 20vh;
  right: -9%;
  background: #FBFBFB;
  border-radius: 40px 20px 0px 40px;
`
export const Strong = styled.strong`
  position: absolute;
  display: flex;
  margin-left: 100px;
  top: 50%;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 10%;
  text-align: center;
  background: ${({theme}) => theme.colors.secondBackground};
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.05);
`
export const LogoContainer = styled.div`
  position: relative;
  width: 15vh;
  height: 15vh;
  top: 10%;
  right: 5%;
  background: ${({theme}) => theme.colors.thirdBackground};
  box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 15%;
`
export const Logo = styled.img`
  position: relative;
  width: 12vh;
  height: 12vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const InternContainer = styled.div`
  position: relative;
  display: fixed;
  width: 90%;
  height: 80%;
  right: -9%;

`
export const BackgroundSecond = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
  left: 60%;
  background: ${({theme}) => theme.colors.thirdBackground};
`
export const WomanImage = styled.img`
  position: relative;
  width: 60%;
  height: 60%;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
`
export const BackgroundSecondBlue = styled.div`
  position: relative;
  width: 170%;
  height: 100%;
  left: -150%;
  bottom: 61%;
  background: ${({theme}) => theme.colors.secondBackground};
  border-radius: 0px 40px 0px 0px;
`
export const TextHeader = styled.p`
  position: relative;
  top: 35%;
  font-size: 6vh;
  font-weight: bold;
  line-height: 100%;
  color: #0077B6;
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.05);
`
export const ViewIllustration = styled.div`
  position: relative;
  margin-top: 50%;
  width: 70%;
  background: ${({theme}) => theme.colors.thirdBackground};
  left: 50%;
  transform: translate(-50%);

`
export const Illustration = styled.img`
  position: relative;
  width: 100%;
  margin-top: 50%;

`