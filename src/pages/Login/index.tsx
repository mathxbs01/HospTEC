import { useNavigate } from 'react-router-dom';
import React, { InputHTMLAttributes, useCallback } from 'react';

import { Container, Content, FirstColumn, Form, ModalIntern, SecondColumn, Separator} from './style';

import illustrationMulher from '../../../assets/images/login/loginMulher.svg';
import HOSPTEC from '../../../assets/images/login/HOSPTEC.svg';

import { Input } from '../../../components/Input';

const Login = () => {

    const[inputEmail, setInputEmail] = React.useState('')
    const[inputPassword, setInputPassword] = React.useState('')

    const visibilityToggle = document.querySelector('#eye');
    const input = document.querySelector('#pass');
    var password = true;
        visibilityToggle?.addEventListener('click', function(){
            if(password){
                input?.setAttribute('type', 'text');
                visibilityToggle.innerHTML = 'visibility';
            }else{
                input?.setAttribute('type', 'password');
                visibilityToggle.innerHTML = 'visibility_off';
            }
            password = !password;
        })


    const email = (document.getElementById("email") as HTMLInputElement)
    const pass = (document.getElementById("pass") as HTMLInputElement)
    const btn = (document.getElementById("btn") as HTMLButtonElement)
    const loginForm = document.querySelector("#loginForm")

        loginForm?.addEventListener('input', () => {
            if (email.value.length > 0 && pass.value.length > 0){
                btn.removeAttribute('disabled');
            } else {
                btn.setAttribute('disabled', 'disabled');
            }
        })

    const navigate = useNavigate();
        function handleCreateUser(){
            navigate('/create');
        }
        function ForgotPassword(){
            navigate('/identify');
        }


    return(
        <div id="pagina-login">
            <Container>
                <Content className="content">
                    <FirstColumn>
                        <ModalIntern>
                        <img src={HOSPTEC} alt="Logo HospTec" />
                            <p>Por favor, faça o seu login para ter o acesso!</p>
                            <Form id="loginForm">
                                <p>Digite seu e-mail</p>
                                <Input
                                id="email"
                                type="email"
                                placeholder="exemplo@email.com"
                                onChange={(e) => setInputEmail(e.target.value)}
                                required/>
                                <p>Digite sua senha</p>
                                <Input
                                id="pass"
                                type="password"
                                placeholder="***********"
                                onChange={(e) => setInputPassword(e.target.value)}
                                required
                                />
                                <span className="material-icons" id="eye">visibility_off</span>
                                <button type="submit" id="btn" disabled>Entrar</button>
                                <a onClick={ForgotPassword} >Esqueceu a senha?</a>
                                <Separator />
                                <a onClick={handleCreateUser}>Quero me cadastrar</a>
                            </Form>
                        </ModalIntern>
                    </FirstColumn>
                    <SecondColumn>
                        <strong className="title">Seja bem-vindo!</strong>
                        <p>Acesse sua conta agora mesmo.</p>
                        <img src={illustrationMulher} alt="Ilustratacao simbolizando um agente da area hospitalar"></img>
                    </SecondColumn>
                </Content>
            </Container>
        </div>
    )
}

export default Login;
