import { useNavigate } from 'react-router-dom';
import React, { InputHTMLAttributes, useCallback } from 'react';

import { 
Container, 
Content, 
FirstColumn, 
Form, 
Header, 
InputRadio, 
ModalIntern, 
RadioInputs, 
SecondColumn
} from './style';

import FORGOTPASS from '../../../assets/login/EsqueceuSenha.svg';
import HOSPTEC from '../../../assets/login/HOSPTEC.svg';



const EsqueceuPasso2 = () => {

    const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('radio1');
    const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;
    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>):void => setSelectedRadioBtn(e.currentTarget.value);


    const [email, setEmail] = React.useState("exemplo@exemplo.com")
    const [phone, setPhone] = React.useState("+*********84")

    const navigate = useNavigate();
        function handleLogin(){
            navigate('/');
        }
        function handleCode(){
            navigate('/identify/recover/authentic')
        }

    return(
        <div id="pagina-esqueceu">
            <Container>
                <Content className="content">
                    <FirstColumn>
                        <ModalIntern>
                        <img src={HOSPTEC} alt="Logo HospTec" />                            
                        <Header>
                            <p>Como você deseja receber o código</p>
                            <p>para redefinir sua senha?</p>
                        </Header>
                            <Form id="loginForm">
                                <RadioInputs>
                                    <InputRadio
                                        id="email-radio"
                                        type="radio"
                                        name="react-radio"
                                        value="radio1"
                                        checked={isRadioSelected('radio1')}
                                        onChange={handleRadioClick}/>
                                    <label>Enviar código por e-mail <br/>{ email }</label>
                                    <InputRadio
                                        id="phone-radio"
                                        type="radio"
                                        name="react-radio"
                                        value="radio2"
                                        checked={isRadioSelected('radio2')}
                                        onChange={handleRadioClick}/>
                                    <label>Enviar código por SMS <br/>{ phone }</label>
                                </RadioInputs>
                                <div className="buttons">
                                    <div className='buttons left'>
                                        <button type="submit" id="btn-cancel" onClick={handleLogin}>Não é você?</button>
                                    </div>
                                    <div className="buttons right">
                                        <button type="submit" id="btn-search" onClick={handleCode}>Continuar</button>
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

export default EsqueceuPasso2