import { InputForm, LineForm} from '../../pages/Cadastro/CadastroPasso1/style';
import Input from '../Inputs/Input';

const Paciente = () => {

    return(
        <div id="paciente">
            <InputForm>
                <LineForm>
                    <p>Digite seu CPF</p>
                    <Input
                    type="text"
                    maskType="CPF"
                    placeholder="XXX.XXX.XXX-XX"
                    required
                    />
                </LineForm>
                <LineForm>
                    <p>Digite seu CNS</p>
                    <Input
                    type="text"
                    placeholder="XXXXXXXXXXXXXXX"
                    required
                    />
                </LineForm>
            </InputForm>
            <InputForm>
                <LineForm>
                    <p>Digite nome completo da sua mãe</p>
                    <Input
                    type="text"
                    placeholder="Exemplo"
                    />
                </LineForm>
                <LineForm>
                    <p>Digite nome completo do sua pai</p>
                    <Input
                    type="text"
                    placeholder="Exemplo"
                    />
                </LineForm>
            </InputForm>
        </div>
    )
}
const Recepcionista = () => {
    return(
        <div id="recepcionista">
            <InputForm>
                <LineForm>
                    <p>Digite seu CPF</p>
                    <Input
                    type="text"
                    maskType="CPF"
                    placeholder="XXX.XXX.XXX-XX"
                    required
                    />
                </LineForm>
                <LineForm>
                    <p>Digite seu CTPS</p>
                    <Input
                    type="text"
                    placeholder="XXXXXXXXXXXXXXX"
                    required
                    />
                </LineForm>
            </InputForm>
            <InputForm>
                <LineForm>
                    <p>Digite nome completo da sua mãe</p>
                    <Input
                    type="text"
                    placeholder="Exemplo"
                    />
                </LineForm>
                <LineForm>
                    <p>Digite nome completo do sua pai</p>
                    <Input
                    type="text"
                    placeholder="Exemplo"
                    />
                </LineForm>
            </InputForm>
        </div>
    )
}
const Enfermeiro = () => {
    return(
        <div id="enfermeiro">
            <InputForm>
                <LineForm>
                    <p>Digite seu CPF</p>
                    <Input
                    type="text"
                    maskType="CPF"
                    placeholder="XXX.XXX.XXX-XX"
                    required
                    />
                </LineForm>
                <LineForm>
                    <p>Digite seu CPI</p>
                    <Input
                    type="text"
                    placeholder="XXXXXXXXXXXXXXX"
                    required
                    />
                </LineForm>
            </InputForm>
            <InputForm>
                <LineForm>
                    <p>Digite nome completo da sua mãe</p>
                    <Input
                    type="text"
                    placeholder="Exemplo"
                    />
                </LineForm>
                <LineForm>
                    <p>Digite nome completo do sua pai</p>
                    <Input
                    type="text"
                    placeholder="Exemplo"
                    />
                </LineForm>
            </InputForm>
        </div>
    )
}
const Medico = () => {
    return(
        <div id="medico">
            <InputForm>
                <LineForm>
                    <p>Digite seu CPF</p>
                    <Input
                    type="text"
                    maskType="CPF"
                    placeholder="XXX.XXX.XXX-XX"
                    required
                    />
                </LineForm>
                <LineForm>
                    <p>Digite seu CRM</p>
                    <Input
                    type="text"
                    placeholder="XXXXXXXXXXXXXXX"
                    required
                    />
                </LineForm>
            </InputForm>
            <InputForm>
                <LineForm>
                    <p>Qual sua especialidade?</p>
                    <select required>
                        <option disabled selected>Escolha</option>
                        <option>Cardiologista</option>
                        <option>Clínico Geral</option>
                        <option>Dentista</option>
                        <option>Ginecologista</option>
                        <option>Neurologista</option>
                        <option>Obstetra</option>
                        <option>Oftalmologista</option>
                        <option>Otorrino</option>
                        <option>Psiquiatra</option>
                        <option>Pneumologista</option>
                    </select>
                </LineForm>
                <LineForm>
                    <p>Digite nome completo da sua mãe</p>
                    <Input
                    type="text"
                    placeholder="Exemplo"
                    />
                </LineForm>
            </InputForm>
        </div>
    )
}

export {
  Paciente,
  Enfermeiro,
  Medico,
  Recepcionista
}
