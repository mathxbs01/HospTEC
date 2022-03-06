import styled from "styled-components"

export const MenuContainer = styled.div`
  position: relative;
  width: 5%;
  height: 98%;
  background: ${({theme}) => theme.colors.secondBackground};
  border-radius: 20px 0 0 0;
`
export const ContentMenu = styled.div`
  position: relative;
  width: 100%;
  height: 85%;
`
export const HomeButton = styled.div`
  position: relative;
  width: 100%;
  height: 10vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  
  background-color: red;
`
export const SecondButton = styled.div`
  position: relative;
  width: 100%;
  height: 10vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  
  background-color: black;
`
export const ThirdButton = styled.div`
  position: relative;
  width: 100%;
  height: 10vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  
  background-color: pink;
`
export const Exit = styled.div`
  position: relative;
  width: 100%;
  height: 15%;
`
export const IconExit = styled.img`
  position: relative;
  width: 4vh;
  height: 4vh;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`
export const IconHome = styled.img`
  position: relative;
  width: 12vh;
  height: 12vh;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10;
`
