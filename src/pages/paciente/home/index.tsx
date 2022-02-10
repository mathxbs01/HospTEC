import { useNavigate } from 'react-router-dom';
import React, { InputHTMLAttributes, useCallback } from 'react';

import { BackgroundHome } from '../../../components/Home';

import MinhasConsultas from '../../../assets/images/paciente/minhasConsultas.svg'
import CAMADAS from '../../../assets/images/home/Camadas.svg';

import { Card, Container, ModalInter } from './style';

export function HomePaciente(){ 


    return(
        <div id="home-paciente" className="home">
            <Container>
                <BackgroundHome>
                    <ModalInter>
                        <Card>
                            <img src={MinhasConsultas}/>
                            <p>Minhas Consultas</p>
                        </Card>
                    </ModalInter>
                </BackgroundHome>
            </Container>
        </div>
    )
}
