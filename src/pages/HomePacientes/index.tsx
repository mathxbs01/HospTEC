import { useNavigate } from 'react-router-dom';
import React, { InputHTMLAttributes, useCallback } from 'react';

import { BackgroundHome } from '../../../components/Home';

import MinhasConsultas from '../../../assets/images/paciente/minhasConsultas.svg'
import CAMADAS from '../../../assets/images/home/Camadas.svg';

import { Card } from './style';

const HomePaciente = () => {


    return(
        <div id="home-paciente">
            <BackgroundHome>
                <div className="modal-cards">
                    <Card>
                        <img src={MinhasConsultas}/>
                        <p>Teste</p>
                    </Card>

                </div>
            </BackgroundHome>
        </div>
    )
}

export default HomePaciente