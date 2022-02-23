import React, {
  useState,
  useCallback,
  FormEvent,
  ChangeEvent
} from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/Inputs/Input';
import {
  Enfermeiro,
  Paciente,
  Recepcionista,
  Medico } from '../../../components/TypeUsers';
import {
  Container,
  Content,
  Header, Form,
  InputForm,
  LineForm,
  UserProfile,
  InputRadio,
  ButtonNext } from './style';
import HOSPTEC from '../../../assets/login/HOSPTEC.svg';

interface User{
  phone: string;
}

const CadastroPasso1 = () => {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('radio1');
  const [passwordCreate, setPassowordCreate] = useState('');
  const [passwordConfirmed, setPassowordConfirmed] = useState('');
  const [profile, setProfile] = useState("Paciente");
  const [user, setUser] = useState<User>({} as User);
  const handleChange = useCallback((e: FormEvent<HTMLInputElement>) =>{
      setUser({
          ...user,
          [e.currentTarget.name]: e.currentTarget.value
      })
  }, [user]);
  const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;
  const handleRadioClick = (e: ChangeEvent<HTMLInputElement>):void => setSelectedRadioBtn(e.currentTarget.value);
  const visibilityToggle = document.querySelector('#eye');
  const passCreate = document.querySelector('#pass');
  const pass = document.querySelector('#pass-confirmed');
  var password = true;
      visibilityToggle?.addEventListener('click', () => {
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
  const btnNext = (document.getElementById("btn-next") as HTMLButtonElement)
  const createPass = document.querySelector("#create-password")
  createPass?.addEventListener('input', () => {
      if(passConf.value == passCreat.value && passConf.value.length > 0){
          btnNext.removeAttribute('disabled');
      } else {
          btnNext.setAttribute('disabled', 'disabled');
      }
  })
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/');
  }
  const handlePass2 = () => {
    navigate('/create-address')
  }

  return (
    <div id="pagina-cadastro-1">
      <Container>
        <Content>
          <div className="modal-intern">
              <Header>
                  <img src={HOSPTEC} alt="Logo HospTec" onClick={handleLogin}/>
                  <p>Por favor, insira seu dados válidos para realizar o cadastro!</p>
              </Header>
              <Form id="formulario">
                <InputForm>
                  <LineForm>
                    <p>Digite seu nome</p>
                    <Input
                    id="name"
                    type="text"
                    placeholder="Exemplo"
                    required
                    />
                  </LineForm>
                  <LineForm>
                    <p>Digite seu sobrenome</p>
                    <Input
                    id="surname"
                    type="text"
                    placeholder="Exemplo"
                    required
                    />
                  </LineForm>
                </InputForm>
                  <InputForm>
                    <LineForm>
                      <p>Digite seu e-mail</p>
                      <Input
                      type="email"
                      placeholder="exemplo@email.com"
                      required
                      />
                    </LineForm>
                    <LineForm>
                      <p>Digite seu número</p>
                      <Input
                      id="phone"
                      maskType='phone'
                      maxLength={13}
                      type="tel"
                      placeholder="(XX) XXXXX - XXXX"
                      name="phone"
                      onChange={handleChange}
                      required
                      />
                    </LineForm>
                  </InputForm>
                  <UserProfile className="user-radio">
                    <p>Qual tipo de usuário você pretende ser?</p>
                    <InputRadio
                    className="radio-type-user"
                    id="radio1"
                    type="radio"
                    name="react-radio"
                    value="radio1"
                    checked={isRadioSelected('radio1')}
                    onChange={handleRadioClick}
                    onClick={() => setProfile("Paciente")}
                    />
                    <label>Paciente</label>
                    <InputRadio
                    className="radio-type-user"
                    id="radio2"
                    type="radio"
                    name="react-radio"
                    value="radio2"
                    checked={isRadioSelected('radio2')}
                    onChange={handleRadioClick}
                    onClick={() => setProfile("Recepcionista")}
                    />
                    <label>Recepcionista</label>
                    <InputRadio
                    className="radio-type-user"
                    id="radio3"
                    type="radio"
                    name="react-radio"
                    value="radio3"
                    checked={isRadioSelected('radio3')}
                    onChange={handleRadioClick}
                    onClick={() => setProfile("Enfermeiro")}
                    />
                    <label>Enfermeiro(a)</label>
                    <InputRadio
                    className="radio-type-user"
                    id="radio4"
                    type="radio"
                    name="react-radio"
                    value="radio4"
                    checked={isRadioSelected('radio4')}
                    onChange={handleRadioClick}
                    onClick={() => setProfile("Medico")}
                    />
                    <label>Médico(a)</label>
                  </UserProfile>
                  { profile === "Paciente" && <Paciente className="type-user" id="user-paciente"/> }
                  { profile === "Recepcionista" && <Recepcionista className="type-user" id="user-recepcionista"/> }
                  { profile === "Enfermeiro" &&  <Enfermeiro className="type-user" id="user-enfermeiro"/> }
                  { profile === "Medico" && <Medico className="type-user" id="user-medico"/> }
                  <InputForm id="create-password">
                    <LineForm>
                      <p>DIgite sua senha</p>
                      <Input
                      id="pass"
                      type="password"
                      placeholder="***********"
                      onChange={(e) => setPassowordCreate(e.target.value)}
                      required
                      />
                      <span
                      className="material-icons" id="eye">visibility_off</span>
                    </LineForm>
                    <LineForm>
                      <p>DIgite sua senha novamente</p>
                      <Input
                      id="pass-confirmed"
                      type="password"
                      placeholder="***********"
                      onChange={(e) => setPassowordConfirmed(e.target.value)}
                      required
                      />
                    </LineForm>
                  </InputForm>
                <ButtonNext type="submit" id="btn-next" onClick={handlePass2} disabled>Avançar</ButtonNext>
              </Form>
          </div>
        </Content>
      </Container>
    </div>
  )
}

export default CadastroPasso1