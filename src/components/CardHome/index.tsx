import { HTMLAttributes } from 'react';

import { 
Card, 
ImageCard, 
TextCard } from './style';
    
interface CardHomeProps extends HTMLAttributes<HTMLDivElement> {
  image?: string
  text?: string
}

const CardHome = (
  {
  image,
  text,
  ...rest
  }:CardHomeProps) => (
    <Card>
        <ImageCard src={image}/>
        <TextCard>
            {text}
        </TextCard>
    </Card>  
) 
export default CardHome
