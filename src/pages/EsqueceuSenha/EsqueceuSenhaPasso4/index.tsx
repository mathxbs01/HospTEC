import { useNavigate } from 'react-router-dom';
import React, { InputHTMLAttributes, useCallback } from 'react';

import { Container, Content, FirstColumn, Form, ModalIntern, SecondColumn, Separator} from './style';

import FORGOTPASS from '../../../assets/login/EsqueceuSenha.svg';
import HOSPTEC from '../../../assets/login/HOSPTEC.svg';

import Input from '../../../components/Inputs/Input';

const EsqueceuPasso4 = () => {

    const[inputPassword, setInputPassword] = React.useState('')


    const visibilityToggle = document.querySelector('#eye');
    const passCreate = document.querySelector('#pass');
    const pass = document.querySelector('#pass-confirmed');

    var password = true;
        visibilityToggle?.addEventListener('click', function(){
            if(password){
                passCreate?.setAttribute('type', 'text');
                pass?.setAttribute('type', 'text');
                visibilityToggle.innerHTML = 'visibility';
            }else{
                passCreate?.setAttribute('type', 'password');
                pass?.setAttribute('type', 'password');
                visibilityToggle.innerHTML = 'visibility_off';
            }
            password = !password;
        });

    const passCreat = (document.getElementById("pass-confirmed") as HTMLInputElement)
    const passConf = (document.getElementById("pass") as HTMLInputElement)
    const btnNext = (document.getElementById("btn-confirmed") as HTMLButtonElement)
    const createPass = document.querySelector("#create-password")


    createPass?.addEventListener('input', () => {
        if(passConf.value == passCreat.value && passConf.value.length > 0){
            btnNext.removeAttribute('disabled');
        } else {
            btnNext.setAttribute('disabled', 'disabled');
        }
    })

    const navigate = useNavigate();
        function handleCancel(){
            navigate('/');
        }
        function handleConfirmed(){
            navigate('/');
        }
        console.log(handleConfirmed)

    return(
        <div id="pagina-login">
            <Container>
                <Content className="content">
                    <FirstColumn>
                        <ModalIntern>
                            <div className="header">
                                <img src={HOSPTEC} alt="Logo HospTec" />
                                <p>Por favor, faça o seu login para ter o acesso!</p>
                            </div>
                            <Form id="create-password">
                                <p>Nova senha</p>
                                <Input
                                id="pass"
                                type="password"
                                placeholder="***********"
                                onChange={(e) => setInputPassword(e.target.value)}
                                required/>
                                <span className="material-icons" id="eye">visibility_off</span>
                                <p>Digite novamente</p>
                                <Input
                                id="pass-confirmed"
                                type="password"
                                placeholder="***********"
                                onChange={(e) => setInputPassword(e.target.value)}
                                required
                                />
                                <div className="buttons">
                                    <div className='buttons left'>
                                        <button type="submit" id="btn-cancel" onClick={handleCancel}>Cancelar</button>
                                    </div>
                                    <div className="buttons right">
                                        <button type="submit" id="btn-confirmed" onClick={handleConfirmed} disabled>Redefinir</button>
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

export default EsqueceuPasso4