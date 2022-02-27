import { HTMLAttributes } from 'react';


import { 
Card, 
ImageCard, 
TextCard } from './style';
    
interface BackgroundHomeProps extends HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element
  image?: string
  text?: string
}

const CardHome = (
  {
  children,
  image,
  text,
  ...rest
  }:BackgroundHomeProps) => (
    <Card>
        <ImageCard src={image}/>
        <TextCard>
            {text}
        </TextCard>
    </Card>  
) 
export default CardHome
