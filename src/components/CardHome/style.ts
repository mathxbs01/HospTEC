import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: inline-table;
  width: 20vh;
  height: 20vh;
  top: 20vh;
  margin-left: 6vh;
  margin-right: 2vh;
  background: ${({theme}) => theme.colors.thirdBackground};
  border-radius: 2vh;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  cursor: pointer;
`
export const TextCard = styled.p`
  position: relative;
  margin-top: 20%;
  margin-bottom: 5%;
  margin-left: 10%;
  font-size: 2vh;
  font-weight: bold;
  line-height: 100%;
  color: ${({theme}) => theme.colorText.secondColor};
`
export const ImageCard = styled.img`
  position: relative;
  margin-top: 10%;
  margin-left: 10%;
  width: 6vh;
`