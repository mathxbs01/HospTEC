import BackgroundHome from '../../components/BackgroundHome';

import MinhasConsultas from '../../assets/paciente/minhasConsultas.svg'

import { Card } from './style';


const HomePaciente = (): JSX.Element => (
        <div>
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


export default HomePaciente