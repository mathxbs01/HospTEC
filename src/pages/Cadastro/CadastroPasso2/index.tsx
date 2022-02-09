import React, { InputHTMLAttributes, useState, useCallback, Children } from 'react';
import { useNavigate } from 'react-router-dom';
import { convertCompilerOptionsFromJson } from 'typescript';
import { Input, InputCEP } from '../../../components/Input';
import { Container, Content, Header, Form, InputForm, LineForm, ButtonNext, LineFull } from './style';

import HOSPTEC from '../../../assets/images/login/HOSPTEC.svg';



const CadastroPasso2 = () => {

    const [inputCep, setInputCep] = React.useState('');
    const cep = (document.getElementById("cep") as HTMLInputElement);
    const address = (document.getElementById("address") as HTMLInputElement);
    const neighborhood = (document.getElementById("neighborhood") as HTMLInputElement);
    const city= (document.getElementById("city") as HTMLInputElement);
    const uf = (document.getElementById("uf") as HTMLInputElement);

    const searchCep = async() => {
        const cepValue = cep.value;
        const url = `http://viacep.com.br/ws/${cepValue}/json/`;
        const dados = await fetch(url)
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            cep.value = "CEP não encontrado";
        } else {
            uf.value = endereco.uf;
            city.value = endereco.localidade;
            neighborhood.value = endereco.bairro;
            address.value = endereco.logradouro;
        }
    }


    cep?.addEventListener("focusout", searchCep);





    const navigateLogin = useNavigate();
        function handleLogin(){
            navigateLogin('/');
        }


    return(
        <div id="pagina-cadastro-2">
            <Container>
                <Content>
                    <div className="modal-intern">
                        <Header>
                            <img src={HOSPTEC} alt="Logo HospTec" onClick={handleLogin}/>
                            <p>Por favor, insira seu dados válidos para realizar o cadastro!</p>
                        </Header>
                        <Form>
                            <InputForm>
                                <LineForm>
                                    <p>Digite seu CEP</p>
                                    <InputCEP
                                    id="cep"
                                    type="text"
                                    placeholder="XXXXX-XXX"
                                    onChange={(e) => setInputCep(e.target.value)}
                                    required
                                    />
                                </LineForm>
                                <LineForm>
                                    <p>Estado</p>
                                    <Input
                                    id="uf"
                                    type="text"
                                    disabled
                                    required
                                    />
                                </LineForm>
                            </InputForm>
                            <InputForm>
                                <LineForm>
                                    <p>Cidade</p>
                                    <Input
                                    id="city"
                                    type="text"
                                    placeholder="Exemplo"
                                    disabled
                                    required
                                    />
                                </LineForm>
                                <LineForm>
                                    <p>Bairro</p>
                                    <Input
                                    id="neighborhood"
                                    type="text"
                                    placeholder="Exemplo"
                                    disabled
                                    required
                                    />
                                </LineForm>
                            </InputForm>
                            <InputForm>
                                <LineForm>
                                    <p>Rua</p>
                                    <Input
                                    id="address"
                                    type="text"
                                    placeholder="Exemplo"
                                    disabled
                                    required
                                    />
                                </LineForm>
                                <LineForm>
                                    <p>Número</p>
                                    <Input
                                    id="rua"
                                    type="text"
                                    placeholder="XXXXX"
                                    required
                                    />
                                </LineForm>
                            </InputForm>
                            <InputForm>
                                <LineFull>
                                    <p>Complemento</p>
                                    <Input
                                    id="complemento"
                                    type="text"
                                    placeholder="Exemplo"
                                    />
                                </LineFull>
                            </InputForm>
                            <ButtonNext type="submit" id="btn-next" onClick={handleLogin}>Concluir</ButtonNext>
                        </Form>
                    </div>
                </Content>
            </Container>
        </div>
    )
}

export default CadastroPasso2