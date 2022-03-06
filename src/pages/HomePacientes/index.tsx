import BackgroundHome from '../../components/BackgroundHome';

import MinhasConsultas from '../../assets/paciente/minhasConsultas.svg'
import MinhasReceitas from '../../assets/paciente/minhasReceitas.svg'
import MeuPerfil from '../../assets/paciente/meuPerfil.svg'

import CardHome from '../../components/CardHome';


const HomePaciente: React.FC = () => {
    return(
        <div>
            <BackgroundHome 
            welcomeUser={`Olá, ${'Matheus'}`}
            > 
                <div className="modal-cards">
                    <CardHome
                    image={MinhasConsultas}
                    text='Minhas Consultas'/>
                    <CardHome 
                    image={MinhasReceitas}
                    text='Minhas receitas médicas'/>
                    <CardHome 
                    image={MeuPerfil}
                    text='Meu Perfil'/>    
                </div>
            </BackgroundHome>
        </div>
    )
}

export default HomePaciente