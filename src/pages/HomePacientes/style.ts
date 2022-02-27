import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: block;
  width: 17vh;
  height: 17vh;
  background: red;
`;
export const TextCard = styled.p`
  position: relative;
  margin-top: 10%;
  margin-bottom: 5%;
  margin-left: 10%;
  font-size: 2vh;
  font-weight: bold;
  color: ${({theme}) => theme.colorText.secondColor};
`
export const ImageCard = styled.img`
  position: relative;
  margin-top: 10%;
  margin-left: 10%;
  width: 6vh;
`