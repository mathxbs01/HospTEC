import { useNavigate } from 'react-router-dom';
import React, { InputHTMLAttributes, useCallback } from 'react';

import { 
Container, 
Content, 
FirstColumn,
Header, 
Form, 
ModalIntern, 
SecondColumn
} from './style';

import FORGOTPASS from '../../../assets/login/EsqueceuSenha.svg';
import HOSPTEC from '../../../assets/login/HOSPTEC.svg';

import Input from '../../../components/Inputs/Input';

const EsqueceuPasso1 = () => {

    const[inputEmail, setInputEmail] = React.useState('')


    const email = (document.getElementById("email") as HTMLInputElement)
    const btn = (document.getElementById("btn-search") as HTMLButtonElement)
    const loginForm = document.querySelector("#loginForm")

        loginForm?.addEventListener('input', () => {
            if (email.value.length > 0){
                btn.removeAttribute('disabled');
            } else {
                btn.setAttribute('disabled', 'disabled');
            }
        })



    const navigate = useNavigate();
        function handleLogin(){
            navigate('/');
        }
        function handleForgotPassStep2(){
            navigate('/identify/recover');
            console.log(navigate('/identify/recover'))
        }


    return(
        <div id="pagina-esqueceu-senha-1">
            <Container>
                <Content className="content">
                    <FirstColumn>
                        <ModalIntern>
                            <Header>
                                <img src={HOSPTEC} alt="Logo HospTec" />
                                <p>Encontre sua conta</p>
                            </Header>
                            <Form id="loginForm">
                                <p>Digite seu e-mail</p>
                                <Input
                                id="email"
                                type="email"
                                placeholder="exemplo@email.com"
                                onChange={(e) => setInputEmail(e.target.value)}
                                required/>
                                <div className="buttons">
                                    <div className='buttons left'>
                                        <button type="submit" id="btn-cancel" onClick={handleLogin}>Cancelar</button>
                                    </div>
                                    <div className="buttons right">
                                        <button type="submit" id="btn-search" onClick={handleForgotPassStep2} disabled>Pesquisar</button>
                                    </div>
                                </div>
                            </Form>
                        </ModalIntern>
                    </FirstColumn>
                    <SecondColumn>
                        <strong className="title">Esqueceu a senha?</strong>
                        <p>Redefine agora mesmo.</p>
                        <img src={FORGOTPASS} alt="Ilustratacao simbolizando chave de esqueceu senha"></img>
                    </SecondColumn>
                </Content>
            </Container>
        </div>
    )
}

export default EsqueceuPasso1