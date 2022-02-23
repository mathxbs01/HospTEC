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

const EsqueceuPasso3 = () => {

    const[inputCode, setInputCode] = React.useState('')


    const code = (document.getElementById("code") as HTMLInputElement)
    const btn = (document.getElementById("btn-search") as HTMLButtonElement)
    const loginForm = document.querySelector("#loginForm")

        loginForm?.addEventListener('input', () => {
            if (code.value.length >= 6){
                btn.removeAttribute('disabled');
            } else {
                btn.setAttribute('disabled', 'disabled');
            }
        })



    const navigate = useNavigate();
        function handleLogin(){
            navigate('/');
        }
        function handleNewPassword(){
            navigate('/identify/recover/authentic/new-password');
        }


    return(
        <div id="pagina-esqueceu-senha-1">
            <Container>
                <Content className="content">
                    <FirstColumn>
                        <ModalIntern>
                            <Header>
                                <img src={HOSPTEC} alt="Logo HospTec" />
                                <p>Redefina sua senha</p>
                            </Header>
                            <Form id="loginForm">
                                <p>Digite o código</p>
                                <Input
                                id="code"
                                type="text"
                                maskType="numberCode"
                                placeholder="*****"
                                onChange={(e) => setInputCode(e.target.value)}
                                required/>
                                <div className="buttons">
                                    <div className='buttons left'>
                                        <button type="submit" id="btn-cancel" onClick={handleLogin}>Cancelar</button>
                                    </div>
                                    <div className="buttons right">
                                        <button type="submit" id="btn-search" onClick={handleNewPassword} disabled>Próximo</button>
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

export default EsqueceuPasso3